import groupImg from '../assets/images/group.png';

const Home = () => {
    return (
        <section id='home' className='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='main-banner'>
                            <div className='d-sm-flex justify-content-between'>
                                <div data-aos='zoom-in-up'>
                                    <div className='banner-title'>
                                        <h3 className='font-weight-medium'>
                                            Team building experiences with just
                                            a few clicks!
                                        </h3>
                                    </div>
                                    <p className='mt-3'>
                                        Just select the game you want to play
                                        and sit back while we do the rest!
                                        <br />
                                    </p>
                                    <a
                                        href='#'
                                        className='btn btn-secondary mt-3'
                                    >
                                        Demo
                                    </a>
                                </div>
                                <div className='mt-5 mt-lg-0'>
                                    <img
                                        src={groupImg}
                                        alt='marsmello'
                                        className='img-fluid'
                                        data-aos='zoom-in-up'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
