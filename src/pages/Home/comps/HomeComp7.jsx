import React, { useState, useEffect, useRef } from "react";
import "./HomeComp7.css";

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "/partners/1.jpg",
    description:
      "bank of Abyssinia is a leading financial institution in Ethiopia, providing innovative banking solutions to individuals and businesses.",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "/partners/1.jpg",
    description: "Description 2",
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "/partners/1.jpg",
    description: "Description 3",
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "/partners/1.jpg",
    description: "Description 4",
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "/partners/1.jpg",
    description: "Description 5",
  },
  {
    id: 6,
    name: "Partner 6",
    logo: "/partners/1.jpg",
    description: "Description 6",
  },
  {
    id: 7,
    name: "Partner 7",
    logo: "/partners/1.jpg",
    description: "Description 7",
  },
  {
    id: 8,
    name: "Partner 8",
    logo: "/partners/1.jpg",
    description: "Description 8",
  },
];

const HomeComp7 = () => {
  const [visiblePartners, setVisiblePartners] = useState([]);
  const [overflowPartners, setOverflowPartners] = useState([]);
  const animationRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Initialize and handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    updateVisiblePartners();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(animationRef.current);
    };
  }, []);

  // Update partners when mobile state changes
  useEffect(() => {
    updateVisiblePartners();
  }, [isMobile]);

  // Update visible partners
  const updateVisiblePartners = () => {
    const visibleCount = isMobile ? 3 : 5;
    const overflowCount = 2;

    setVisiblePartners(partners.slice(0, visibleCount));
    setOverflowPartners(
      partners.slice(visibleCount, visibleCount + overflowCount)
    );
  };

  // Rotate partners to the left
  const rotatePartners = () => {
    setVisiblePartners((prev) => {
      const nextId = prev[prev.length - 1].id + 1;
      const nextPartner = partners.find((p) => p.id === nextId) || partners[0];
      return [...prev.slice(1), nextPartner];
    });

    setOverflowPartners((prev) => {
      const nextId = prev[prev.length - 1].id + 1;
      const nextPartner = partners.find((p) => p.id === nextId) || partners[0];
      return [...prev.slice(1), nextPartner];
    });
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const startRotation = () => {
      animationRef.current = setInterval(() => {
        rotatePartners();
      }, 5000);
    };

    startRotation();
    return () => clearInterval(animationRef.current);
  }, [isMobile]);

  // Manual rotation
  const rotateForward = () => {
    clearInterval(animationRef.current);
    rotatePartners();
    animationRef.current = setInterval(rotatePartners, 5000);
  };

  return (
    <section className="collaborators-section">
      <div className="section-container">
        <h2>Our Collaborators</h2>
        <p>We're proud to partner with leading organizations</p>

        <div className="partners-container">
          <div className="visible-partners">
            {visiblePartners.map((partner, index) => {
              const isCenter = index === Math.floor(visiblePartners.length / 2); // Identify the center partner
              return (
                <PartnerCard
                  key={`visible-${partner.id}`}
                  partner={partner}
                  isCenter={isCenter} // Pass the center flag
                />
              );
            })}
          </div>

          <div className="overflow-partners">
            {overflowPartners.map((partner) => (
              <PartnerCard
                key={`overflow-${partner.id}`}
                partner={partner}
                isOverflow
              />
            ))}
          </div>

          <button className="rotate-button" onClick={rotateForward}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({ partner, isOverflow = false, isCenter = false }) => (
  <div
    className={`partner-card ${isOverflow ? "overflow" : ""} ${
      isCenter ? "center" : ""
    }`}
  >
    <img
      src={partner.logo}
      alt={partner.name}
      onError={(e) => (e.target.src = "/partners/placeholder.png")}
    />
    <span className="partner-tooltip">{partner.description}</span>
  </div>
);

export default HomeComp7;
