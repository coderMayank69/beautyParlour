

import { Suspense, lazy } from 'react';
import Loader from '../component/Loader.jsx';

const Hero = lazy(() => import('../component/Hero.jsx'));
const About = lazy(() => import('../component/About.jsx'));
const Services = lazy(() => import('../component/Services.jsx'));
const Testimonial = lazy(() => import('../component/Testimonial.jsx'));
const Maps = lazy(() => import('../component/Maps.jsx'));

const Home = () => {
  return (
    <main className="min-h-screen w-full">
      <Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Maps />
      </Suspense>
    </main>
  );
};

export default Home;
