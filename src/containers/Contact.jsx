import contactImg from "../assets/images/contact.jpg";
const Contact = () => {
  return (
    <section className="contactus" id="contact">
      <div className="container">
        <div className="row mb-5 pb-5">
          <div className="col-sm-5" data-aos="fade-up" data-aos-offset="-500">
            <img src={contactImg} alt="contact" className="img-fluid" />
          </div>
          <div className="col-sm-7" data-aos="fade-up" data-aos-offset="-500">
            <h3 className="font-weight-medium text-dark mt-5 mt-lg-0">
              Got A Problem
            </h3>
            <h5 className="text-dark mb-5">
              Lorem ipsum dolor sit amet, consectetur pretium
            </h5>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name*"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="mail"
                      placeholder="Email*"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Message*"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-12">
                  <a href="#!" className="btn btn-secondary">
                    SEND
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
