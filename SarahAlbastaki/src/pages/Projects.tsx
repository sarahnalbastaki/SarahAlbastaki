import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navbar";
import "./Projects.css";
import Cursor from "../components/Cursor";

const Projects: React.FC = () => {
  return (
    <>
      <Cursor />

      <NavBar />
      <div className="main-projects">
        <h1 id="project-title">Past Projects</h1>
        <div className="cards-container">
          <div className="cards-row-1">
            <div
              className="card"
              aria-hidden="true"
              style={{ width: "20rem", height: "27rem" }}
            >
              <img
                src="/images/main-closet.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Lifetime (In progress)</h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
              </div>
            </div>
            <div
              className="card"
              aria-hidden="true"
              style={{ width: "20rem", height: "27rem" }}
            >
              <img
                src="/images/main-closet.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Musician's Metronome</h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
              </div>
            </div>
            <div
              className="card"
              aria-hidden="true"
              style={{ width: "20rem", height: "27rem" }}
            >
              <img
                src="/images/main-closet.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">
                  Refreshable Thermoelectric Braille
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
              </div>
            </div>
          </div>

          <div className="cards-row-2">
            <div className="card" style={{ width: "20rem", height: "27rem" }}>
              <a href="https://www.intentionaltechnology.net/">
                <img
                  src="/images/IT.png"
                  className="card-img-top"
                  alt="..."
                ></img>
              </a>
              <div className="card-body">
                <h5 className="card-title">Intentional Technology Portfolio</h5>
                <p className="card-text">
                  Full-stack web portfolio for the company and designing brand
                  identity.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "20rem", height: "27rem" }}>
              <a href="https://fabacademy.org/2021/labs/uae/students/sarah-albastaki/projects/final-project/">
                <img
                  src="/images/main-closet.png"
                  className="card-img-top"
                  alt="..."
                ></img>
              </a>
              <div className="card-body">
                <h5 className="card-title">The (Almost) Firefly</h5>
                <p className="card-text">
                  Dress that lights up when in motion using motion sensors.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "20rem", height: "27rem" }}>
              <a href="http://fabacademy.org/2021/labs/uae/assignments/week15/">
                <img
                  src="/images/CNC.jpeg"
                  className="card-img-top"
                  alt="..."
                ></img>
              </a>
              <div className="card-body">
                <h5 className="card-title">N7T</h5>
                <p className="card-text">
                  A low-cost CNC machine manufactured from recycled materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-white">
        <p>© Sarah Albastaki | sarahnalbastaki@gmail.com</p>
      </footer>
    </>
  );
};

export default Projects;
