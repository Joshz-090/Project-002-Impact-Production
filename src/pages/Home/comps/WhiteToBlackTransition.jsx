// WhiteToBlackTransition.jsx
import React, { useMemo } from "react";
import PropTypes from "prop-types";

/**
 * A smooth white-to-black transition gradient component using SVG
 *
 * @param {Object} props - Component props
 * @param {number} [props.height=20] - Height of the gradient in pixels
 * @param {string|number} [props.width='100%'] - Width of the gradient
 * @param {string} [props.direction='down'] - Gradient direction (down, up, left, right, etc.)
 * @param {number} [props.opacity=1] - Opacity of the gradient (0-1)
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.fromColor='white'] - Starting color of the gradient
 * @param {string} [props.toColor='black'] - Ending color of the gradient
 * @param {number} [props.spread=0] - Additional padding around the gradient
 * @param {string} [props.smoothness='linear'] - Gradient transition curve
 * @returns {JSX.Element} White to black transition gradient
 */
const WhiteToBlackTransition = ({
  height = 20,
  width = "100%",
  direction = "down",
  opacity = 1,
  className = "",
  fromColor = "white",
  toColor = "black",
  spread = 0,
  smoothness = "linear",
}) => {
  // Pre-defined gradient directions for better performance
  const DIRECTION_MAP = useMemo(
    () => ({
      down: "rotate(0)",
      up: "rotate(180)",
      left: "rotate(270)",
      right: "rotate(90)",
      "up-left": "rotate(225)",
      "up-right": "rotate(135)",
      "down-left": "rotate(315)",
      "down-right": "rotate(45)",
    }),
    []
  );

  // Memoized gradient transform calculation
  const gradientTransform = useMemo(
    () => DIRECTION_MAP[direction] || DIRECTION_MAP.down,
    [direction, DIRECTION_MAP]
  );

  // Accessibility label based on direction
  const ariaLabel = useMemo(
    () => `${fromColor} to ${toColor} gradient transition ${direction}`,
    [fromColor, toColor, direction]
  );

  // Validate and clamp opacity between 0 and 1
  const safeOpacity = useMemo(
    () => Math.min(1, Math.max(0, opacity)),
    [opacity]
  );

  // Spread handling
  const spreadStyle = useMemo(
    () => ({
      margin: spread > 0 ? `-${spread}px` : 0,
      width: spread > 0 ? `calc(100% + ${spread * 2}px)` : width,
    }),
    [spread, width]
  );

  return (
    <div
      className={className}
      style={{
        ...spreadStyle,
        height: `${height}px`,
        lineHeight: 0, // Fix for SVG spacing
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        style={{ opacity: safeOpacity }}
        aria-label={ariaLabel}
        role="img"
      >
        <defs>
          <linearGradient
            id="whiteToBlackGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientTransform={gradientTransform}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={fromColor} stopOpacity="1">
              {smoothness === "ease" && (
                <animate
                  attributeName="stop-opacity"
                  values="1;0.98;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="100%" stopColor={toColor} stopOpacity="1">
              {smoothness === "ease" && (
                <animate
                  attributeName="stop-opacity"
                  values="1;0.98;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#whiteToBlackGradient)" />
      </svg>
    </div>
  );
};

WhiteToBlackTransition.propTypes = {
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  direction: PropTypes.oneOf([
    "down",
    "up",
    "left",
    "right",
    "up-left",
    "up-right",
    "down-left",
    "down-right",
  ]),
  opacity: PropTypes.number,
  className: PropTypes.string,
  fromColor: PropTypes.string,
  toColor: PropTypes.string,
  spread: PropTypes.number,
  smoothness: PropTypes.oneOf(["linear", "ease"]),
};

WhiteToBlackTransition.defaultProps = {
  height: 20,
  width: "100%",
  direction: "down",
  opacity: 1,
  className: "",
  fromColor: "white",
  toColor: "black",
  spread: 0,
  smoothness: "linear",
};

export default React.memo(WhiteToBlackTransition);
