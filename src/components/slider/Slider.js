import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Slider.css";

const Slider = () => {
  return (
    <section className="slider">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-5">
            <div className="block">
              <span className="d-block mb-3 text-white text-capitalize">
                Prepare for new future
              </span>
              <h1 className="animated fadeInUp mb-5">
                We will invest globally <br /> especially in the developing
                markets of <br />
                South Asia and Sub-Saharan Africa.
              </h1>
              <a
                href="#contact"
                className="btn btn-main animated fadeInUp btn-round-full"
                aria-label="Get started"
              >
                Get started{" "}
                <FontAwesomeIcon icon="angle-right" className="btn-icon ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
