import "./about.css";
import React from "react";
import stich from "../../assets/images (1).jfif";
import image from "../../assets/images (2).jfif";
import Latest from "../../assets/images (3).jfif";
import Stories from "../../assets/download (2).jfif";
const About = () => {
  return (
    <>
      <div className="about-hading">
        <h2>Latest Stories</h2>
        <button className="btn">Expiore all destinations</button>
      </div>
      <div className="about-group">
        <div className="about-left">
          <div className="about-img">
            <img src={stich} alt="" />
          </div>
          <div className="about-text">
            <p>Fend pes Dorw</p>
            <h2>
              Los Angales foed & drini guide: 10 thinge to try in LosAnees
              Calioma
            </h2>
            <p>Lorem ipsum dolor, voluptatem?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              harum cumque eveniet dolore mollitia facere natus repellendus
              saepe voluptatem eum!
            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="Latest-Stories">
            <img src={image} alt="" />
            <div className="stories-text">
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>15 South London Maraner You ti oes: Eest Markats in South</h2>
              <p>2026</p>
            </div>
          </div>
          <div className="Latest-Stories">
            <img src={Latest} alt="" />
            <div className="stories-text">
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>
                Oincredisle hatels arund the world you con bouk with polnte in
                2074
              </h2>
              <p>2026</p>
            </div>
          </div>
          <div className="Latest-Stories">
            <img src={Stories} alt="" />
            <div className="stories-text">
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>
                Viciling Chiesgeon a ludget: Affordabls Eata and Attraction
              </h2>
              <p>2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
