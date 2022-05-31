const TestimonialCard = ({ data }) => {
  const { img, desc, author, destination } = data;
  return (
    <li>
      <div class="testimonial-item">
        <img src={img} alt="icon" class="testimonial-icons" />
        <p>{desc}</p>
        <h6 class="testimonial-author">{author}</h6>
        <p class="testimonial-destination">{destination}</p>
      </div>
    </li>
  );
};

export default TestimonialCard;
