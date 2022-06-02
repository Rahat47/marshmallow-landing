import coinbase from "../assets/images/coinbase.svg";
import deloit from "../assets/images/deloit.svg";
import erricson from "../assets/images/erricson.svg";
import instagram from "../assets/images/instagram.svg";
import netflix from "../assets/images/netflix.svg";
const Clients = () => {
  const clientList = [deloit, erricson, netflix, instagram, coinbase];
  return (
    <section
      className="clients pt-5 mt-5"
      data-aos="fade-up"
      data-aos-offset="-400"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-sm-flex justify-content-between align-items-center">
              {clientList.map((data, index) => (
                <img
                  key={index}
                  src={data}
                  alt="client"
                  className="p-2 p-lg-0"
                  data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                  data-aos-offset="-400"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
