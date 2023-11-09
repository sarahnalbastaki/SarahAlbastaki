import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navbar";
import "./Foryou.css";
import Cursor from "../components/Cursor";

const Projects: React.FC = () => {
  return (
    <>
      <Cursor />
      <NavBar />

      <div className="foryou-content">
        <h1 id="foryou-title">For you, by yours truly.</h1>
        <br></br>
        <br></br>
        <div className="webdev">
          <h2 id="webdev-title">Web Development</h2>
          <div className="webdev-cards">
            <div className="card foryou-card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>

            <div className="card foryou-card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
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
