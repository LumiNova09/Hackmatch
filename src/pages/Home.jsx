import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#111827,#1e3a8a)",
        color: "white",
      }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-dark px-5 py-3">
        <h2 className="fw-bold">🚀 HackMatch</h2>

        <Link to="/dashboard" className="btn btn-outline-light">
          Dashboard
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="container text-center mt-5">

        <h1 className="display-2 fw-bold">
          Find Your Dream Team
        </h1>

        <p className="lead mt-4">
          Smart Team Matching Platform for Hackathons and Student Clubs.
        </p>

        <div className="mt-5">

          <Link
            to="/profile"
            className="btn btn-primary btn-lg me-3"
          >
            Create Profile
          </Link>

          <Link
            to="/matches"
            className="btn btn-outline-light btn-lg"
          >
            View Matches
          </Link>

        </div>

      </div>

      {/* Features */}

      <div className="container mt-5">

        <div className="row text-center">

          <div className="col-md-4 mb-4">

            <div className="card bg-dark text-white p-4 h-100">

              <h3>🤝 Smart Matching</h3>

              <p>
                Teams are recommended based on skills,
                preferred roles and requirements.
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card bg-dark text-white p-4 h-100">

              <h3>⚡ Fast Team Formation</h3>

              <p>
                Reduce the time spent searching for
                teammates before the event.
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card bg-dark text-white p-4 h-100">

              <h3>📊 Organizer Dashboard</h3>

              <p>
                Monitor registrations, teams and
                participant statistics easily.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="container mt-5 pb-5">

        <div className="row text-center">

          <div className="col">
            <h1 className="fw-bold">500+</h1>
            <p>Participants</p>
          </div>

          <div className="col">
            <h1 className="fw-bold">120</h1>
            <p>Teams Formed</p>
          </div>

          <div className="col">
            <h1 className="fw-bold">96%</h1>
            <p>Successful Matches</p>
          </div>

        </div>

      </div>
      
      <footer className="text-center py-4 mt-5 text-secondary">
        <hr className="text-light" />
        <p>
          HackMatch © 2026 | Smart Team Matching Platform
        </p>
      </footer>
    </div>
  );
}

export default Home; 
