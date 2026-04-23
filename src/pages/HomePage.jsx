import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function HomePage() {
  const profileImageUrl = `${import.meta.env.BASE_URL}headshot.jpg`;

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <header className="w-full border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl justify-end px-8 py-6">
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

      <main className="w-full px-8 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[320px_1fr] gap-10">
          <aside className="border-r border-slate-800 pr-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold text-white">Daniel Kauber</h1>

              <div className="mt-8 h-64 w-64 overflow-hidden rounded-full border-[6px] border-slate-300 shadow-xl">
                <img
                  src={profileImageUrl}
                  alt="Daniel Kauber headshot"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-6 text-xl text-slate-300">
                Data Science | Analytics
              </p>

              <div className="mt-8 flex items-center justify-center gap-6">
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

              <p className="mt-10 text-xl text-slate-300">
                Pleasantville, NY | Chapel Hill, NC
              </p>
            </div>
          </aside>

          <section className="min-h-[70vh] space-y-16">
            <div id="about">
              <h2 className="text-3xl font-semibold text-white">About</h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                I’m a Statistics and Computer Science student at UNC Chapel Hill
                with a strong interest in data science, analytics, and using data
                to solve real-world problems. Outside of academics and professional
                work, I enjoy sports, spending time with friends, and staying active.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <Link
                  to="/about/hobbies"
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-slate-800"
                >
                  <h3 className="text-xl font-semibold text-white">
                    Hobbies & Interests
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Learn more about what I enjoy outside of school and work.
                  </p>
                </Link>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-xl font-semibold text-white">Sports</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A future page for hockey, soccer, and competition.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-xl font-semibold text-white">
                    Life Outside Work
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A future page for friends, experiences, and personal moments.
                  </p>
                </div>
              </div>
            </div>

            <div id="experience">
              <h2 className="text-3xl font-semibold text-white">Experience</h2>
              <p className="mt-4 text-slate-400">
                Add your internships, leadership, and relevant work here.
              </p>
            </div>

            <div id="projects">
              <h2 className="text-3xl font-semibold text-white">Projects</h2>
              <p className="mt-4 text-slate-400">
                Add technical and data-focused projects here.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}