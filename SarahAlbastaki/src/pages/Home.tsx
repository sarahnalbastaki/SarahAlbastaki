import NavBar from "../components/Navbar";
import "./home.css";
import Cursor from "../components/Cursor";

const Home: React.FC = () => {
  return (
    <>
      <Cursor />
      <NavBar />
      <div className="main-home">
        <h1>Sarah Albastaki</h1>
        <h5>Student. Wearable-Technology Enthusiast. Designer.</h5>
        <img
          src="/images/main-closet.png"
          alt="Picture of a lit closet with clothes in a dark room."
        ></img>
        <h5 id="mission-text">
          To mimic the feelings we find so trustworthy in the people we love, to
          our devices.
        </h5>
      </div>
      <footer className="footer">
        <p>© Sarah Albastaki | sarahnalbastaki@gmail.com</p>
      </footer>
    </>
  );
};

export default Home;
