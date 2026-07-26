import { Link } from "react-router-dom";

function Dashboard() {
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

        <h1 className="text-center mb-5">
          📊 Organizer Dashboard
        </h1>

        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="card bg-dark text-white text-center p-4">
              <h2>500+</h2>
              <p>Total Participants</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card bg-dark text-white text-center p-4">
              <h2>120</h2>
              <p>Teams Formed</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card bg-dark text-white text-center p-4">
              <h2>65</h2>
              <p>Solo Participants</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card bg-dark text-white text-center p-4">
              <h2>96%</h2>
              <p>Matching Success</p>
            </div>
          </div>

        </div>

        <div className="card bg-dark text-white p-4 mt-4">

          <h3>📢 Recent Activity</h3>

          <ul>
            <li>Team CodeCrafters added a Backend Developer.</li>
            <li>ByteForce reached maximum team size.</li>
            <li>12 new participants registered today.</li>
            <li>24 successful matches generated.</li>
          </ul>

        </div>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Dashboard; 