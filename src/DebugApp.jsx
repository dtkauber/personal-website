import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function DebugApp() {
  const profileImageUrl = `${import.meta.env.BASE_URL}headshot.jpg`;

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      {/* Top header: name left, nav right */}
      <header className="w-full border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
          <div className="text-2xl font-semibold text-white sm:text-3xl">
            Daniel Kauber
          </div>

          <nav className="flex gap-8 text-lg text-slate-300">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
          </nav>
        </div>
      </header>

      {/* Body: left sidebar + right main */}
      <main className="w-full px-8 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[320px_1fr] gap-10">
          {/* Left sidebar */}
          <aside className="border-r border-slate-800 pr-8">
            <div className="flex flex-col items-center text-center">
              <p className="mt-2 text-xl text-slate-300">
                Data Science | Analytics
              </p>

              <div className="mt-10 h-64 w-64 overflow-hidden rounded-full border-[6px] border-slate-300 shadow-xl">
                <img
                  src={profileImageUrl}
                  alt="Daniel Kauber headshot"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-10 flex items-center justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/daniel-kauber/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-500 text-2xl text-slate-200 transition hover:border-blue-300 hover:text-blue-300"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/dtkauber"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-500 text-2xl text-slate-200 transition hover:border-blue-300 hover:text-blue-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:dtkauber@gmail.com"
                  aria-label="Email"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-500 text-2xl text-slate-200 transition hover:border-blue-300 hover:text-blue-300"
                >
                  <HiOutlineMail />
                </a>
              </div>

              <p className="mt-12 text-xl text-slate-300">
                Pleasantville, NY | Chapel Hill, NC
              </p>
            </div>
          </aside>

          {/* Right main content */}
          <section className="min-h-[70vh]">
            <div className="space-y-10">
              {/* About */}
              <div id="about">
                <h2 className="text-3xl font-semibold text-white">About</h2>
                <div className="mt-4 space-y-3">
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                </div>
              </div>

              {/* Experience */}
              <div id="experience">
                <h2 className="text-3xl font-semibold text-white">Experience</h2>
                <div className="mt-4 space-y-3">
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                </div>
              </div>

              {/* Projects */}
              <div id="projects">
                <h2 className="text-3xl font-semibold text-white">Projects</h2>
                <div className="mt-4 space-y-3">
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                  <div className="h-2 w-full rounded bg-slate-800/80" />
                </div>
              </div>

              {/* Interests (matches bottom of your sketch) */}
              <div>
                <h2 className="text-3xl font-semibold text-white">Interests</h2>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="rounded border border-slate-800 bg-slate-900/20 p-4">
                    <div className="h-28 w-full rounded bg-slate-800/60" />
                    <div className="mt-3 text-slate-400">Caption</div>
                  </div>
                  <div className="rounded border border-slate-800 bg-slate-900/20 p-4">
                    <div className="h-28 w-full rounded bg-slate-800/60" />
                    <div className="mt-3 text-slate-400">Caption</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}