'use client';
interface Props { hints: string[]; onReset: () => void; }

export default function EmptyState({ hints, onReset }: Props) {
  return (
    <div className="flex flex-col items-center py-16 px-4 text-center">
      <div className="text-6xl mb-4">🍽️</div>
      <h2 className="text-xl font-extrabold text-on-surface mb-2">No restaurants matched your preferences</h2>
      <p className="text-secondary text-sm mb-6">Try adjusting your filters using the suggestions below.</p>
      {hints.length > 0 && (
        <div className="space-y-2 mb-8 max-w-md w-full">
          {hints.map((h, i) => (
            <div key={i} className="bg-blue-50 border border-blue-200 rounded-2xl px-4 py-3 text-sm text-blue-800 text-left">
              💡 {h}
            </div>
          ))}
        </div>
      )}
      <button onClick={onReset}
        className="px-6 py-2.5 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary-light transition-all">
        ← Adjust preferences
      </button>
    </div>
  );
}
