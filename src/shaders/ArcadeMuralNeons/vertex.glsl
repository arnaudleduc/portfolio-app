#define M_PI 3.1415926535897932384626433832795

varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    
    vUv = uv * cos(M_PI / 2.5);
}