
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Montis App",
    desc: "Logistics SaaS for job tracking and scheduling.",
    tech: "React, Next.js",
    github: "#",
    live: "#",
  },
  {
    title: "Calendar App",
    desc: "Interactive yearly calendar with week system.",
    tech: "React",
    github: "#",
    live: "#",
  },
  {
    title: "Terrarium Website",
    desc: "I developed a modern, responsive website for marketing handcrafted terrariums using Next.js and React. The project focuses on performance, SEO optimization, and clean UI/UX design. I implemented dynamic components, optimized images for fast loading, and integrated a contact form with a custom API route and Nodemailer for email communication. The website is deployed on Vercel with a GitHub-based workflow and uses environment variables for secure configuration.",
    tech: "Next.js (App Router), React, Tailwind CSS, Node.js, Nodemailer, Vercel, GitHub",
    image: "/projects/terramv.webp",
    github: "#",
    live: "https://terramnext.vercel.app",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function App() {
  return (
    <div className="px-6 md:px-20 py-10">

{/* HERO */}
<motion.section
  initial="hidden"
  animate="show"
  variants={fadeUp}
  className="flex min-h-[75vh] flex-col items-center justify-center px-5 py-8 text-center"
>
  {/* Profile image */}
  <img
    src="/011.webp"
    alt="Jovan Munjas"
    className="mb-6 h-32 w-32 rounded-full border-4 border-gray-700 object-cover shadow-2xl sm:h-36 sm:w-36"
  />

  {/* Eyebrow */}
  
  <p className="my-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
    Izrada web-sajtova
  </p>

  {/* Main heading */}
  <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
    Vaš posao zaslužuje moderan sajt.
  </h1>

  {/* Description */}
  <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
    Izrađujem moderne i funkcionalne veb-sajtove koji predstavljaju vaš posao na pravi način i olakšavaju klijentima da vas pronađu i kontaktiraju.
  </p>

  {/* Call to action buttons */}
  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
    <a
      href="#contact"
      className="inline-flex min-w-44 items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-80"
    >
      Započnimo saradnju
    </a>

    <a
      href="#projects"
      className="inline-flex min-w-44 items-center justify-center rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-gray-400 hover:bg-white/5"
    >
      Pogledaj moje radove
    </a>
  </div>
</motion.section>
{/* KRAJ HERO SEKCIJE */}


{/* SERVICES */}
<section id="services" className="mx-auto mb-24 max-w-6xl py-16">

  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
    className="mb-12 text-center"
  >
  
    <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
      Usluge
    </h2>

  </motion.div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

    {/* SERVICE 1 */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="group rounded-2xl border border-gray-800 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.04]"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4M7 8h10M7 12h6" />
        </svg>
      </div>
<img src="/SERVICE/izrada.webp" alt="" />
      <h3 className="my-3 text-xl font-semibold text-white text-center">
        Izrada veb-sajtova
      </h3>

      <p className="mb-6 leading-relaxed text-gray-400">
        Profesionalni sajtovi koji predstavljaju vaš biznis,
        usluge i proizvode na moderan i pregledan način.
      </p>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>✓ Moderan i prilagođen dizajn</li>
        <li>✓ Mobilni telefoni i tableti</li>
        <li>✓ Jasna struktura i navigacija</li>
      </ul>
    </motion.div>

    {/* SERVICE 2 */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="group rounded-2xl border border-gray-800 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.04]"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h4" />
        </svg>
      </div>
      <img src="/SERVICE/landingPage.webp" alt="" />
      <h3 className="my-3 text-xl font-semibold text-white text-center">
        Landing stranice
      </h3>

      <p className="mb-6 leading-relaxed text-gray-400">
        Fokusirane stranice za predstavljanje usluge,
        proizvoda, posebne ponude ili nove ideje.
      </p>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>✓ Jasna i efektna prezentacija</li>
        <li>✓ Istaknuti pozivi na akciju</li>
        <li>✓ Jednostavan kontakt sa klijentima</li>
      </ul>
    </motion.div>

    {/* SERVICE 3 */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="group rounded-2xl border border-gray-800 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.04]"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
          <path d="M4 7V4h3M4 12v1M10 4h1" />
        </svg>
      </div>
        <img src="/SERVICE/redizajn.webp" alt="" />
      <h3 className="my-3 text-xl font-semibold text-white text-center">
        Redizajn sajta
      </h3>

      <p className="mb-6 leading-relaxed text-gray-400">
        Unapređenje postojećih sajtova kako bi izgledali
        savremenije, bili pregledniji i bolje radili na mobilnim uređajima.
      </p>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>✓ Osvežavanje vizuelnog identiteta</li>
        <li>✓ Poboljšanje mobilnog prikaza</li>
        <li>✓ Preglednija struktura sadržaja</li>
      </ul>
    </motion.div>

  </div>

</section>


      {/* PROJECTS */}
      <section id="projects" className="mb-24">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-bold mb-10 text-center"
        >
          Radovi
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              className="cursor-pointer group bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 shadow-xl hover:scale-105 hover:border-indigo-500 transition overflow-hidden"
            > <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold mb-3 mt-5">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <p className="text-sm text-gray-500 mb-6">{p.tech}</p>

              <div className="flex gap-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary px-4 py-2 rounded-lg text-sm"
                >
                  Live
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-800"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        className="text-center mb-24"
      >
        <h2 className="text-3xl font-bold mb-4">Imate ideju za sajt?</h2>
        <p className="text-gray-400 mb-6">Otvoren sam za nove projekte i freelance saradnju.</p>
        <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl">
          Pošaljite upit
        </a>
      </motion.section>

      {/* CONTACT */}
      <section id="contact" className="text-center">
        <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
        <p className="text-gray-400">your@email.com</p>
        <p className="text-gray-400">github.com/yourprofile</p>
      </section>
    </div>
  );
}
