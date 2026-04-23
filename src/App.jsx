import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function App() {
  const [aboutPage, setAboutPage] = useState("main");
  const profileImageUrl = `${import.meta.env.BASE_URL}headshot.jpg`;

  if (aboutPage === "hobbies") {
    const hockeyImg = `${import.meta.env.BASE_URL}hockey.jpg`;
    const movieImg = `${import.meta.env.BASE_URL}moneyball.jpg`;
    const friendsImg = `${import.meta.env.BASE_URL}friends.jpeg`;

    return (
      <div className="min-h-screen bg-slate-950 px-8 py-10 text-slate-100">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => setAboutPage("main")}
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Back to Home
          </button>

          <h1 className="mt-6 text-4xl font-bold text-white">
            Hobbies & Interests
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Outside of academics and professional work, I enjoy staying active,
            playing sports, and spending time with friends. This page gives a
            more personal look into the activities and experiences that matter
            most to me outside of school and work.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
              <img
                src={hockeyImg}
                alt="Daniel playing hockey"
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white">Hockey</h2>
                <p className="mt-2 text-slate-400">
                  Hockey has been my life since I was 3 years old. It has taught me so much about discipline and teamwork, 
                  but more importantly, it has given me some of the best memories and friendships I could ask for. I continue my love for the game
                  by playing for the UNC club team, where I am a right winger and alternate captain. The photo above came after my OT GWG vs NC State!
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
              <img
                src={movieImg}
                alt="Best Movie Ever"
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white">Movies</h2>
                <p className="mt-2 text-slate-400">
                  I love watching movies, and Moneyball is one of my all-time favorites. It exposed me 
                  to the world of sports analytics and inspired my passion for data science in the first place.
                  I'm not sure where I would be without it!
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
              <img
                src={friendsImg}
                alt="Daniel spending time with friends"
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white">Friends</h2>
                <p className="mt-2 text-slate-400">
                  Spending time with friends is a huge priority for me. Whether it's golfing, 
                  watching a movie, or going on our Spring Break trips, the time I spend with my friends at UNC 
                  and at home is incredibly important to me. I would not be in the same place without their constant support, 
                  laughs, and teasing :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                I'm a junior at the University of North Carolina at Chapel Hill
                majoring in Statistics and Computer Science. As an aspiring data
                scientist, I am incredibly passionate about using data to solve
                complex problems and drive informed decision-making. I have
                experience with many data science tools and techniques, and I am
                always looking to learn more. Please connect with me if you want
                to chat about data science, analytics, or anything else!
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <button
                  onClick={() => setAboutPage("hobbies")}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-5 text-left transition hover:-translate-y-1 hover:border-blue-300 hover:bg-slate-800"
                >
                  <h3 className="text-xl font-semibold text-white">
                    Hobbies & Interests
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Click to learn more about what I enjoy outside of school and
                    work.
                  </p>
                </button>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-xl font-semibold text-white">Sports</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A future interactive page for hockey and soccer.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-xl font-semibold text-white">
                    Life Outside Work
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A future page for friends, experiences, and personal
                    moments.
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