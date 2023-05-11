import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;

















// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// import { styles } from '../styles';
// import { NavLinks } from 'react-router-dom';

// const Loader = () => {
//   return (
//     <div>Loader</div>
//   )
// }

// export default Loader