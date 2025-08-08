import React, { useEffect, useState, useRef } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const bgImages = [
  "https://images.pexels.com/photos/3105242/pexels-photo-3105242.jpeg",
  "https://images.pexels.com/photos/3855965/pexels-photo-3855965.jpeg",
  "https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg",
];

const clientLogos = [
  {
    name: "ONGC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
  },
  {
    name: "OIL INDIA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Oil_India_logo.svg/800px-Oil_India_logo.svg.png",
  },
  {
    name: "ESSAR",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Essar_logo.svg/1920px-Essar_logo.svg.png",
  },
  {
    name: "RELIANCE",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Reliance_Industries.svg/640px-Reliance_Industries.svg.png",
  },
  {
    name: "CAIRN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cairn_India_SVG_Logo.svg/1200px-Cairn_India_SVG_Logo.svg.png",
  },
  {
    name: "HERMES",
    logo: "https://images.jdmagicbox.com/v2/comp/gandhinagar-gujarat/r2/9999pxx79.xx79.140406232221.r4r2/catalogue/hermes-technologies-pvt-ltd-gandhinagar-sector-25-gandhinagar-gujarat-ac-drive-dealers-r2xfxzj9sm-250.jpg",
  },
  {
    name: "PRESSCOT",
    logo: "https://images.seeklogo.com/logo-png/53/1/prescott-logo-png_seeklogo-537260.png",
  },
  {
    name: "OILMAX",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWdoTy4FtlDQmKYP6H0hETF8vvQyrzhrG4g&s",
  },
  {
    name: "SELAN",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHqWz0yORkV0w/company-logo_200_200/company-logo_200_200/0/1660302067379/selan_exploration_technology_limited_logo?e=2147483647&v=beta&t=Ttv7dtTptIRr4xxillTbno2H6Y9oRhV7bcERRhs3Gts",
  },
  {
    name: "GSPCL",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvePyXSGX4rxO58HsJ4kchtbP7I7epOWFKQ&s",
  },
  {
    name: "KIRI GROUP",
    logo: "https://static.wixstatic.com/media/734666_0d17ae5b30104635aa63d10fe7b0b316~mv2.png/v1/fill/w_416,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/734666_0d17ae5b30104635aa63d10fe7b0b316~mv2.png",
  },
  {
    name: "RBM INFRCOM",
    logo: "https://www.rbminfracon.com/assets/Rmb_logo_big-BCh95d7J.png",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = bgImages[0];
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 288, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -288, behavior: "smooth" });
    }
  };

  if (!isLoaded) return <div className="h-screen w-full bg-black" />;

  return (
    <>
      <Element name="home">
        <div
          className="h-screen w-full bg-cover bg-center relative transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000b3] to-[#1f1f1f5e] z-10" />
          <div className="relative z-20 h-full flex items-center justify-center px-4">
            <div className="text-center text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                Empowering Energy Exploration
              </h1>
              <p className="text-lg md:text-xl font-light drop-shadow mb-8">
                WOFS is ISO certified and committed to delivering
                high-performance solutions for the oil & gas industry.
              </p>
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 font-semibold rounded-full shadow hover:from-yellow-300 hover:to-orange-400 transition"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </Element>
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our long-term partnerships speak for our commitment to quality and
          safety across the oil & gas industry.
        </p>
      </section>

      <section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 py-12 px-4 relative">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Our Esteemed Clients
        </h3>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-10 px-6 scroll-smooth scrollbar-hide"
          >
            {clientLogos.map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="h-20 object-contain flex-shrink-0 hover:scale-110 transition duration-300"
              />
            ))}
          </div>

          {/* Left and Right Buttons - Positioned BELOW logos, centered horizontally */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="bg-white text-xl w-11 h-11 rounded-full shadow-md hover:bg-gray-200 transition-all flex items-center justify-center"
              aria-label="Previous"
            >
              &#8592;
            </button>

            <button
              onClick={handleNext}
              className="bg-white text-xl w-11 h-11 rounded-full shadow-md hover:bg-gray-200 transition-all flex items-center justify-center"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
