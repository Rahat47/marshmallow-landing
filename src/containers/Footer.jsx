import footerImg from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={footerImg} alt="logo" className="mr-3" />
              <br />
              <p className="mb-0 text-small pt-1">
                © 2021-2022{" "}
                <a
                  href="https://www.bootstrapdash.com"
                  className="text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Plaiez
                </a>
                . All rights reserved.
              </p>
            </div>

            <div>
              <div className="d-flex">
                <a href="#!" className="text-small text-white mx-2 footer-link">
                  Privacy Policy{" "}
                </a>
                <a href="#!" className="text-small text-white mx-2 footer-link">
                  Customer Support{" "}
                </a>
                <a href="#!" className="text-small text-white mx-2 footer-link">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
