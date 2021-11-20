import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [infoOpened, setInfoOpened] = useState(false);

  return (
    <header className="top-0 left-0 right-0 absolute z-10 flex justify-between py-3 px-10 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm text-white">
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full inline-block p-1">
          <img
            src="src/images/utp-logo.png"
            width="50px"
            height="50px"
            alt=""
          />
        </div>
        <span className="font-medium text-3xl">UTP</span>
      </div>
      <div className="relative flex items-center gap-10">
        <button
          type="button"
          onClick={() => {
            setInfoOpened(!infoOpened);
          }}
          className="border-2 p-3 inline-block transition-colors hover:bg-white hover:text-black hover:border-black"
        >
          Nuestra Misión
        </button>
        <motion.p
          initial={{ opacity: 0 }}
          animate={infoOpened ? { opacity: 1, top: '5rem' } : undefined}
          transition={{ duration: 1, ease: 'anticipate' }}
          className="pointer-events-none absolute w-96 bg-white bg-opacity-30 p-5 rounded-xl shadow-xl right-0 text-justify"
        >
          El equipo Must Match tiene la misión de promover la enseñanza del
          lenguaje de señas en nuestro territorio panameño y fomentar la
          inclusión social de aquellas personas con necesidades especiales.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
