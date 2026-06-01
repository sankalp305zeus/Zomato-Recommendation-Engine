'use client';
// Replicates the Stitch-designed "Curating Your Experience" loading screen.

type Step = 'filter' | 'ai' | 'rank';

interface Props { step: Step; }

const FACTS = [
  'MTR (Mavalli Tiffin Room) in Bangalore has been serving idlis since 1924.',
  'Honey is the only food that never spoils — 3,000-year-old honey was found edible in Egyptian tombs.',
  'Pizza Margherita was named after Queen Margherita of Italy in 1889.',
  'Wasabi is extremely hard to grow; most "wasabi" served globally is colored horseradish.',
];

const fact = FACTS[Math.floor(Math.random() * FACTS.length)];

function StepRow({ label, state }: { label: string; state: 'done' | 'active' | 'pending' }) {
  return (
    <div className={`flex items-center gap-4 mb-4 ${state === 'pending' ? 'opacity-40' : ''}`}>
      {state === 'done' && (
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      {state === 'active' && (
        <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin flex-shrink-0" />
      )}
      {state === 'pending' && (
        <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-secondary" />
        </div>
      )}
      <span className={`text-base text-on-surface ${state === 'active' ? 'font-bold' : ''}`}>{label}</span>
    </div>
  );
}

export default function LoadingState({ step }: Props) {
  const filterState  = step === 'filter' ? 'active' : 'done';
  const aiState      = step === 'ai'     ? 'active' : step === 'rank' ? 'done' : 'pending';
  const rankState    = step === 'rank'   ? 'active' : 'pending';

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {/* Animated orb */}
      <div className="relative mb-10">
        <div className="w-36 h-36 rounded-full flex items-center justify-center animate-glow"
             style={{ background: 'linear-gradient(135deg,rgba(183,18,42,0.15),rgba(126,34,206,0.15),rgba(37,99,235,0.15))' }}>
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b7122a" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="url(#g1)" opacity="0.9"/>
            <path d="M12 6l1.5 4.5H18l-3.8 2.8 1.5 4.5L12 15l-3.7 2.8 1.5-4.5L6 10.5h4.5z" fill="url(#g1)"/>
          </svg>
        </div>
        {/* Orbit ring */}
        <div className="absolute inset-0 scale-150 rounded-full border border-primary/10 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#b7122a]" />
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-outline">
        <h2 className="text-xl font-extrabold text-center text-on-surface mb-1">Curating Your Experience</h2>
        <p className="text-sm text-secondary text-center mb-6">Our AI is analyzing thousands of local spots just for you.</p>
        <StepRow label="Filtering restaurants…"              state={filterState} />
        <StepRow label="Asking AI for personalised picks…"   state={aiState} />
        <StepRow label="Ranking and sorting results…"        state={rankState} />
      </div>

      {/* Fun fact */}
      <div className="mt-8 text-center max-w-sm">
        <div className="inline-flex items-center gap-1 bg-primary-light text-primary rounded-full px-3 py-1 text-xs font-bold mb-2">
          💡 Did you know?
        </div>
        <p className="text-sm text-secondary italic">&ldquo;{fact}&rdquo;</p>
      </div>
    </div>
  );
}
