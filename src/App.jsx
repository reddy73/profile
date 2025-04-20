function App() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Raghavendra Reddy</h1>
        <p className="lead text-muted">Backend Engineer | Java • Spring Boot • Kafka </p>
      </div>

      <div className="mb-4 p-4 bg-light rounded">
        <h2 className="h4">About Me</h2>
        <p>
          I'm a backend engineer with 13+ years of experience in building scalable enterprise SaaS systems. I love working with microservices, observability, and secure payment systems.
        </p>
      </div>

      <div className="mb-4 p-4 bg-white border rounded">
        <h2 className="h4">Skills</h2>
        <ul className="list-inline mt-2">
          {["Java", "Spring Boot", "Hibernate", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS"].map(skill => (
            <li key={skill} className="list-inline-item badge bg-primary m-1 p-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 p-4 bg-light rounded">
        <h2 className="h4">Projects</h2>
        <ul className="list-unstyled">
          <li>✅ Realtime payment observability system</li>
          <li>✅ High throughput event-driven retail data pipeline</li>
        </ul>
      </div>

      <div className="mb-4 p-4 bg-white border rounded">
        <h2 className="h4">Contact</h2>
        <p>
          📧 <a href="mailto:raghav88.job.search@gmail.com">raghav88.job.search@gmail.com</a> <br />
          💼 <a href="https://www.linkedin.com/in/raghavendra-reddy-0478931a/" target="_blank">LinkedIn</a> <br />
          💻 <a href="https://github.com/reddy73" target="_blank">GitHub</a>
        </p>
      </div>

      <div className="text-center mt-5">
        <a href="./resume.pdf" className="btn btn-outline-secondary" target="_blank">View Resume</a>
      </div>
    </div>
  );
}

export default App;
