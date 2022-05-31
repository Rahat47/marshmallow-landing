import AOS from 'aos';
import { useEffect } from 'react';
import Home from './containers/Home';
import Services from './containers/Services';

import 'aos/dist/aos.css';
import Projects from './containers/Projects';

function App() {
    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 800,
            easing: 'ease-in-quad',
            delay: 100,
        });
    }, []);

    return (
        <main className='page-body-wrapper'>
            <Home />
            <Services />
            <Projects />
        </main>
    );
}

export default App;
