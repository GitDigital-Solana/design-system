import React, { useEffect, useRef } from 'react';

// Simple Mermaid embed component. Assumes mermaid script is loaded on the page.
const MermaidEmbed = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.mermaid && ref.current) {
      try {
        window.mermaid.initialize({ startOnLoad: false });
        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        ref.current.innerHTML = `<div class=\"mermaid\">${chart}</div>`;
        window.mermaid.init(undefined, ref.current);
      } catch (e) {
        // mermaid may not be available in storybook environment
      }
    }
  }, [chart]);

  return <div ref={ref} />;
};

export default MermaidEmbed;
