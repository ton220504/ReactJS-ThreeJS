import { useEffect, useState } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'

function App() {
  const [mousePosition, setMousePosition] = useState({x:0, y:0})

  useEffect(()=>{
    const handleMouseMove=(event)=>{
      setMousePosition({
        x: (event.clientX/window.innerWidth) *2-1,
        y: -(event.clientY/window.innerHeight) *2+1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return()=>{
      window.removeEventListener('mousemove', handleMouseMove)
    }
  },[])

  return (
    <div style={{width:"100vw", height:"100vh", background:"#111"}}>
      <Canvas camera={{position:[3,3,3]}}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5,5,5]} intensity={1}/>

        <Cube mousePosition={mousePosition}/>

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />

        <Environment preset='sunset'/>

      </Canvas>
    </div>
  )
}

export default App
