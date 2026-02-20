import { useState, useEffect, useRef } from 'react';

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check if video is playing on mount
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlayEvent = () => {
    setIsPlaying(true);
  };

  return (
    <section id="about_me" className="about_me" aria-label="About me">
      <div className="about_content">
        <div className="about_text_section">
          <h1>ABOUT ME</h1>
          <p className="about_text">
            Hi! I'm Klavdiya, full-stack developer and founder of
            <a
              href="https://globalchic.club"
              target="_blank"
              rel="noopener noreferrer"
              className="project_link"
            >
              Global Chic
            </a>
            — an ecosystem for businesses and like-minded people to connect,
            grow, and collaborate.
          </p>
          <p className="about_text">
            I build web platforms from scratch — React on the front, Node and
            Mongo on the back — and I also run our partnership program, helping
            brands and communities team up through smart tech.
          </p>
          <p className="about_text">
            I love clean design, clever code, and turning good ideas into real
            products. So… if you're looking for someone who builds with brains
            and heart — let's work together 😉
          </p>
        </div>
        <div className="about_video_section">
          <div className={`about_video_wrapper ${isPlaying ? 'playing' : ''}`}>
            <video
              ref={videoRef}
              className="about_video"
              loop
              playsInline
              controls
              poster="/images/about_video_poster.jpg"
              onPlay={handlePlayEvent}
              onPause={handlePause}
            >
              <source src="/videos/me_portfolio2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className="about_video_overlay">
                <button
                  className="play_button"
                  onClick={handlePlay}
                  aria-label="Play video"
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

