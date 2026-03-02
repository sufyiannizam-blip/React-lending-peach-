import "./hero.css";
import cuttingServiceImg from "../../assets/cutting-service-BKBwvqJe.jpg";
import expoPresence from "../../assets/expo-presence-CWve9hzn.jpg";
import heroFactory from "../../assets/hero-factory-CFqRA7F2.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h2>
            Discover the    World's  <span>Hidden</span>
             Wonders
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
            voluptatum harum deserunt architecto recusandae qui reiciendis
            corrupti! Quam officia, quaerat voluptatibus debitis veritatis qui
            cum commodi sapiente nostrum adipisci!
          </p>
          <button className="btn">Contat Us</button>
        </div>
        <div className="images">
          <div>
            <img className="cuttingServiceImg" src={cuttingServiceImg} alt="" />
          </div>
          <div className="column">
            <img className="expoPresence" src={expoPresence} alt="" />
            <img className="heroFactory" src={heroFactory} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
