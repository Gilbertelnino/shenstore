import logo from "../../img/logo.png";

import "./Navbar.css";

const Mainnav = () => {
  return (
    <>
      <div className="navigation">
        <div id="top-nav" className="bg-light">
          <div className="container">
            <nav className="navbar navbar-light px-0 py-4">
              <a href="/" className="navbar-brand">
                <div className="ellipse-55"></div>
                <img className="logo" src={logo} alt="logo" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainnav;
