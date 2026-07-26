import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:"#F7F5F2",
        color:"#1A1A1A",
      }} 
    >
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="fw-bold"> HackMatch</h2>

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
             className="btn btn-dark btn-lg me-3"
          >
            Create Profile
          </Link>

          <Link
            to="/matches"
            className="btn btn-outline-dark btn-lg"
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

              <h3> Smart Matching</h3>

              <p>
                Teams are recommended based on skills,
                preferred roles and requirements.
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card bg-white p-4 h-100">

              <h3> Fast Team Formation</h3>

              <p>
                Reduce the time spent searching for
                teammates before the event.
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card bg-dark text-white p-4 h-100">

              <h3> Organizer Dashboard</h3>

              <p>
                Monitor registrations, teams and
                participant statistics easily.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

            {/* Statistics */}

      <div className="container mt-5 pb-5">

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                color: "#1A1A1A",
              }}
            >
              500+
            </h1>

            <p
              className="text-secondary"
              style={{
                letterSpacing: "1px",
                fontSize: "15px",
              }}
            >
              Participants
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                color: "#1A1A1A",
              }}
            >
              120
            </h1>

            <p
              className="text-secondary"
              style={{
                letterSpacing: "1px",
                fontSize: "15px",
              }}
            >
              Teams Formed
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                color: "#1A1A1A",
              }}
            >
              96%
            </h1>

            <p
              className="text-secondary"
              style={{
                letterSpacing: "1px",
                fontSize: "15px",
              }}
            >
              Successful Matches
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;  
