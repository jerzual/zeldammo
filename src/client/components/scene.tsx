import { useControls } from "leva";
import { Canvas, Camera } from "@react-three/fiber";

function Scene() {
  const { name, aNumber } = useControls({ name: "World", aNumber: 0 });

  return (
    <div>
      Hey {name}, hello! {aNumber}
    </div>
  );
}
export default Scene;
