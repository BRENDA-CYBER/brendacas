import React from "react";

const ExperiencePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f4f4f9",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#2c3e50" }}>Work Experience</h1>
        <p style={{ color: "#7f8c8d" }}>
          A journey of learning, building, and growing as a developer.
        </p>
      </header>

      {/* Experience Section 1 */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#3498db" }}>Frontend Developer Intern</h2>
        <p>
          <strong>Company:</strong> ABC Tech Solutions
        </p>
        <p>
          <strong>Duration:</strong> June 2024 - Present
        </p>
        <ul>
          <li>
            Built and maintained responsive web pages using React.js and CSS.
          </li>
          <li>
            Collaborated with the design team to implement UI/UX improvements,
            improving the overall user experience.
          </li>
          <li>
            Developed features like form validation and state management using
            React Hooks and Context API.
          </li>
          <li>
            Contributed to code reviews and improved application performance by
            optimizing React components.
          </li>
        </ul>
      </section>

      {/* Experience Section 2 */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#3498db" }}>Junior Frontend Developer</h2>
        <p>
          <strong>Company:</strong> XYZ Web Agency
        </p>
        <p>
          <strong>Duration:</strong> January 2024 - May 2024
        </p>
        <ul>
          <li>
            Worked on various client projects involving HTML, CSS, JavaScript,
            and React.js.
          </li>
          <li>
            Designed and developed dynamic websites, ensuring they were
            mobile-responsive.
          </li>
          <li>
            Collaborated with senior developers to integrate APIs and enhance
            application functionality.
          </li>
          <li>Fixed bugs and provided support for ongoing client projects.</li>
        </ul>
      </section>

      {/* Experience Section 3 */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#3498db" }}>Junior Web Developer (Freelance)</h2>
        <p>
          <strong>Company:</strong> Self-employed
        </p>
        <p>
          <strong>Duration:</strong> September 2023 - December 2023
        </p>
        <ul>
          <li>
            Developed personal websites and landing pages for clients using
            HTML, CSS, and JavaScript.
          </li>
          <li>
            Implemented SEO best practices and optimized websites for
            performance and accessibility.
          </li>
          <li>
            Worked closely with clients to ensure design and functionality met
            their specifications.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ExperiencePage;
