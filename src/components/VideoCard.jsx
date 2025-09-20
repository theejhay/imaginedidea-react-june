import { useState } from "react";

const VideoCard = () => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [playing, setPlaying] = useState(false);

  const handleMouseMove = (e) => {
    console.log(e.currentTarget);
    const card = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - card.left) / card.width) * 100;
    const y = ((e.clientY - card.top) / card.height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseLeave = () => {
    setPosition({ x: "50%", y: "50%" });
  };

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <div
      className="position-relative rounded overflow-hidden shadow"
      style={{
        width: "560px",
        height: "315px",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {playing ? (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
            alt="video thumbnail"
            className="w-100 h-100 object-fit-cover"
          />

          <div
            className="position-absolute"
            style={{
              left: position.x,
              top: position.y,
              transform: "translate(-50%, -50%)",
              transition: "all 0.2s ease",
            }}
          >
            <button
              onClick={handlePlayClick}
              className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: "70px", height: "70px", fontSize: "28px" }}
            >
              ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoCard;