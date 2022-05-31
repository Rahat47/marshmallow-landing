import marketingimg from '../assets/images/integrated-marketing.svg';
import designImg from '../assets/images/design-development.svg';
import digitalStrategyImg from '../assets/images/digital-strategy.svg';
import dmImage from '../assets/images/digital-marketing.svg';
import gsImg from '../assets/images/growth-strategy.svg';
import ssImg from '../assets/images/saving-strategy.svg';
import Service from '../components/Service';

// edit these data to change contents of our services section
const serviceData = [
    {
        id: 1,
        title: 'Free Team Building Games',
        description: `Lorem ipsum dolor sit amet, pretium pretium
        tempor.Lorem ipsum`,
        image: marketingimg,
    },
    {
        id: 2,
        title: 'AI Game Builider',
        description: `Lorem ipsum dolor sit amet, pretium pretium
        tempor.Lorem ipsum`,
        image: designImg,
    },
    {
        id: 3,
        title: 'AI Host',
        description: `Lorem ipsum dolor sit amet, pretium pretium
        tempor.Lorem ipsum`,
        image: digitalStrategyImg,
    },
    {
        id: 4,
        title: 'Add Fun to your day',
        description: `Lorem ipsum dolor sit amet, pretium pretium
        tempor.Lorem ipsum`,
        image: dmImage,
    },
    {
        id: 5,
        title: 'Increase team commitment',
        description: `Lorem ipsum dolor sit amet, pretium pretium
        tempor.Lorem ipsum`,
        image: gsImg,
    },
    {
        id: 6,
        title: 'Get to know your collegues',
        description: `Lorem ipsum dolor sit amet, pretium pretium
        tempor.Lorem ipsum`,
        image: ssImg,
    },
];

const Services = () => {
    return (
        <section className='our-services overflow-hidden' id='services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h5 className='text-dark'>We’re offering</h5>
                        <h3 className='font-weight-medium text-dark mb-5'>
                            Creative Digital Agency
                        </h3>
                    </div>
                </div>
                <div className='row' data-aos='fade-up'>
                    {serviceData.slice(0, 3).map(service => (
                        <Service service={service} key={service.id} />
                    ))}
                </div>
                <div className='row' data-aos='fade-up'>
                    {serviceData.slice(3, 6).map(service => (
                        <Service service={service} key={service.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
