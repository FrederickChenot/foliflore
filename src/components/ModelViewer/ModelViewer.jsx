/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import PropTypes from 'prop-types';
import GltfModel from '../GltfModel';
import './modelViewer.scss';

function ModelViewer({
  modelPath,
  scale = 40,
  width = 30,
  height = 150,
  margin = 10,
  position = [0, 0, 0],
}) {
  return (
    <Canvas style={{ height: height, width: width, margin: margin }} className="canvas">
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

ModelViewer.defaultProps = {
  scale: 40,
  height: 150,
  position: [0, 0, 0],
};

ModelViewer.propTypes = {
  modelPath: PropTypes.string.isRequired,
  scale: PropTypes.number,
  width: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
  height: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number),
};

export default ModelViewer;
