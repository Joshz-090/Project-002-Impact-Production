import React, { useState, useRef, useEffect } from "react";
import BethelImage1 from "../../../assets/content.jpg";
import BethelImage2 from "../../../assets/event.jpg";
import YoungsVideo1 from "../../../assets/hero-video.mp4";
import YoungsVideoPoster from "../../../assets/event.jpg"; // Add a dedicated poster image

import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const HomeComp5 = () => {
  const [bethelHover, setBethelHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);

  // Initialize video on component mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoReady(true);
      });

      return () => {
        videoRef.current?.removeEventListener("loadeddata", () => {});
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-yellow-500 sm:text-4xl uppercase tracking-wider font-montserrat">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our latest work and see how we bring creativity and
            innovation to life.
          </p>
        </div>

        {/* Project 1 - Bethel Autism Center */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative overflow-hidden rounded-xl shadow-xl h-96 cursor-pointer group"
            onMouseEnter={() => setBethelHover(true)}
            onMouseLeave={() => setBethelHover(false)}
          >
            <img
              src={bethelHover ? BethelImage2 : BethelImage1}
              alt="Bethel Autism Center Art Exhibition"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-sm font-semibold mb-2">
                  June 2023
                </span>
                <h3 className="text-2xl font-bold mb-2">
                  Bethel Autism Center Art Exhibition
                </h3>
                <p className="text-yellow-300 font-medium">
                  Addis Ababa, Ethiopia • 500+ Attendees
                </p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider font-montserrat">
              Bethel Autism Center Art Exhibition
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed text-left">
              We organized a groundbreaking art exhibition showcasing the
              talents of young artists from Bethel Autism Center. The event
              brought together artists, community members, and advocates to
              celebrate creativity and raise awareness about autism.
            </p>
            <button
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              aria-label="View Bethel project details"
            >
              View Project Details
            </button>
          </div>
        </div>

        {/* Project 2 - Youngs Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 text-left">
            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider font-montserrat">
              Youngs Empowerment Program
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed text-left">
              Our youth empowerment initiative provides creative outlets and
              skill development for underprivileged youth. Through workshops and
              mentorship, we're helping shape the next generation of creative
              leaders.
            </p>
            <button
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              aria-label="View Youngs project details"
            >
              View Project Details
            </button>
          </div>

          <div
            className="relative overflow-hidden rounded-xl shadow-xl h-96 cursor-pointer order-2 lg:order-2 group border-2 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              loop
              muted
              className={`w-full h-full object-cover ${
                isVideoReady ? "opacity-100" : "opacity-0"
              }`}
              poster={YoungsVideoPoster}
              preload="metadata"
              aria-label="Youngs Empowerment Program video"
            >
              <source src={YoungsVideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Loading state */}
            {!isVideoReady && (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <div className="animate-pulse text-yellow-500">
                  Loading video...
                </div>
              </div>
            )}

            {/* Play/Pause Button */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div
                className="bg-black/50 rounded-full p-4 backdrop-blur-sm hover:bg-black/70 transition-all duration-200"
                role="button"
                tabIndex={0}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                onKeyDown={(e) => e.key === "Enter" && togglePlay()}
              >
                {isPlaying ? (
                  <PauseIcon className="h-12 w-12 text-yellow-500" />
                ) : (
                  <PlayIcon className="h-12 w-12 text-yellow-500" />
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-sm font-semibold mb-2">
                  Ongoing
                </span>
                <h3 className="text-2xl font-bold mb-2">
                  Youngs Empowerment Program
                </h3>
                <p className="text-yellow-300 font-medium">
                  Addis Ababa, Ethiopia • 200+ Participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp5;
