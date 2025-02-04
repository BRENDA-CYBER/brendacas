const Contactus = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="w-full max-w-4xl bg-white shadow-lg p-6 rounded-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600">We'd love to hear from you!</p>
      </header>

      <section className="mt-6 w-full max-w-4xl bg-white shadow-lg p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-2">
          Feel free to reach out to us via email or phone.
        </p>
        <p className="text-gray-600 mt-2">
          Email:{" "}
          <a href="brendaagbaragu@gmail.com" className="text-blue-500">
            brendaagabaragu@gmail.com
          </a>
        </p>
        <p className="text-gray-600">
          Phone:{" "}
          <a href="tel:+8092264333" className="text-blue-500">
            +8092264333
          </a>
        </p>
      </section>

      <section className="mt-6 w-full max-w-4xl bg-white shadow-lg p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
        <p className="text-gray-600 mt-2">
          Stay connected through our social media channels:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>
            <a href="#" className="text-blue-500">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500">
              GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#2c3e50",
          color: "#fff",
        }}
      >
        <p>
          Contact me:{" "}
          <a
            href="mailto:junior.dev@example.com"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            brendaagabaragu@gmail.com
          </a>
        </p>
      </footer> */}
    </div>
  );
};

export default Contactus;
