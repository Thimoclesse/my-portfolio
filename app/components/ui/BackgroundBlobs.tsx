export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] opacity-40 blur-3xl"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F7FD5" />
            <stop offset="100%" stopColor="#86A8E7" />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)"
          d="M421.2,316.3Q385,382,316.3,415.3Q247.7,448.7,182.7,411.7Q117.7,374.7,92.7,309.7Q67.7,244.7,105,185Q142.3,125.3,197.7,100.3Q253,75.3,305.7,105.7Q358.3,136,421.2,165.3Q484,194.7,454,254.3Q424,314,421.2,316.3Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-[50vw] h-[50vh] opacity-30 blur-2xl"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA17F" />
            <stop offset="100%" stopColor="#00223E" />
          </radialGradient>
        </defs>
        <path
          fill="url(#grad2)"
          d="M364.6,307.6Q327,365.7,277.5,383.6Q228,401.5,179.1,369.8Q130.2,338.2,97.7,286.1Q65.1,234,87.1,179.7Q109,125.4,167.5,110.7Q226,96,280.6,108.1Q335.2,120.2,370.6,168.6Q406,217,364.6,307.6Z"
        />
      </svg>
    </div>
  );
}