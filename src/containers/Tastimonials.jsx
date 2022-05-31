import firstImg from "../assets/images/testimonial/testimonial1.jpg";
import secondImg from "../assets/images/testimonial/testimonial2.jpg";
import thirdImg from "../assets/images/testimonial/testimonial3.jpg";
import fouthImg from "../assets/images/testimonial/testimonial4.jpg";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialIcon from "../components/TestimonialIcon";
const Tastimonials = () => {
  // edit these data to change contents of our testimonial section
  const testimonialData = [
    {
      id: 0,
      img: firstImg,
      desc: "Lorem ipsum dolor sit amet, consectetur pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium",
      author: "Mark Spenser",
      destination: "Accounts",
    },
    {
      id: 1,
      img: secondImg,
      desc: "Lorem ipsum dolor sit amet, consectetur pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium",
      author: "Tua Manuera",
      destination: "Director,Dj market",
    },
    {
      id: 2,
      img: thirdImg,
      desc: "Lorem ipsum dolor sit amet, consectetur pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium",
      author: "Sarah Philip",
      destination: "Chief Accountant",
    },
    {
      id: 3,
      img: fouthImg,
      desc: "Lorem ipsum dolor sit amet, consectetur pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium",
      author: "Mark Spenser",
      destination: "Director,Dj market",
    },
  ];
  return (
    <section class="testimonial" id="testimonial">
      <div class="container">
        <div class="row  mt-md-0 mt-lg-4">
          <div class="col-sm-6 text-white" data-aos="fade-up">
            <p class="font-weight-bold mb-3">Testimonials</p>
            <h3 class="font-weight-medium">
              Our customers are our <br />
              biggest fans
            </h3>
            <ul class="flipster-custom-nav">
              {testimonialData.map((data, index) => (
                <TestimonialIcon key={index} data={data} />
              ))}
            </ul>
          </div>
          <div class="col-sm-6" data-aos="fade-up">
            <div id="testimonial-flipster">
              <ul>
                {testimonialData.map((data, index) => (
                  <TestimonialCard key={index} data={data} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tastimonials;
