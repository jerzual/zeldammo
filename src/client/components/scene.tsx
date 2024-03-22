import { Canvas, Camera } from '@react-three/fiber';
import { useControls } from 'leva';

function Scene() {
  const { name, aNumber } = useControls({ name: 'World', aNumber: 0 });

  return (
    <div>
      Hey {name}, hello! {aNumber}
    </div>
  );
}
export default Scene;
