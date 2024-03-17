const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-auto overflow-x-hidden scroll-smooth">
      <section className="h-screen w-screen text-center relative overflow-hidden">
        <div className="z-30 relative h-full flex flex-col bg-black/70 w-screen">
          <header className="w-[80%] m-auto md:p-10 flex flex-col pt-3">
            <img src="/karateDoMiyazato2.png" alt="Escuela miyazato" />

            <h3 className="text-sm md:text-3xl pb-2 font-poppins text-white lg:px-10">
              Miyazato Dojo es sinónimo de tradición marcial.
            </h3>
            <h4 className="text-sm md:text-xl font-poppins text-white lg:px-10">
              Heredera de siglos de evolución en el arte del Karate-Do ofrece,
              desde hace 65 años en Argentina, un método seguro y eficaz para
              iniciarse y avanzar en el estudio y práctica de este arte marcial.
            </h4>
          </header>
          <footer className="flex justify-center pb-20">
            <button className="font-poppins px-4 py-2 bg-[#C0150F] text-white rounded-md hover:bg-[#E31A13] hover:scale-110 ease transition-all">
              Comenzá AHORA
            </button>
          </footer>
        </div>
        <div className="absolute top-0 bottom-0 h-full w-full z-10">
          <video
            src="/homevideo.webm"
            className="object-center object-cover h-full w-full"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Home;
