/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import PropTypes from 'prop-types';

function GltfModel({ modelPath, scale = 40, position = [0, 0, 0] }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    ref.current.rotation.z = 0;
  }, []);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.002));
  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      scale={scale}
    />
  );
}

GltfModel.defaultProps = {
  scale: 40,
  position: [0, 0, 0],
};

GltfModel.propTypes = {
  modelPath: PropTypes.string.isRequired,
  scale: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number),
};

export default GltfModel;
