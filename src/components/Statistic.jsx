const Statistic = ({ image, title, value, prefix, className, aosClass }) => {
  return (
    <div className="col-sm-3">
      <div
        className="d-flex py-3 my-3 my-lg-0 justify-content-center"
        data-aos={aosClass}
      >
        <img src={image} alt={title} className="mr-3" />
        <div>
          <h4 className="font-weight-bold text-dark mb-0">
            <span className={className}>0</span>
            {prefix}
          </h4>
          <h5 className="text-dark mb-0">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
