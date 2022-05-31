import coinbase from "../assets/images/coinbase.svg";
import deloit from "../assets/images/deloit.svg";
import erricson from "../assets/images/erricson.svg";
import instagram from "../assets/images/instagram.svg";
import netflix from "../assets/images/netflix.svg";
const Clients = () => {
  const clientList = [deloit, erricson, netflix, instagram, coinbase];
  return (
    <section
      class="clients pt-5 mt-5"
      data-aos="fade-up"
      data-aos-offset="-400"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="d-sm-flex justify-content-between align-items-center">
              {clientList.map((data, index) => (
                <img
                  key={index}
                  src={data}
                  alt="coinbase"
                  class="p-2 p-lg-0"
                  data-aos="fade-down"
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
