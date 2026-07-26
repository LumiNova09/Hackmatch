import { Link } from "react-router-dom";

function Matches() {
  const teams = [
    {
      name: "CodeCrafters",
      match: "96%",
      need: "Backend Developer",
      reason: "Perfect fit for your React and UI skills.",
    },
    {
      name: "ByteForce",
      match: "90%",
      need: "UI/UX Designer",
      reason: "Strong frontend team looking for a designer.",
    },
    {
      name: "DevDynasty",
      match: "84%",
      need: "AI/ML Engineer",
      reason: "Balanced team with space for another member.",
    },
  ];

  const handleAccept = (teamName) => {
    alert(`🎉 Request sent to ${teamName}!`);
  };

  const handleReject = () => {
    alert("Recommendation skipped.");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-5">
          <Link to="/" className="btn btn-outline-light">
            ← Back to Home
          </Link>

          <h1 className="m-0">🤝 Recommended Teams</h1>

          <Link to="/dashboard" className="btn btn-primary">
            Dashboard →
          </Link>
        </div>

        <p className="text-center text-secondary mb-5">
          Based on your profile, these are your best team matches.
        </p>

        {teams.map((team, index) => (
          <div
            key={index}
            className="card bg-dark text-white shadow mb-4"
          >
            <div className="card-body">

              <h3>{team.name}</h3>

              <h5 className="text-success">
                Compatibility: {team.match}
              </h5>

              <p>
                <strong>Looking for:</strong> {team.need}
              </p>

              <p>
                <strong>Why this match?</strong><br />
                {team.reason}
              </p>

              <button
                className="btn btn-success me-2"
                onClick={() => handleAccept(team.name)}
              >
                Accept
              </button>

              <button
                className="btn btn-outline-light"
                onClick={handleReject}
              >
                Reject
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Matches; 