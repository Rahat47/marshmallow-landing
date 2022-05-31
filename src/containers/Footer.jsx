import footerImg from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-bottom">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img src={footerImg} alt="logo" class="mr-3" />
              <br />
              <p class="mb-0 text-small pt-1">
                © 2021-2022{" "}
                <a
                  href="https://www.bootstrapdash.com"
                  class="text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Plaiez
                </a>
                . All rights reserved.
              </p>
            </div>

            <div>
              <div class="d-flex">
                <a href="#!" class="text-small text-white mx-2 footer-link">
                  Privacy Policy{" "}
                </a>
                <a href="#!" class="text-small text-white mx-2 footer-link">
                  Customer Support{" "}
                </a>
                <a href="#!" class="text-small text-white mx-2 footer-link">
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
