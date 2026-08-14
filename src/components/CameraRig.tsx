import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useScrollContext } from './SmoothScrollProvider';

/**
 * CameraRig — scroll-linked camera animation
 *
 * Camera path: 5 keyframes along a CatmullRomCurve3 spline.
 * Scroll progress [0..1] maps to spline parameter t.
 * Look-at targets interpolate linearly between keyframes.
 * Applied in useFrame with MathUtils.damp for buttery damping.
 */

// Keyframe positions along the camera path
const CAMERA_POSITIONS = [
  new THREE.Vector3(0, 2, 8),      // 0.0  — Hero: wide establishing shot
  new THREE.Vector3(-1.5, 1.8, 6), // 0.2  — Features: slight left orbit
  new THREE.Vector3(1.5, 1.2, 4),  // 0.45 — About: close-in right
  new THREE.Vector3(0, 2.5, 6.5),  // 0.7  — Stats/Products: elevated pull-back
  new THREE.Vector3(0, 1.5, 5),    // 1.0  — CTA/Footer: settle center
];

// Look-at targets per keyframe
const LOOK_AT_TARGETS = [
  new THREE.Vector3(0, 0.5, 0),
  new THREE.Vector3(0, 0.3, 0),
  new THREE.Vector3(0.5, 0, -1),
  new THREE.Vector3(0, 0.2, -1),
  new THREE.Vector3(0, 0.3, 0),
];

// Progress breakpoints for each keyframe
const PROGRESS_KEYS = [0, 0.2, 0.45, 0.7, 1.0];

export default function CameraRig() {
  const { progressRef } = useScrollContext();
  const dampedProgress = useRef(0);
  const currentLookAt = useRef(new THREE.Vector3(0, 0.5, 0));
  const targetLookAt = useRef(new THREE.Vector3(0, 0.5, 0));

  // Build a smooth spline through the camera keyframe positions
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(CAMERA_POSITIONS, false, 'centripetal', 0.5);
  }, []);

  useFrame((_state, delta) => {
    const camera = _state.camera;
    const progress = progressRef.current;

    // Damp the progress for ultra-smooth camera motion
    dampedProgress.current = THREE.MathUtils.damp(
      dampedProgress.current,
      progress,
      4, // lambda — higher = snappier
      delta
    );

    const t = THREE.MathUtils.clamp(dampedProgress.current, 0, 1);

    // Get position along the spline
    const pos = curve.getPointAt(t);
    camera.position.copy(pos);

    // Interpolate look-at target between keyframes
    let segmentIndex = 0;
    for (let i = 0; i < PROGRESS_KEYS.length - 1; i++) {
      if (t >= PROGRESS_KEYS[i] && t <= PROGRESS_KEYS[i + 1]) {
        segmentIndex = i;
        break;
      }
    }
    if (t >= PROGRESS_KEYS[PROGRESS_KEYS.length - 1]) {
      segmentIndex = PROGRESS_KEYS.length - 2;
    }

    const segStart = PROGRESS_KEYS[segmentIndex];
    const segEnd = PROGRESS_KEYS[segmentIndex + 1];
    const segT = THREE.MathUtils.clamp(
      (t - segStart) / (segEnd - segStart),
      0,
      1
    );

    targetLookAt.current.lerpVectors(
      LOOK_AT_TARGETS[segmentIndex],
      LOOK_AT_TARGETS[segmentIndex + 1],
      segT
    );

    // Damp the look-at for smooth rotation
    currentLookAt.current.lerp(targetLookAt.current, 1 - Math.exp(-6 * delta));

    camera.lookAt(currentLookAt.current);
  });

  return null;
}
