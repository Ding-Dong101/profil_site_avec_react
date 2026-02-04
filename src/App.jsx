import React from "react";

function App() {
  return (
    <div className=" px-4 mainContainer">
      <NavBar />
      <ProfilePicture />
      <Skills />
      <Education />
    </div>
  );
}

export default App;

function NavBar() {
  return (
    <nav className="my-4 shaded">
      <ul className="rounded-2xl border-gray-300 border-2 flex gap-4 p-2 justify-center text-lg max-w-max m-auto items-center">
        <li className="active hover:animate-bounce hover:cursor-pointer ">
          Frontend Web Developer
        </li>
        <li className=" hover:animate-bounce hover:cursor-pointer ">
          Cyber Security Analyst
        </li>
      </ul>
    </nav>
  );
}
function ProfilePicture() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 items-center justify-center p-4 gap-8 lg:gap-4 shaded mb-12">
      {/* 1. Personal Photo */}
      <img
        className="row-span-2 rounded-xl justify-self-center w-full max-w-sm object-cover shadow-lg"
        src={"PROFILE_picture.png"}
        alt="Profile"
      />

      {/* 2. Simple message about me */}
      <div className="aboutme justify-self-center text-xl md:text-2xl font-light w-full lg:w-10/12 p-4 text-center lg:text-left">
        {
          "I'm a developer who loves a challenge. Currently studying Computer Science at KNUST, I have dedicated myself to mastering the modern web stack (React, Next.js) while simultaneously training in cybersecurity. I am passionate about continuous learning and applying technical skills to build practical, efficient digital solutions."
        }
      </div>

      {/* 3. Primary Info */}
      <div className="grid grid-cols-2 gap-4 shadow-xl rounded-2xl p-6 bg-gray-900/30 text-base md:text-lg w-full lg:w-10/12 justify-self-center backdrop-blur-2xl">
        <div className="text-right font-medium text-gray-400">
          <ul className="space-y-1">
            <li>First Name</li>
            <li>Middle Names</li>
            <li>Last Name</li>
            <li>Date Of Birth</li>
            <li>G-mail</li>
            <li>Phone</li>
          </ul>
        </div>
        <div className="text-left text-white">
          <ul className="space-y-1">
            <li>Erastus</li>
            <li>Uriah Nyarku</li>
            <li>Kwaw</li>
            <li>11-02-2005</li>
            <li className="truncate">kwawerastus2</li>
            <li>059-8918-102</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const skillsData = {
    frontend: [
      {
        text: "React",
        level: 80,
        icon: "https://img.icons8.com/color/100/react-native.png",
      },
      {
        text: "Next.js",
        level: 70,
        icon: "https://img.icons8.com/color/100/nextjs.png",
      },
      {
        text: "Tailwind CSS",
        level: 85,
        icon: "https://img.icons8.com/color/100/tailwindcss.png",
      },
    ],
    backend: [
      {
        text: "Python",
        level: 75,
        icon: "https://img.icons8.com/color/100/python.png",
      },
      {
        text: "C++",
        level: 60,
        icon: "https://img.icons8.com/color/100/c-plus-plus-logo.png",
      },
      {
        text: "Django",
        level: 65,
        icon: "https://img.icons8.com/color/100/django.png",
      },
      {
        text: "Bash Scripting",
        level: 55,
        icon: "https://img.icons8.com/color/100/bash.png",
      },
    ],
    tools: [
      {
        text: "Kali Linux",
        level: 50,
        icon: "https://img.icons8.com/color/100/kali-linux.png",
      },
      {
        text: "Git/GitHub",
        level: 80,
        icon: "https://img.icons8.com/color/100/git.png",
      },
      {
        text: "Figma",
        level: 60,
        icon: "https://img.icons8.com/color/100/figma.png",
      },
    ],
  };

  return (
    <section className=" text-white mb-12">
      <h3 className="text-center mb-12 font-bold text-4xl">
        Tools I bend to my will
      </h3>

      {/* Loop through the categories (Frontend, Backend, Tools) */}
      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {Object.entries(skillsData).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col text-center items-center gap-6 border-b border-slate-800 pb-8 last:border-0"
          >
            {/* Category Title */}
            <h4 className="text-2xl font-semibold capitalize w-32 text-slate-300">
              {category}
            </h4>

            {/* Skills List for this Category */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start flex-1">
              {items.map((skill) => (
                <div
                  key={skill.text}
                  className="flex flex-col items-center group"
                >
                  <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl hover:border-cyan-500 transition-colors duration-300 w-24 h-24 flex items-center justify-center mb-2">
                    <img
                      src={skill.icon}
                      alt={skill.text}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-400 group-hover:text-cyan-400">
                    {skill.text}
                  </span>
                  {/* Optional: Simple Progress Bar */}
                  <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-500 h-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const certifications = [
    {
      text: "CodeCademy certification in Java OOP",
      link: "https://drive.google.com/file/d/1oSABGZI__sQYjPuVAEnqu7ybUZvhRDZn/view?usp=drive_link",
    },
    {
      text: "CodeCademy certification in JavaScript",
      link: "https://drive.google.com/file/d/1quWIEtCYgvljEmsZXEtLKaUplthRBb7y/view?usp=drive_link",
    },
    {
      text: "CodeCademy certification in Linear Algebra",
      link: "https://drive.google.com/file/d/1AD9Ni1slNkkSMRcwpleUI4pAO0RmY4bs/view?usp=drive_link",
    },
    {
      text: "CodeCademy certification in Python",
      link: "https://drive.google.com/file/d/1rBWFzLi3Ya_1d0hCVC43yD1U5D-7s9u5/view?usp=drive_link",
    },
    {
      text: "UITS Bootcamp",
      link: "./assets/cert.png",
    },
  ];

  return (
    <section className="mb-12 px-6 md:px-12 lg:px-32 xl:px-42">
      <div className="max-w-4xl mx-auto">
        {/* Education Section */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            My Educational Background
          </h3>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-300">
            <li>
              Bachelor of Computer Science, KNUST{" "}
              <span className="text-sm italic opacity-70">(Expected 2028)</span>
            </li>
            <li>Student of Codecademy</li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-gray-700"
                >
                  <span className="text-base md:text-xl text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                  <img
                    className="w-6 h-6 md:w-8 md:h-8 invert opacity-70 group-hover:opacity-100"
                    src="https://img.icons8.com/material-outlined/24/download--v1.png"
                    alt="download icon"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
