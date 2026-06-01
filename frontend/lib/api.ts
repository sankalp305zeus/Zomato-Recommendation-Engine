import type {
  CitiesResponse,
  CuisinesResponse,
  HealthResponse,
  RecommendationRequest,
  RecommendationResponse,
} from './types';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

async function post<TBody, TRes>(path: string, body: TBody): Promise<TRes> {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error(JSON.stringify(detail));
  }
  return res.json() as Promise<TRes>;
}

export const api = {
  health:          () => get<HealthResponse>('/health'),
  cities:          () => get<CitiesResponse>('/cities'),
  cuisines:        () => get<CuisinesResponse>('/cuisines'),
  recommendations: (body: RecommendationRequest) =>
    post<RecommendationRequest, RecommendationResponse>('/recommendations', body),
};
