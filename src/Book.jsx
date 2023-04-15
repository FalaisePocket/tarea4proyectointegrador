import { useGLTF, useTexture } from "@react-three/drei";

export default function Book() {

    const { nodes, materials } = useGLTF("/static/textures/book/book.glb");
    const PATH="/static/textures/book/"
    const textures = useTexture(
        {
            map:PATH+"color.png",
            
            metalnessMap:PATH+"roughness.png",
            
        }

    )

    return (
        <group dispose={null} >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_Book_0.geometry}
                            material={materials.Book}
                            
                        >

                        <meshStandardMaterial {...textures}/>
                        </mesh>



                    </group>
                </group>
            </group>
        </group>

        

    )
};  
useGLTF.preload("/static/textures/book/book.glb")