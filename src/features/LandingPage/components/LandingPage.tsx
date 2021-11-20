import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';

const LandingPage = () => (
  <main className="relative h-full">
    <video
      loop
      autoPlay
      muted
      style={{ objectFit: 'cover' }}
      className="absolute w-full max-h-full"
      src="src/videos/sign-language.mp4"
    >
      <track kind="captions" />
    </video>
    <div className="absolute inset-0 bg-opacity-60 bg-black" />
    <Particles
      options={{
        preset: 'links',
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 100,
            enable: true,
            opacity: 0.3,
            width: 0.5
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.8,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 1000
            },
            value: 80
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: 'square'
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }}
    />
    <div className="relative text-center text-white">
      <h1 className="pt-56 text-9xl font-medium tracking-widest">SIGNSPA</h1>
      <p className="text-2xl tracking-normal">
        Primer Traductor de Señas Panameño.
      </p>
    </div>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative border-4 border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-black uppercase block mx-auto mt-10"
      type="button"
    >
      <Link to="/sign-detection">Empezar</Link>
    </motion.button>
  </main>
);

export default LandingPage;
