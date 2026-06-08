import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// Free dark street-map style — no API key required
const MAP_STYLE = "https://tiles.openfreemap.org/styles/dark";

// Chronological: hometown -> newest
// Chronological: hometown -> newest
const LOCATIONS = [
  { id: 1, title: "Hometown", org: "Where it all started", location: "Pleasantville, NY", coordinates: [-73.779, 41.133], color: "#94a3b8", zoom: 12 },
  { id: 2, title: "Performance Data Analyst", org: "UNC Women's Soccer", location: "Chapel Hill, NC", coordinates: [-79.056, 35.913], color: "#60a5fa", zoom: 12 },
  { id: 3, title: "Data Analytics Intern", org: "Aspida Financial Services", location: "Durham, NC", coordinates: [-78.898, 35.994], color: "#60a5fa", zoom: 12 },
  { id: 4, title: "Data Engineering Intern", org: "Wells Fargo", location: "Charlotte, NC", coordinates: [-80.843, 35.227], color: "#60a5fa", zoom: 12 },
  { id: 5, title: "Future Analytics Star", org: "NBA", location: "New York, NY", coordinates: [-74.006, 40.714], color: "#fbbf24", zoom: 12 },
];

export default function ExperienceMap() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const [activeId, setActiveId] = useState(LOCATIONS[0].id);
  const cardRefs = useRef({});

  // Initialize the map once
  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: LOCATIONS[0].coordinates,
      zoom: LOCATIONS[0].zoom,
      attributionControl: false,
    });
    mapRef.current = map;

    // Add a marker for each location
    LOCATIONS.forEach((loc) => {
      const el = document.createElement("div");
      el.style.width = "18px";
      el.style.height = "18px";
      el.style.borderRadius = "50%";
      el.style.background = loc.color;
      el.style.border = "2px solid #f8fafc";
      el.style.boxShadow = `0 0 8px ${loc.color}`;
      el.style.transition = "transform 0.3s";

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(loc.coordinates)
        .addTo(map);

      markersRef.current[loc.id] = el;
    });

    return () => map.remove();
  }, []);

  // Fly to the active location: zoom out → pan → zoom back in
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const active = LOCATIONS.find((l) => l.id === activeId);
    if (!active) return;

    // flyTo automatically arcs out and back in (zoom out while panning, zoom in on arrival)
    map.flyTo({
      center: active.coordinates,
      zoom: active.zoom,
      speed: 0.8,
      curve: 1.8, // higher = more "zoom out" during the arc
      essential: true,
    });

    // Highlight the active marker
    Object.entries(markersRef.current).forEach(([id, el]) => {
      const isActive = Number(id) === activeId;
      el.style.transform = isActive ? "scale(1.6)" : "scale(1)";
      el.style.zIndex = isActive ? "10" : "1";
    });
  }, [activeId]);

  // Watch which card is centered in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(Number(entry.target.dataset.id));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    Object.values(cardRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = LOCATIONS.find((l) => l.id === activeId) || LOCATIONS[0];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* LEFT: scrolling timeline */}
      <div className="relative">
        <div className="absolute left-[10px] top-2 bottom-2 w-px bg-slate-700" />
        <div className="space-y-8">
          {LOCATIONS.map((loc) => {
            const isActive = loc.id === activeId;
            return (
              <div
                key={loc.id}
                data-id={loc.id}
                ref={(el) => (cardRefs.current[loc.id] = el)}
                className="relative pl-10"
              >
                <span
                  className="absolute left-[3px] top-5 h-4 w-4 rounded-full border-2 transition"
                  style={{
                    background: isActive ? loc.color : "#0f172a",
                    borderColor: loc.color,
                    boxShadow: isActive ? `0 0 10px ${loc.color}` : "none",
                  }}
                />
                <div
                  className="rounded-2xl border bg-slate-900 p-5 transition"
                  style={{
                    borderColor: isActive ? loc.color : "#1e293b",
                    transform: isActive ? "translateX(4px)" : "none",
                    opacity: isActive ? 1 : 0.55,
                  }}
                >
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    {loc.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: loc.color }}>
                    {loc.org}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {loc.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: sticky street map that flies between locations */}
      <div className="relative">
        <div className="sticky top-8">
          <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="pointer-events-none absolute right-4 top-4 z-10 min-w-52 rounded-xl border border-slate-700 bg-slate-950/90 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">{active.city}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{active.role}</p>
            </div>
            <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}