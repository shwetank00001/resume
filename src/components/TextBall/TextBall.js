import React, { useEffect } from "react";
import "./TextBall.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextBall = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "Mongo",
        "Express",
        "React",
        "NodeJS",
        "API",
        "ES6",
        "Python",
        "Django",
        "GIT",
        "C++",
        "GITHUB",
        "FLASK",
        "MySQL",
      ];

      const options = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere" data-aos="fade-right">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextBall;