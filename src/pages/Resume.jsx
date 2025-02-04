const Resume = () => {
  return (
    <div>
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#2c3e50" }}>Brenda Casmir</h1>
        <p style={{ color: "#7f8c8d" }}>Junior Frontend Developer</p>
        <p>
          Email:{" "}
          <a
            href="brendaagabaragu@gmail.com"
            style={{ color: "#2980b9", textDecoration: "none" }}
          >
            brendaagbaragu@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/Brenda Casmir"
            style={{ color: "#2980b9", textDecoration: "none" }}
          >
            linkedin.com/in/Brenda Casmir
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/ Agbaragu Brenda"
            style={{ color: "#2980b9", textDecoration: "none" }}
          >
            github.com/Agbaragu Brenda
          </a>
        </p>
      </header>

      {/* Summary Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#3498db" }}>Summary</h2>
        <p>
          Enthusiastic junior developer with a passion for frontend development
          and UI/UX design. Skilled in JavaScript, React.js, and modern web
          technologies. Eager to learn and contribute to innovative projects.
        </p>
      </section>
    </div>
  );
};

export default Resume;
