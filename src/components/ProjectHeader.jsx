const ProjectHeader = ({ buttonText, title }) => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-sm-12">
          <div className="d-sm-flex justify-content-between align-items-center mb-2">
            <h3 className="font-weight-medium text-dark ">{title}</h3>
            <div>
              <a href="#!" className="btn btn-outline-primary">
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
