import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    }

    if (videoWrapperRef.current) {
      gsap.from(videoWrapperRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.8,
        ease: "power2.out",
      });
    }

    // Check if video source is accessible
    if (videoRef.current) {
      const video = videoRef.current;
      video.addEventListener('error', (e) => {
        console.error('Video load error:', e);
        console.error('Trying alternative path...');
        // Try alternative path if first fails
        if (video.src && !video.src.includes('showcase.mp4')) {
          video.src = '/videos/showcase.mp4';
        }
      });
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

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="video_section">
      <div className="video_container">
        <h2 ref={headingRef}>SHOWCASE</h2>
        <div
          className={`video_wrapper showcase_video_wrapper ${isPlaying ? 'playing' : ''}`}
          ref={videoWrapperRef}
        >
          <video
            ref={videoRef}
            id="portfolio_video"
            className="main_video showcase_video"
            poster="/images/video_poster.jpg"
            controls
            preload="metadata"
            muted
            onPause={handlePause}
            onEnded={handleEnded}
            onError={(e) => {
              console.error('Video error:', e);
              console.error('Video src:', videoRef.current?.src);
            }}
            onLoadedMetadata={() => {
              console.log('Video metadata loaded');
            }}
          >
            <source src="/videos/showcase.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="video_overlay">
              <button
                className="play_button"
                id="play_button"
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
        <p className="video_description">
          A showcase of my AI integration work
        </p>
      </div>
    </section>
  );
};

export default VideoSection;

