'use client';
import { motion } from 'framer-motion';
import type { RecommendationItem } from '@/lib/types';

interface Props {
  item: RecommendationItem;
  index: number;
  isFallback: boolean;
}

export default function RestaurantCard({ item, index, isFallback }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-3xl p-5 shadow-sm border border-outline mb-4"
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extrabold flex-shrink-0">
            {index + 1}
          </div>
          <span className="text-base font-extrabold text-on-surface">{item.restaurant_name}</span>
          {isFallback && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
              Ranked by ★
            </span>
          )}
        </div>
        <span className="bg-primary-light text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-2">
          {item.cuisine}
        </span>
      </div>

      {/* Metrics */}
      <div className="flex items-center gap-5 mb-3 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-base">★</span>
          <span className="font-bold text-on-surface">{item.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1 text-secondary">
          Cost for two
          <span className="font-bold text-on-surface ml-1">₹{item.estimated_cost.toLocaleString()}</span>
        </div>
      </div>

      {/* AI explanation */}
      <div className={`flex gap-2 items-start rounded-r-2xl rounded-bl-2xl p-3 ${
        isFallback
          ? 'bg-yellow-50 border-l-4 border-yellow-400'
          : 'border-l-4 border-primary'
      }`}
           style={ isFallback ? {} : { background: 'linear-gradient(135deg,rgba(183,18,42,0.04),rgba(126,34,206,0.04))' }}>
        {!isFallback && (
          <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0 mt-0.5"
                style={{ background: 'linear-gradient(135deg,#b7122a,#7e22ce)' }}>✦ AI</span>
        )}
        {isFallback && <span className="text-sm flex-shrink-0">📊</span>}
        <p className="text-sm text-secondary italic leading-relaxed">{item.explanation}</p>
      </div>
    </motion.div>
  );
}
