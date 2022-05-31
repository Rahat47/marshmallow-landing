const TestimonialIcon = ({ data }) => {
  const { id } = data;
  return (
    <li class="flipster-custom-nav-item">
      <a href="javascript:;" class="flipster-custom-nav-link" title={id}></a>
    </li>
  );
};

export default TestimonialIcon;
