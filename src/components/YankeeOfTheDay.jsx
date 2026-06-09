import { useEffect, useState } from "react";

const YANKEES_TEAM_ID = 147;
const SEASON = new Date().getFullYear();

function pickByDate(list) {
  const now = new Date();
  const dayKey =
    now.getFullYear() * 1000 +
    Math.floor(
      (now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
  return list[dayKey % list.length];
}

function statLine(splits, group) {
  if (!splits || splits.length === 0) return null;
  const s = splits[splits.length - 1].stat || {};
  if (group === "hitting") {
    return [
      { label: "AVG", value: s.avg ?? "—" },
      { label: "HR", value: s.homeRuns ?? "—" },
      { label: "RBI", value: s.rbi ?? "—" },
      { label: "OPS", value: s.ops ?? "—" },
    ];
  }
  return [
    { label: "ERA", value: s.era ?? "—" },
    { label: "W", value: s.wins ?? "—" },
    { label: "SO", value: s.strikeOuts ?? "—" },
    { label: "WHIP", value: s.whip ?? "—" },
  ];
}

export default function YankeeOfTheDay() {
  const [player, setPlayer] = useState(null);
  const [info, setInfo] = useState(null);
  const [season, setSeason] = useState(null);
  const [career, setCareer] = useState(null);
  const [group, setGroup] = useState("hitting");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const rosterRes = await fetch(
          `https://statsapi.mlb.com/api/v1/teams/${YANKEES_TEAM_ID}/roster?rosterType=active`
        );
        const rosterData = await rosterRes.json();
        const roster = rosterData.roster || [];
        if (roster.length === 0) throw new Error("empty roster");

        const chosen = pickByDate(roster);
        if (cancelled) return;
        setPlayer(chosen);

        const isPitcher = chosen.position?.abbreviation === "P";
        const grp = isPitcher ? "pitching" : "hitting";
        setGroup(grp);

        const id = chosen.person.id;

        const [infoRes, seasonRes, careerRes] = await Promise.all([
          fetch(`https://statsapi.mlb.com/api/v1/people/${id}`),
          fetch(
            `https://statsapi.mlb.com/api/v1/people/${id}/stats?stats=season&season=${SEASON}&group=${grp}`
          ),
          fetch(
            `https://statsapi.mlb.com/api/v1/people/${id}/stats?stats=career&group=${grp}`
          ),
        ]);

        const infoData = await infoRes.json();
        const seasonData = await seasonRes.json();
        const careerData = await careerRes.json();

        if (cancelled) return;
        setInfo(infoData.people?.[0] || null);
        setSeason(statLine(seasonData.stats?.[0]?.splits, grp));
        setCareer(statLine(careerData.stats?.[0]?.splits, grp));
      } catch (e) {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mt-8 w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 text-left">
      <div className="flex items-center gap-2">
        <span className="text-lg">⚾</span>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Today's Yankee of the Day
        </h3>
      </div>

      {error ? (
        <p className="mt-3 text-sm text-slate-500">
          Couldn't load player data right now. Check back later.
        </p>
      ) : !player ? (
        <p className="mt-3 text-sm text-slate-500">Loading…</p>
      ) : (
        <div className="mt-3">
          <p className="text-lg font-semibold text-white">
            {player.person.fullName}
          </p>
          <p className="text-sm text-blue-300">
            {player.position?.name}
            {player.jerseyNumber ? ` · #${player.jerseyNumber}` : ""}
          </p>
          {info?.birthCity && (
            <p className="mt-1 text-xs text-slate-500">
              From {info.birthCity}
              {info.birthCountry ? `, ${info.birthCountry}` : ""}
            </p>
          )}

          {season && (
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {SEASON} Season
              </p>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {season.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg bg-slate-800 px-2 py-2 text-center"
                  >
                    <p className="text-sm font-semibold text-white">{s.value}</p>
                    <p className="text-[10px] uppercase text-slate-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {career && (
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Career
              </p>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {career.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg bg-slate-800 px-2 py-2 text-center"
                  >
                    <p className="text-sm font-semibold text-white">{s.value}</p>
                    <p className="text-[10px] uppercase text-slate-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
