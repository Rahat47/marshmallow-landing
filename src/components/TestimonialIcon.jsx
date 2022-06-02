/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
const TestimonialIcon = ({ data }) => {
  const { id } = data;
  return (
    <li className="flipster-custom-nav-item">
      <a href="javascript:;" class="flipster-custom-nav-link" title={id}>
        &nbsp;
      </a>
    </li>
  );
};

export default TestimonialIcon;
