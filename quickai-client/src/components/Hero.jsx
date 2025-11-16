import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  // Sample company logos - you can replace these with actual company logos
  const companyLogos = [
    {
      name: "Google",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Apple",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Meta",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      name: "Amazon",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Netflix",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Spotify",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    },
    {
      name: "Adobe",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-[120vh] py-8 sm:py-16 mt-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] mb-6">
          Create amazing content <br /> with{" "}
          <span className="text-primary">AI tools</span>
        </h1>
        <p className="mt-6 max-w-md sm:max-w-2xl 2xl:max-w-3xl m-auto text-base sm:text-lg text-gray-600 leading-relaxed">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow with
          cutting-edge artificial intelligence.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-base max-sm:text-sm mb-8 sm:mb-12">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-12 py-4 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
        >
          Start creating now
        </button>
        <button className="bg-white px-12 py-4 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl">
          Watch demo
        </button>
      </div>

      <div className="flex items-center gap-4 mb-12 sm:mb-20 mx-auto text-gray-600">
        <img src={assets.user_group} alt="" className="h-10" />
        <span className="text-lg">Trusted by 10k+ people</span>
      </div>

      {/* Company Logo Carousel */}
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-center text-gray-500 mb-8 text-lg font-medium">
          Trusted by leading companies worldwide
        </p>

        <div className="relative overflow-hidden py-8 pause-animation">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companyLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 group cursor-pointer"
              >
                <div className="w-32 h-20 flex items-center justify-center p-4">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Second set for seamless infinite loop */}
            {companyLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 group cursor-pointer"
              >
                <div className="w-32 h-20 flex items-center justify-center p-4">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Third set for perfect seamless loop */}
            {companyLogos.map((logo, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 mx-8 group cursor-pointer"
              >
                <div className="w-32 h-20 flex items-center justify-center p-4">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
