const Header = () => (
  <header className="top-0 left-0 right-0 absolute z-10 flex justify-between py-3 px-10 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm text-white">
    <div className="flex items-center gap-3">
      <div className="bg-white rounded-full inline-block p-1">
        <img src="src/images/utp-logo.png" width="50px" height="50px" alt="" />
      </div>
      <span className="font-medium text-3xl">UTP</span>
    </div>
    <div className="flex items-center gap-10">
      <button type="button" className="text-xl">
        Inicio
      </button>
      <button
        type="button"
        className="border-2 p-3 inline-block transition-colors hover:bg-white hover:text-black hover:border-black"
      >
        Más información
      </button>
    </div>
  </header>
);

export default Header;
