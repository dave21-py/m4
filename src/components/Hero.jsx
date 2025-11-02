import { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
    {
      /*opens up twice fast than orginal*/
    }
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>Macbook Air</h1>
        <img src="./title.png" alt="Macbook Title" />
      </div>
      <video
        ref={videoRef}
        src="./videos/hero.mp4"
        autoPlay
        muted
        playsInline
      ></video>
      <button>Buy</button>
      <p>From $999 or $83.25/mo. for 12 mo.</p>
    </section>
  );
};
export default Hero;
