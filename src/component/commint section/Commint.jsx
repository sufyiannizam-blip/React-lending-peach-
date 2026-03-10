import "./commint.css";
import quaidaAzam from "../../assets/14895170300_60e70fa986_z.jpg";
import expo from "../../assets/expo-presence-CWve9hzn.jpg";
import stitching from "../../assets/stitching-service-BhrcXQxc.jpg";
const Commint = () => {
  return (
    <>
      <div className="hadding">
        <h2>Trekker's Highlights</h2>
      </div>
      <div className="commint-group">
        <div className="commint">
          <div className="commint-text">
            <div>
            <img src={quaidaAzam} alt="" />
            </div>
            <div>
              <h2>Maria Angelica</h2>
              <p>quaid e azam 2026</p>
            </div>
          </div>
          <h3>*****</h3>
          <p>An Untorgettalle Jpurney Through Turksy</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            temporibus, pariatur explicabo ipsa nesciunt beatae earum odit
            minus, cumque impedit quaerat necessitatibus, placeat nostrum? Rem,
            nulla molestias! Architecto blanditiis dicta unde tenetur, eligendi
            beatae? Voluptatem saepe deleniti animi modi quasi ducimus soluta
            enim accusamus, molestias, sit ea fuga tempore autem!
          </p>
        </div>
        <div className="img-left">
          <img src={expo} alt="" />
        </div>
        <div>
          <img src={stitching} alt="" />
          <p>Aug18.2024 + 4 minmof</p>
          <button className="btn">Read more articles</button>
        </div>
      </div>
    </>
  );
};

export default Commint;
