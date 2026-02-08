
import { Suspense, lazy } from 'react';

const Hero = lazy(() => import('../component/Hero.jsx'));
const About = lazy(() => import('../component/About.jsx'));
const Services = lazy(() => import('../component/Services.jsx'));
const Testimonial = lazy(() => import('../component/Testimonial.jsx'));
const Maps = lazy(() => import('../component/Maps.jsx'));
import Loader from '../component/Loader.jsx';


const Home = () => {
  return (
    <Suspense fallback= {<Loader />}>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Maps />
    </Suspense>
  );
}

export default Home
