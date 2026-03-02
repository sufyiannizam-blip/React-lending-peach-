import "./cards.css";
import quality from "../../assets/quality-control-BN77KaPq.jpg";
import stitching from "../../assets/stitching-service-BhrcXQxc.jpg";
import expoPresence from "../../assets/expo-presence-CWve9hzn.jpg";
import heroFactory from "../../assets/hero-factory-CFqRA7F2.jpg";

const cards = () => {
  return (
    <>
      <div className="card-section">
        <div className="card-text">
          <h2>Top Destinations</h2>
          <div>
            <ul>
              <li>Popular</li>
              <li>USA</li>
              <li>Europe</li>
              <li>Asia</li>
              <li>Africa & Middle East</li>
              <li>Americas & The Pacific</li>
              <li>Caribbean</li>
              <li>More</li>
            </ul>
            <button className="button">Explore all destinations</button>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img src={quality} alt="" />
            <p>Golden Bridge, Ba Na Hills Vietnam</p>
          </div>
          <div className="card">
            <img src={stitching} alt="" />
            <p>Dubrovnik Croatia</p>
          </div>
          <div className="card">
            <img src={heroFactory} alt="" />
            <p>Hot Air Balloon Cappadocia Turkey</p>
          </div>
          <div className="card">
            <img src={expoPresence} alt="" />
            <p>Sydney Harbour Bridge Australia</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default cards;
