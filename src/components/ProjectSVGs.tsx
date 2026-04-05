// Animated SVG banners for project cards

export function WaveformSVG() {
  const bars = [0.3, 0.7, 1, 0.6, 0.9, 0.4, 0.8, 0.5, 1, 0.3, 0.7, 0.9, 0.4, 0.6, 0.8];
  return (
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00cfe8" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="300" height="140" fill="url(#waveGrad)" />
      {/* Mic icon */}
      <rect x="143" y="28" width="14" height="24" rx="7" fill="none" stroke="#00d4aa" strokeWidth="2" />
      <path d="M135 52 Q135 68 150 68 Q165 68 165 52" fill="none" stroke="#00d4aa" strokeWidth="2" />
      <line x1="150" y1="68" x2="150" y2="76" stroke="#00d4aa" strokeWidth="2" />
      <line x1="143" y1="76" x2="157" y2="76" stroke="#00d4aa" strokeWidth="2" />
      {/* Waveform bars */}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={22 + i * 18}
          y={70 - h * 35}
          width="8"
          height={h * 70}
          rx="4"
          fill="#00d4aa"
          opacity="0.7"
          style={{
            transformOrigin: `${26 + i * 18}px 105px`,
            animation: `waveBar ${0.6 + (i % 5) * 0.15}s ease-in-out ${i * 0.08}s infinite`,
          }}
        />
      ))}
      {/* Labels */}
      <text x="150" y="125" textAnchor="middle" fill="#00d4aa" fontSize="9" fontFamily="monospace" opacity="0.6">TEXT → VOICE</text>
    </svg>
  );
}

export function CafeSVG() {
  return (
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="cafeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0a500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="300" height="140" fill="url(#cafeGrad)" />
      {/* Cup body */}
      <path d="M118 80 L122 108 Q150 114 178 108 L182 80 Z" fill="none" stroke="#f0a500" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Cup handle */}
      <path d="M182 88 Q200 88 200 98 Q200 108 182 108" fill="none" stroke="#f0a500" strokeWidth="2.5" />
      {/* Saucer */}
      <ellipse cx="150" cy="114" rx="36" ry="5" fill="none" stroke="#f0a500" strokeWidth="1.5" opacity="0.6" />
      {/* Coffee liquid */}
      <path d="M122 86 Q150 92 178 86" fill="none" stroke="#f0a500" strokeWidth="1.5" opacity="0.5" />
      {/* Steam clouds */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${134 + i * 16} 76 Q${136 + i * 16} 68 ${138 + i * 16} 72 Q${140 + i * 16} 62 ${142 + i * 16} 68`}
          fill="none"
          stroke="#f0a500"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0"
          style={{ animation: `steam 1.8s ease-out ${i * 0.5}s infinite` }}
        />
      ))}
      {/* POS grid */}
      {[0,1,2].map(col => [0,1].map(row => (
        <rect key={`${col}-${row}`} x={36 + col * 22} y={68 + row * 22} width="16" height="16" rx="3"
          fill="none" stroke="#00d4aa" strokeWidth="1.2" opacity="0.4" />
      )))}
      <text x="150" y="130" textAnchor="middle" fill="#f0a500" fontSize="9" fontFamily="monospace" opacity="0.6">CAFE MANAGEMENT</text>
    </svg>
  );
}

export function HomeHubSVG() {
  return (
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="homeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00cfe8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.07" />
        </linearGradient>
      </defs>
      <rect width="300" height="140" fill="url(#homeGrad)" />
      {/* House */}
      <polygon points="150,30 110,65 190,65" fill="none" stroke="#00cfe8" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="115" y="65" width="70" height="45" fill="none" stroke="#00cfe8" strokeWidth="2" />
      {/* Door */}
      <rect x="139" y="84" width="22" height="26" rx="11" fill="none" stroke="#00cfe8" strokeWidth="1.5" />
      {/* Windows */}
      <rect x="120" y="72" width="12" height="12" rx="2" fill="none" stroke="#00cfe8" strokeWidth="1.2" opacity="0.6" />
      <rect x="168" y="72" width="12" height="12" rx="2" fill="none" stroke="#00cfe8" strokeWidth="1.2" opacity="0.6" />
      {/* WiFi rings */}
      {[0,1,2].map(i => (
        <circle key={i} cx="150" cy="70" r={14 + i * 10}
          fill="none" stroke="#00d4aa" strokeWidth="1.5"
          opacity="0"
          style={{ animation: `wifi-ping 2s ease-out ${i * 0.5}s infinite` }}
        />
      ))}
      <text x="150" y="128" textAnchor="middle" fill="#00cfe8" fontSize="9" fontFamily="monospace" opacity="0.6">HOME SERVICES</text>
    </svg>
  );
}

export function HostelSVG() {
  const windows = [
    [0,0],[1,0],[2,0],[3,0],
    [0,1],[1,1],[2,1],[3,1],
    [0,2],[1,2],[2,2],[3,2],
  ];
  return (
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="hostelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#f0a500" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="300" height="140" fill="url(#hostelGrad)" />
      {/* Building */}
      <rect x="85" y="32" width="130" height="88" fill="none" stroke="#00d4aa" strokeWidth="2" rx="2" />
      {/* Roof line */}
      <rect x="80" y="28" width="140" height="8" fill="none" stroke="#00d4aa" strokeWidth="1.5" />
      {/* Entrance */}
      <rect x="135" y="92" width="30" height="28" fill="none" stroke="#00d4aa" strokeWidth="1.5" />
      {/* Windows with random blink */}
      {windows.map(([col, row]) => (
        <rect
          key={`${col}-${row}`}
          x={96 + col * 26}
          y={42 + row * 22}
          width="16"
          height="12"
          rx="2"
          fill="#f0a500"
          style={{
            animation: `win-blink ${2 + ((col * 3 + row * 7) % 5) * 0.4}s ease-in-out ${(col + row * 0.7) * 0.3}s infinite`,
          }}
        />
      ))}
      <text x="150" y="130" textAnchor="middle" fill="#00d4aa" fontSize="9" fontFamily="monospace" opacity="0.6">HOSTEL MANAGEMENT</text>
    </svg>
  );
}

export function NeuralNetSVG() {
  const nodes = [
    [40,35],[40,70],[40,105],
    [110,20],[110,55],[110,90],[110,120],
    [180,35],[180,70],[180,105],
    [250,55],[250,90],
  ];
  const edges = [
    [0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,11],
  ];
  return (
    <svg viewBox="0 0 290 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="nnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00cfe8" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="290" height="140" fill="url(#nnGrad)" />
      {edges.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#00d4aa" strokeWidth="0.8" opacity="0.25"
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="none" stroke="#00d4aa" strokeWidth="1.5"
          style={{
            animation: `node-pulse ${1 + (i % 4) * 0.3}s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <text x="145" y="133" textAnchor="middle" fill="#00d4aa" fontSize="9" fontFamily="monospace" opacity="0.6">AI LEARNING PLATFORM</text>
    </svg>
  );
}

export function LevelUpSVG() {
  return <NeuralNetSVG />;
}

export function CafeProSVG() {
  return <CafeSVG />;
}
