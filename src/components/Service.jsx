const Service = ({ service }) => {
    const { title, description, image } = service;

    return (
        <div className='col-sm-4 text-center text-lg-left'>
            <div
                className='services-box'
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration={1500}
            >
                <img
                    src={image}
                    alt='integrated-marketing'
                    data-aos='zoom-in'
                />
                <h6 className='text-dark mb-3 mt-4 font-weight-medium'>
                    {title}
                </h6>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;
