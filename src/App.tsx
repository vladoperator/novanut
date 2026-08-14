import SmoothScrollProvider from './components/SmoothScrollProvider';
import Canvas3D from './components/Canvas3D';
import UIOverlay from './components/UIOverlay';

export default function App() {
  return (
    <SmoothScrollProvider>
      <Canvas3D />
      <UIOverlay />
    </SmoothScrollProvider>
  );
}
