import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/matches");
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

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button
            className="btn btn-outline-light"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>

          <h1 className="m-0">👤 Create Your Profile</h1>

          <div></div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-dark p-4 rounded shadow"
        >

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">College</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your college"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Preferred Role</label>

            <select className="form-select">
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>UI/UX Designer</option>
              <option>AI / ML</option>
              <option>Presentation</option>
            </select>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Skills
            </label>

            <div className="row">

              <div className="col-md-4 mb-2">
                <input type="checkbox" className="form-check-input me-2" />
                React
              </div>

              <div className="col-md-4 mb-2">
                <input type="checkbox" className="form-check-input me-2" />
                Python
              </div>

              <div className="col-md-4 mb-2">
                <input type="checkbox" className="form-check-input me-2" />
                Java
              </div>

              <div className="col-md-4 mb-2">
                <input type="checkbox" className="form-check-input me-2" />
                C++
              </div>

              <div className="col-md-4 mb-2">
                <input type="checkbox" className="form-check-input me-2" />
                Figma
              </div>

              <div className="col-md-4 mb-2">
                <input type="checkbox" className="form-check-input me-2" />
                Node.js
              </div>

            </div>

          </div>

          <div className="mb-4">

            <label className="form-label">
              Experience
            </label>

            <select className="form-select">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Find My Team 🚀
          </button>

        </form>

      </div>
    </div>
  );
}

export default Profile; 