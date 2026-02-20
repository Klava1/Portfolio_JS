import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { portfolioData } from '../data';

const Stack = () => {
  const stackItemsRefs = useRef([]);

  useEffect(() => {
    gsap.from(stackItemsRefs.current, {
      duration: 4,
      ease: "elastic.inOut",
      x: -2000,
    });
  }, []);

  const timelinesRef = useRef({});

  const handleStackItemClick = (index, itemRef) => {
    if (!timelinesRef.current[index]) {
      timelinesRef.current[index] = gsap.timeline({ paused: true, reversed: true });
      timelinesRef.current[index].to(itemRef, { rotation: 360, duration: 1 });
    }
    
    const tl = timelinesRef.current[index];
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  };

  return (
    <>
      <h2 id="my_stack">MY STACK</h2>
      <div className="my_stack" aria-label="Technology stack">
        {portfolioData.technologies.map((tech, index) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="stack_link"
            aria-label={`Learn more about ${tech.name}`}
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="stack_item"
              ref={(el) => {
                stackItemsRefs.current[index] = el;
              }}
              onClick={() => {
                const itemRef = stackItemsRefs.current[index];
                if (itemRef) {
                  handleStackItemClick(index, itemRef);
                }
              }}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Stack;

