
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Montiis App",
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
      {/* NAV */}
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-xl font-bold">Jovan Munjas</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="flex flex-col items-center text-center min-h-[70vh] justify-center"
      >
        <img
          src="/01.webp"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
        />
        <h2 className="text-5xl md:text-6xl font-bold mb-4 mt-4">
          Frontend Developer
        </h2>

        <p className="text-gray-400 text-lg mb-6 max-w-xl">
          I build modern, fast and visually polished web applications using React and Next.js.
        </p>

        <a
          href="#projects"
          className="bg-primary px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
        >
          View Projects
        </a>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="mb-24">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-bold mb-10 text-center"
        >
          Projects
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
        <h2 className="text-3xl font-bold mb-4">Let’s build something great</h2>
        <p className="text-gray-400 mb-6">Available for freelance or full-time roles.</p>
        <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl">
          Contact Me
        </a>
      </motion.section>

      {/* CONTACT */}
      <section id="contact" className="text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">your@email.com</p>
        <p className="text-gray-400">github.com/yourprofile</p>
      </section>
    </div>
  );
}
