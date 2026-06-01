export type Budget = 'low' | 'medium' | 'high';

export interface RecommendationRequest {
  location: string;
  budget: Budget;
  cuisine: string;
  min_rating: number;
  extras: string[];
  max_recommendations: number;
}

export interface RecommendationItem {
  restaurant_name: string;
  cuisine: string;
  rating: number;
  estimated_cost: number;
  explanation: string;
}

export interface RecommendationResponse {
  request_id: string;
  recommendations: RecommendationItem[];
  summary: string | null;
  filter_code: string;
  rec_code: string;
  used_fallback: boolean;
  hints: string[];
  latency_ms: number;
  shortlist_size: number;
}

export interface HealthResponse {
  status: string;
  catalog_size: number;
  groq_configured: boolean;
  mock_mode: boolean;
}

export interface CitiesResponse  { cities: string[]; }
export interface CuisinesResponse { cuisines: string[]; }
