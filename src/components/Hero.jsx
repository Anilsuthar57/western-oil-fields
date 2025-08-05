import React, { useEffect, useState, useRef } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // Unused
// import { GiDuration } from "react-icons/gi"; // Unused

const bgImages = [
  "https://images.pexels.com/photos/3105242/pexels-photo-3105242.jpeg",
  "https://images.pexels.com/photos/3855965/pexels-photo-3855965.jpeg",
  "https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg",
];

const clientLogos = [
  { name: "ONGC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png" },
  { name: "OIL INDIA", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Oil_India_logo.svg/800px-Oil_India_logo.svg.png" },
  { name: "ESSAR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Essar_logo.svg/1920px-Essar_logo.svg.png" },
  { name: "RELIANCE", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Reliance_Industries.svg/640px-Reliance_Industries.svg.png" },
  { name: "CAIRN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cairn_India_SVG_Logo.svg/1200px-Cairn_India_SVG_Logo.svg.png" },
  { name: "HERMES", logo: "https://images.jdmagicbox.com/v2/comp/gandhinagar-gujarat/r2/9999pxx79.xx79.140406232221.r4r2/catalogue/hermes-technologies-pvt-ltd-gandhinagar-sector-25-gandhinagar-gujarat-ac-drive-dealers-r2xfxzj9sm-250.jpg" },
  { name: "PRESSCOT", logo: "https://images.seeklogo.com/logo-png/53/1/prescott-logo-png_seeklogo-537260.png" },
  { name: "OILMAX", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWdoTy4FtlDQmKYP6H0hETF8vvQyrzhrG4g&s" },
  { name: "SELAN", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHqWz0yORkV0w/company-logo_200_200/company-logo_200_200/0/1660302067379/selan_exploration_technology_limited_logo?e=2147483647&v=beta&t=Ttv7dtTptIRr4xxillTbno2H6Y9oRhV7bcERRhs3Gts" },
  { name: "GSPCL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvePyXSGX4rxO58HsJ4kchtbP7I7epOWFKQ&s" },
  { name: "KIRI GROUP", logo: "https://static.wixstatic.com/media/734666_0d17ae5b30104635aa63d10fe7b0b316~mv2.png/v1/fill/w_416,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/734666_0d17ae5b30104635aa63d10fe7b0b316~mv2.png" },
  { name: "RBM INFRCOM", logo: "https://www.rbminfracon.com/assets/Rmb_logo_big-BCh95d7J.png" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = bgImages[0];
    firstImg.onload = () => setIsLoaded(true);
    firstImg.onerror = () => setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  if (!isLoaded) {
    return <div className="h-screen w-full bg-black" />;
  }

  return (
    <>
      <Element name="home">
        <div
          className="h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out relative"
          style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          <div className="relative z-20 h-full w-full flex items-center justify-center px-4">
            <div className="text-center text-white max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl">
                Leading Oil & Gas Exploration Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light drop-shadow">
                Western Oil Field Services (WOFS) is an ISO 9001 14001 and OHSMS
                45001 certified company with head office in Ahmedabad, Gujarat,
                providing Oil and Gas Field Services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={"/services"}
                  className="cursor-pointer px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* Heading and Paragraph Section */}
      <section className="bg-white py-22 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We have proudly partnered with some of the most respected names in the oil & gas sector.
          Our commitment to safety, quality, and performance sets us apart in every operation.
        </p>
      </section>

      {/* Client Logos Section */}
      <section className="bg-gray-100 py-12 px-4 relative">
        <h3 className="text-2xl sm:text-3xl text-center font-bold text-blue-700 mb-8 py-10">
          Our ESTEEMED Clients
        </h3>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-8 px-10 scroll-smooth"
        >
          {clientLogos.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              title={client.name}
              className="h-20 object-contain flex-shrink-0 transition-transform hover:scale-110 duration-300 hover:grayscale-0"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
