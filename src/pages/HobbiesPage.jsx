import { Link } from "react-router-dom";

export default function HobbiesPage() {
  const hockeyImage = `${import.meta.env.BASE_URL}hockey.jpg`;
  const soccerImage = `${import.meta.env.BASE_URL}soccer.jpg`;
  const friendsImage = `${import.meta.env.BASE_URL}friends.jpg`;

  return (
    <div className="min-h-screen bg-slate-950 px-8 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-white">
          Hobbies & Interests
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Outside of academics and professional work, a big part of who I am
          comes from sports, friendships, and staying active. These experiences
          have shaped my mindset, discipline, and the way I connect with others.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <img
              src={hockeyImage}
              alt="Playing hockey"
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white">Hockey</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Hockey has taught me discipline, teamwork, and resilience.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <img
              src={soccerImage}
              alt="Playing soccer"
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white">Soccer</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Soccer has been another important outlet for competition and fun.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <img
              src={friendsImage}
              alt="Spending time with friends"
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white">Friends</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                I value friendships, shared experiences, and making time for the
                people around me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}