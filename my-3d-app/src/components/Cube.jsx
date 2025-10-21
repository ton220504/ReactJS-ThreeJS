import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cube({mousePosition}){
    const CubRef = useRef();

    useFrame(()=>{
        CubRef.current.rotation.x = mousePosition.y * Math.PI+ performance.now() * 0.001;
        CubRef.current.rotation.y = mousePosition.x * Math.PI+ performance.now() * 0.001;
       
    })

    return(
        <mesh ref={CubRef}>
            <boxGeometry args={[2,2,2]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    )
}