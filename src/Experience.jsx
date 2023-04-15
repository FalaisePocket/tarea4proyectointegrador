import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './FLoor'
import Book from './Book'

export default function Experience() {
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <spotLight castShadow position={[0, 4, -6]} intensity={2.5}/>
        { /*
            <directionalLight castShadow position={[0, 4, -6]} intensity={2.5} />
            <hemisphereLight castShadow position={[0, 4, -6]} intensity={2.5} />
            <pointLight castShadow position={[0, 4, -6]} intensity={2.5}/>
        
            <ambientLight intensity={1.5} />

        
        
        
        */}
        
        
        <Book/>
        <Floor/>

    </>
}