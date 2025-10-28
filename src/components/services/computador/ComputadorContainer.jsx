import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Computador } from "./Computador"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const ComputadorContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intesity="0.5">
                    <Computador/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position = {[-1, 0, 1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default ComputadorContainer