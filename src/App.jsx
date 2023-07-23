/* eslint-disable react/no-unknown-property */
import './App.css'
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
// import { Text } from '@react-three/drei';
import { Suspense } from 'react';

function App() {

  return (
    <div className="view">
      <Canvas shadows={true}>
      <Suspense fallback={null}>
      <Experience/>
      </Suspense>
    </Canvas>
    </div>
    
  )
}

export default App
