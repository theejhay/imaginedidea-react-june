import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setProgress(((index + 1) / sections.length) * 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-section position-relative" style={{ minHeight: "100vh" }}>
      <div className="container-fluid d-flex">
        {/* Progress bar column */}
        <div
          className="sticky-top d-flex flex-column align-items-center justify-content-center"
          style={{ width: "60px", height: "100vh" }}
        >
          <div
            className="progress"
            style={{
              width: "15px",
              height: "80%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ height: `${progress}%`, width: "100%" }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>

        {/* Scrollable cards column */}
        <div className="ms-5 flex-grow-1">
          {["First", "Second", "Third", "Fourth", "Fifth"].map((text, i) => (
            <div
              key={i}
              data-index={i}
              className="scroll-card vh-100 d-flex align-items-center justify-content-center bg-light border rounded shadow m-3"
            >
              <h1>{text} Card</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
