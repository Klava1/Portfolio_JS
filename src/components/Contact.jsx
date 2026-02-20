import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const cvContainerRef = useRef(null);
  const contactsFormRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Heading hover animation
    if (headingRef.current) {
      const tl = gsap
        .timeline({ paused: true, reversed: true })
        .to(headingRef.current, { scale: 1.1, duration: 1.5 });

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      headingRef.current.addEventListener('mouseenter', handleMouseEnter);
      headingRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (headingRef.current) {
          headingRef.current.removeEventListener('mouseenter', handleMouseEnter);
          headingRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }

    // CV and contact form hover animations
    const addHoverAnimation = (element, properties) => {
      if (!element) return;

      const tl = gsap
        .timeline({ paused: true, reversed: true })
        .to(element, properties);

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    const cleanup1 = addHoverAnimation(cvContainerRef.current, {
      scale: 1.05,
      duration: 1,
    });
    const cleanup2 = addHoverAnimation(contactsFormRef.current, {
      scale: 1.05,
      duration: 1,
    });

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <>
      <h2 ref={headingRef}>HAVE A LOOK AT MY CV AND REACH OUT TO ME</h2>
      <section className="video_form_wrapper" aria-label="Contact and CV section">
        <div className="contacts">
          <div id="cv_container" ref={cvContainerRef}>
            <object
              data="/documents/CV.pdf"
              className="cv"
              type="application/pdf"
              aria-label="CV PDF"
            >
              <p>
                Your browser does not support PDFs. Please download the PDF to
                view it: <a href="/CV.pdf">Download CV</a>.
              </p>
            </object>
          </div>

          <div id="contacts_form" ref={contactsFormRef}>
            <form
              action="https://formspree.io/f/xqkrqrwl"
              method="POST"
            >
              <div className="container_contact">
                <div className="contact">
                  <h3>SEND ME A MESSAGE!</h3>
                </div>
                <div className="contact">
                  <label>
                    Your email:
                    <input
                      type="email"
                      name="_replyto"
                      className="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </label>
                </div>
                <div className="contact">
                  <label>
                    Your message:
                    <textarea
                      name="message"
                      className="textmessage"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </label>
                </div>
                <div className="contact">
                  <button type="submit" className="btn">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

