import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Onboarding = ({ onExploreWebsite, onTalkWithAI }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const mobileButtonsRef = useRef(null);
  const subtitlesRef = useRef(null);
  const replayButtonRef = useRef(null);

  useEffect(() => {
    // Show video after 2-second delay
    const timer = setTimeout(() => {
      setShowVideo(true);
      setShowSubtitles(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      // Animate video appearance with smooth fade-in and slight scale
      gsap.from(videoWrapperRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate buttons appearance
      const buttonsToAnimate = [];
      if (leftButtonRef.current) buttonsToAnimate.push(leftButtonRef.current);
      if (rightButtonRef.current) buttonsToAnimate.push(rightButtonRef.current);
      if (mobileButtonsRef.current?.children) {
        Array.from(mobileButtonsRef.current.children).forEach(btn => buttonsToAnimate.push(btn));
      }
      
      if (buttonsToAnimate.length > 0) {
        gsap.from(buttonsToAnimate, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.3,
          stagger: 0.15,
          ease: "power2.out",
        });
      }

      // Animate subtitles
      if (subtitlesRef.current) {
        gsap.from(subtitlesRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.5,
          delay: 0.5,
          ease: "power2.out",
        });
      }

      // Try to play video
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, [showVideo]);

  useEffect(() => {
    // Animate replay button when video ends
    if (videoEnded && replayButtonRef.current) {
      gsap.from(replayButtonRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 10,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [videoEnded]);

  const handleVideoInteraction = () => {
    if (isMuted && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleExploreWebsite = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          onExploreWebsite();
        },
      });
    } else {
      onExploreWebsite();
    }
  };

  const handleTalkWithAI = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          onTalkWithAI();
        },
      });
    } else {
      onTalkWithAI();
    }
  };

  const handleVideoEnd = () => {
    // Video ended, avatar remains still
    setVideoEnded(true);
  };

  const handleReplayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
    }
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div
      ref={containerRef}
      className="onboarding-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome - Choose your browsing experience"
    >
      {showVideo && (
        <div className="onboarding-content">
          {/* CTA Button - Left (Desktop only) */}
          <button
            ref={leftButtonRef}
            className="onboarding-button onboarding-button-explore onboarding-button-desktop-left"
            onClick={handleExploreWebsite}
            onKeyDown={(e) => handleKeyDown(e, handleExploreWebsite)}
            aria-label="Explore the website - Remove overlay and continue to standard website"
          >
            Explore the website
          </button>

          {/* Avatar Video */}
          <div ref={videoWrapperRef} className="avatar-video-wrapper">
            <video
              ref={videoRef}
              className="avatar-video"
              autoPlay
              playsInline
              muted={isMuted}
              preload="auto"
              onEnded={handleVideoEnd}
              onClick={handleVideoInteraction}
              onTouchStart={handleVideoInteraction}
              aria-label="AI avatar introduction video"
            >
              <source src="/videos/Klava_website_hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Replay Button */}
            {videoEnded && (
              <button
                ref={replayButtonRef}
                className="replay-video-button"
                onClick={handleReplayVideo}
                onKeyDown={(e) => handleKeyDown(e, handleReplayVideo)}
                aria-label="Replay video"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4v6h6M23 4v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Replay</span>
              </button>
            )}
            
            {/* Subtitles */}
            {showSubtitles && (
              <div ref={subtitlesRef} className="avatar-subtitles" role="region" aria-live="polite">
                <p>Hi! I'm Klavdiya. Welcome to my portfolio.</p>
                <p>Choose how you'd like to explore my work.</p>
              </div>
            )}
          </div>

          {/* CTA Button - Right (Desktop only) */}
          <button
            ref={rightButtonRef}
            className="onboarding-button onboarding-button-ai onboarding-button-desktop-right"
            onClick={handleTalkWithAI}
            onKeyDown={(e) => handleKeyDown(e, handleTalkWithAI)}
            aria-label="Talk with AI-me - Launch AI assistant experience"
          >
            Talk with AI-me
          </button>

          {/* CTA Buttons - Mobile (stacked below) */}
          <div ref={mobileButtonsRef} className="onboarding-buttons onboarding-buttons-mobile">
            <button
              className="onboarding-button onboarding-button-explore"
              onClick={handleExploreWebsite}
              onKeyDown={(e) => handleKeyDown(e, handleExploreWebsite)}
              aria-label="Explore the website - Remove overlay and continue to standard website"
            >
              Explore the website
            </button>
            <button
              className="onboarding-button onboarding-button-ai"
              onClick={handleTalkWithAI}
              onKeyDown={(e) => handleKeyDown(e, handleTalkWithAI)}
              aria-label="Talk with AI-me - Launch AI assistant experience"
            >
              Talk with AI-me
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
