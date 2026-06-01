'use client';
import type { HealthResponse } from '@/lib/types';

interface Props { health: HealthResponse | null; }

export default function Header({ health }: Props) {
  const groqBadge = health?.mock_mode
    ? { label: '⚠ Offline mode', cls: 'bg-yellow-100 text-yellow-800' }
    : health?.groq_configured
    ? { label: '✓ AI ready',     cls: 'bg-green-100  text-green-800'  }
    : { label: '✗ No API key',   cls: 'bg-red-100    text-red-800'    };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-surface/80 backdrop-blur-md border-b border-outline shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🍽️</span>
        <span className="font-extrabold text-xl bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">
          Zomato AI Recommends
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold">
        {health && (
          <span className="bg-primary-light text-primary px-3 py-1 rounded-full">
            🍴 {health.catalog_size.toLocaleString()} restaurants
          </span>
        )}
        <span className={`px-3 py-1 rounded-full ${groqBadge.cls}`}>
          {groqBadge.label}
        </span>
      </div>
    </nav>
  );
}
