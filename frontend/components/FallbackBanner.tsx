'use client';
export default function FallbackBanner() {
  return (
    <div className="flex items-center gap-3 bg-amber-50 border border-amber-300 rounded-2xl px-4 py-3 mb-4 text-sm text-amber-800">
      <span className="text-lg">⚠️</span>
      <span className="font-medium">
        AI is taking a break — showing top matches ranked by rating instead.
      </span>
    </div>
  );
}
