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
    <div className="grid grid-cols-2 grid-rows-2 justify-center p-4 items-center shaded mb-12">
      {/* personal photo */}

      <img
        className="row-span-2 rounded-xl justify-self-center w-sm"
        src={"PROFILE_picture.png"}
      />

      {/* a simple message about me */}
      <div className="aboutme justify-self-center text-2xl font-light w-10/12 p-4">
        {
          "I'm a developer who loves a challenge. Currently studying Computer Science at KNUST, I have dedicated myself to mastering the modern web stack (React, Next.js) while simultaneously training in cybersecurity. I am passionate about continuous learning and applying technical skills to build practical, efficient digital solutions."
        }
      </div>
      {/* Primary Info */}
      <div className="grid grid-cols-2 grid-rows-1 gap-6  shadow-xl rounded-2xl p-4 bg-gray-900/30 text-lg w-10/12 justify-self-center backdrop-blur-2xl">
        <div>
          {/* <h2 className="text-xl font-bold mb-2">Key</h2> */}
          <ul className="text-right">
            <li>First Name</li>
            <li>Middle Names</li>
            <li>Last Name</li>
            <li>Date Of Birth</li>
            <li>G-mail</li>
            <li>Phone</li>
          </ul>
        </div>
        <div>
          {/* <h2 className="text-xl font-bold mb-2">Value</h2> */}
          <ul className="text-left">
            <li>Erastus</li>
            <li>Uriah Nyarku</li>
            <li>Kwaw</li>
            <li>11-02-2005</li>
            <li>kwawerastus2</li>
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
  const education = [];
  return (
    <section className="mb-12 mx-auto text-center">
      <div>
        <h3>Degree:</h3>
        <p>{"Bachelor of Computer Science, KNUST (Expected 2028)"}</p>
      </div>
    </section>
  );
}
