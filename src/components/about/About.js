import a1 from "../../img/a1.jpg";
import a2 from "../../img/a2.jpg";
import a4 from "../../img/a4.jpg";
import a3 from "../../img/a3.jpg";

import "./About.css";

const About = () => {
  return (
    <section
      className="section about"
      id="about"
      style={{ paddingTop: "inherit" }}
    >
      <div className="container">
        <div className="">
          <div className="about-item ">
            <div className="about-content">
              <div className="row grid-gap-about">
                <div className="col-6 col-md-6 align-self-center">
                  <p className="mb-4">
                    Shenstone Drive Ventures (”sdv.”) is a holding company for a
                    family of Impact focused entrepreneurs who are passionate
                    about People and Planet.
                  </p>

                  <p className="mb-4">
                    sdv. invests seed tickets into start-ups addressing
                    challenges primarily in developing countries that use
                    technology to reduce the friction in delivering goods or
                    services that add value to consumers at all socio-economic
                    levels.
                  </p>
                </div>
                <div className="mb-4 col-6 col-md-6">
                  <img src={a1} alt="town" />
                </div>
              </div>
              <div className="row grid-gap-about">
                <div className="mb-4 col-6 col-md-6 hide-mobile">
                  <img src={a2} alt="town" className="image-desktop" />
                </div>
                <div className="col-12 col-md-6 align-self-center">
                  <p className="mb-4">
                    We will invest up to **$50k** and try and syndicate more
                    significant amounts from our network as needed.
                  </p>
                  <img src={a3} alt="town" className="image-mobile mb-4" />
                  <p className="mb-4">
                    We are particularly passionate about supporting innovative
                    digital solutions that help social and economic inclusion
                    and address climate change. We see value in using the
                    Blockchain. We embrace equality, facilitate fair access to
                    labour markets and empower creators to educate and inform.
                  </p>
                  <img src={a2} alt="town" className="image-mobile mb-4" />
                </div>
              </div>
              <div className="row grid-gap-about">
                <div className="col-12 col-md-6 align-self-center">
                  <p className="mb-4">
                    We will consider all proposals within this realm. Still,
                    priority will be given to Women founders, founders of colour
                    or founders from minority/marginalised communities.
                  </p>
                  <img src={a4} alt="town" className="image-mobile mb-4" />
                  <p className="mb-4">
                    We will invest globally, especially in the developing
                    markets of South Asia and Sub-Saharan Africa.
                  </p>
                  <p className="mb-4">Are you looking for funding?</p>
                  <a href="#contact" className="btn btn-main btn-round-full">
                    Get Started
                  </a>
                </div>
                <div className="mb-4 col-6 col-md-6 hide-mobile">
                  <img src={a4} alt="town" className="image-desktop " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
