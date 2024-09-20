import { useState } from "react";

const contStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const starContStyle = {
  display: "flex",
};

export default function StarRating({
  maxRating = 5,
  color = "goldenrod",
  size = 50,
  className = "",
  messages = [],
  defaultRating,
}) {
  const textStyle = {
    fontFamily: "courier new",
    fontSize: `${size / 1.5}px`,
    color: color,
    fontWeight: "bold",
    lineHeight: "1",
    margin: "0",
  };

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div style={contStyle} className={className}>
      <div style={starContStyle}>
        {Array.from({ length: maxRating }, (v, i) => (
          <Star
            key={i}
            onRate={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: size,
    aspectRatio: "1/1",
    cursor: "pointer",
  };
  return (
    <span
      style={starStyle}
      onClick={onRate}
      role="button"
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color}
          stroke={color}
        >
          <path d="m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
        >
          <path d="m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z" />
        </svg>
      )}
    </span>
  );
}
