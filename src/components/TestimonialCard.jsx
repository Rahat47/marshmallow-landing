const TestimonialCard = ({ data }) => {
  const { img, desc, author, destination } = data;
  return (
    <li>
      <div className="testimonial-item">
        <img src={img} alt="icon" className="testimonial-icons" />
        <p>{desc}</p>
        <h6 className="testimonial-author">{author}</h6>
        <p className="testimonial-destination">{destination}</p>
      </div>
    </li>
  );
};

export default TestimonialCard;
