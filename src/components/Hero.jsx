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
        <h1>Macbook Pro</h1>
        <h1>
          <span className="text-[#8FC2E4]">Now supercharged by M4.</span>
        </h1>
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
      <p>From $1,999 or $166.58 per month for 12 months.</p>
    </section>
  );
};
export default Hero;
