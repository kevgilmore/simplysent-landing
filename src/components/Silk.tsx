import { forwardRef, useMemo, useRef, type FunctionComponent } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const hexToNormalizedRGB = (hex: string): [number, number, number] => {
    const color = new THREE.Color(hex);
    return [color.r, color.g, color.b];
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uNoiseIntensity;
  uniform vec3 uColor;
  uniform float uRotation;

  // 2D rotation matrix
  mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  // 2D simplex noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    uv = rotate2d(uRotation) * uv; // Apply rotation
    float noise = snoise(uv * uScale + uTime * uSpeed) * uNoiseIntensity;
    vec3 color = uColor + noise;
    gl_FragColor = vec4(color, 1.0);
  }
`;

interface SilkPlaneProps {
    uniforms: {
        [key: string]: { value: any };
    };
}

const SilkPlane = forwardRef<THREE.Mesh, SilkPlaneProps>(function SilkPlane(
    { uniforms },
    ref,
) {
    const { viewport } = useThree();

    useFrame((_, delta) => {
        if (
            ref &&
            "current" in ref &&
            ref.current &&
            "material" in ref.current
        ) {
            const material = ref.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value += 0.02 * delta;
        }
    });

    return (
        <mesh ref={ref} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
});

interface SilkProps {
    color?: string;
    speed?: number;
    scale?: number;
    noiseIntensity?: number;
    rotation?: number;
}

const Silk: FunctionComponent<SilkProps> = ({
    color = "#ffffff",
    speed = 1,
    scale = 1,
    noiseIntensity = 0.1,
    rotation = 0,
}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const uniforms = useMemo(
        () => ({
            uSpeed: { value: speed },
            uScale: { value: scale },
            uNoiseIntensity: { value: noiseIntensity },
            uColor: { value: hexToNormalizedRGB(color) },
            uRotation: { value: rotation },
            uTime: { value: 0 },
        }),
        [speed, scale, noiseIntensity, color, rotation],
    );

    return (
        <Canvas>
            <SilkPlane ref={meshRef} uniforms={uniforms} />
        </Canvas>
    );
};

export default Silk;
