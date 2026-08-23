import React, { useState } from "react";
import certImg from "./assets/cert.png";
import assemblyCert from "./assets/assembly language.pdf";

function App() {
  const [activeTab, setActiveTab] = useState("systems");
  return (
    <div className="main-container">
      <NavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ProfilePicture />
      {activeTab === "systems" ? <SystemsEngineer /> : <AppSecEngineer />}
    </div>
  );
}

export default App;

function NavBar({ activeTab, setActiveTab }) {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li
          className={`nav-item ${activeTab === "systems" ? "active" : ""}`}
          onClick={() => setActiveTab("systems")}
        >
          Systems Engineer
        </li>
        <li
          className={`nav-item ${activeTab === "appsec" ? "active" : ""}`}
          onClick={() => setActiveTab("appsec")}
        >
          Application Security Engineer
        </li>
      </ul>
    </nav>
  );
}

function ProfilePicture() {
  return (
    <div className="profile-section">
      {/* 1. Personal Photo */}
      <div className="profile-image-container">
        <img
          className="profile-image"
          src={"PROFILE_picture.png"}
          alt="Profile"
        />
      </div>

      {/* 2. Simple message about me */}
      <div className="profile-about">
        I'm a developer who loves a challenge. Currently studying Computer Science at KNUST, I have dedicated myself to mastering systems engineering and scalable backend architectures while simultaneously training in application security. I am passionate about continuous learning and applying technical skills to build robust, secure digital infrastructure.
      </div>

      {/* 3. Primary Info */}
      <div className="profile-info-card">
        <div className="info-labels">
          <span>First Name</span>
          <span>Middle Names</span>
          <span>Last Name</span>
          <span>Date Of Birth</span>
          <span>G-mail</span>
          <span>Phone</span>
        </div>
        <div className="info-values">
          <span>Erastus</span>
          <span>Uriah Nyarku</span>
          <span>Kwaw</span>
          <span>11-02-2005</span>
          <span>kwawerastus2</span>
          <span>059-8918-102</span>
        </div>
      </div>
    </div>
  );
}

function Skills({ data }) {
  return (
    <section>
      <h3 className="section-title">
        Tools I bend to my will
      </h3>

      <div className="skills-container">
        {Object.entries(data).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h4 className="category-title">
              {category}
            </h4>

            <div className="skill-grid">
              {items.map((skill) => (
                <div key={skill.text} className="skill-card">
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.icon}
                      alt={skill.text}
                      className="skill-icon"
                    />
                  </div>
                  <span className="skill-name">
                    {skill.text}
                  </span>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-bar"
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

function Education({ certifications }) {

  return (
    <section className="education-section">
      <div className="education-block">
        <h3 className="education-title">
          My Educational Background
        </h3>
        <ul className="education-list">
          <li>
            Bachelor of Computer Science, KNUST{" "}
            <span style={{ fontSize: "0.85em", opacity: 0.7, fontStyle: "italic" }}>
              (Expected 2028)
            </span>
          </li>
          <li>Student of Codecademy</li>
        </ul>
      </div>

      <div className="education-block">
        <h3 className="education-title">
          Certifications
        </h3>
        <ul className="cert-list">
          {certifications.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-item"
              >
                <span>{item.text}</span>
                <img
                  className="cert-icon"
                  src="https://img.icons8.com/material-outlined/24/download--v1.png"
                  alt="download icon"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SystemsEngineer() {
  const skillsData = {
    infrastructure: [
      {
        text: "Linux",
        level: 85,
        icon: "https://img.icons8.com/color/100/linux.png",
      },
      {
        text: "Nginx",
        level: 70,
        icon: "https://img.icons8.com/color/100/nginx.png",
      },
      {
        text: "AWS",
        level: 60,
        icon: "https://img.icons8.com/color/100/amazon-web-services.png",
      },
    ],
    languages: [
      {
        text: "Python",
        level: 75,
        icon: "https://img.icons8.com/color/100/python.png",
      },
      {
        text: "C++",
        level: 65,
        icon: "https://img.icons8.com/color/100/c-plus-plus-logo.png",
      },
      {
        text: "Bash Scripting",
        level: 75,
        icon: "https://img.icons8.com/color/100/bash.png",
      },
      {
        text: "Java",
        level: 60,
        icon: "https://img.icons8.com/color/100/java-coffee-cup-logo.png",
      },
      {
        text: "Assembly",
        level: 50,
        icon: "https://img.icons8.com/color/100/processor.png",
      }
    ],
    tools: [
      {
        text: "Git/GitHub",
        level: 85,
        icon: "https://img.icons8.com/color/100/git.png",
      },
      {
        text: "Docker",
        level: 70,
        icon: "https://img.icons8.com/color/100/docker.png",
      },
    ],
  };

  const sysEngCerts = [
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
      text: "Computer Architecture: Assembly Language",
      link: assemblyCert,
    },
  ];

  return (
    <>
      <Skills data={skillsData} />
      <Education certifications={sysEngCerts} />
    </>
  );
}

function AppSecEngineer() {
  const skillsData = {
    security: [
      {
        text: "OWASP",
        level: 80,
        icon: "https://img.icons8.com/color/100/security-checked.png",
      },
      {
        text: "Pen Testing",
        level: 70,
        icon: "https://img.icons8.com/color/100/anonymous-mask.png",
      },
      {
        text: "Burp Suite",
        level: 65,
        icon: "https://img.icons8.com/color/100/cyber-security.png",
      },
    ],
    scripting: [
      {
        text: "Python",
        level: 80,
        icon: "https://img.icons8.com/color/100/python.png",
      },
      {
        text: "Bash",
        level: 70,
        icon: "https://img.icons8.com/color/100/bash.png",
      },
    ],
    tools: [
      {
        text: "Kali Linux",
        level: 75,
        icon: "https://img.icons8.com/color/100/kali-linux.png",
      },
      {
        text: "Git/GitHub",
        level: 85,
        icon: "https://img.icons8.com/color/100/git.png",
      },
    ],
  };

  const appSecCerts = [
    {
      text: "UITS Cybersecurity Bootcamp",
      link: certImg,
    },
    {
      text: "CodeCademy certification in Python",
      link: "https://drive.google.com/file/d/1rBWFzLi3Ya_1d0hCVC43yD1U5D-7s9u5/view?usp=drive_link",
    },
    {
      text: "Computer Architecture: Assembly Language",
      link: assemblyCert,
    },
  ];

  return (
    <>
      <Skills data={skillsData} />
      <Education certifications={appSecCerts} />
    </>
  );
}
