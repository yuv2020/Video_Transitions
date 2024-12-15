import React, { useEffect, useRef } from 'react';
import hoverEffect from 'hover-effect';
import './App.css';

const HoverEffectComponent = ({ parentClass, image1, image2, displacementImage, intensity, angle }) => {
  const parentRef = useRef(null);

  useEffect(() => {
    new hoverEffect({
      parent: parentRef.current,
      intensity,
      image1,
      image2,
      angle,
      displacementImage,
    });
  }, [intensity, image1, image2, angle, displacementImage]);

  return <div className={parentClass} ref={parentRef}></div>;
};

function App() {
  return (
    <>
      <div className="app-container">
        <HoverEffectComponent
          parentClass="img1"
          intensity={0.1}
          image1="https://demo-source.imgix.net/snowboard.jpg"
          image2="https://demo-source.imgix.net/mountains.jpg"
          angle={Math.PI / 12}
          displacementImage="https://images.unsplash.com/photo-1588594276800-2de0522b3b73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
}

export default App;
