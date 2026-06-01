import { api } from '../lib/api';

const mockFetch = jest.fn();
global.fetch = mockFetch;

function mockOk(data: unknown) {
  mockFetch.mockResolvedValueOnce({ ok: true, json: async () => data });
}

describe('api client', () => {
  afterEach(() => jest.clearAllMocks());

  it('health() calls /health and returns data', async () => {
    const payload = { status: 'ok', catalog_size: 41410, groq_configured: true, mock_mode: false };
    mockOk(payload);
    const result = await api.health();
    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/health'), expect.any(Object));
    expect(result.catalog_size).toBe(41410);
  });

  it('cities() calls /cities and returns list', async () => {
    mockOk({ cities: ['Bangalore', 'Delhi'] });
    const result = await api.cities();
    expect(result.cities).toContain('Bangalore');
  });

  it('cuisines() calls /cuisines and returns list', async () => {
    mockOk({ cuisines: ['North Indian', 'Italian'] });
    const result = await api.cuisines();
    expect(result.cuisines).toContain('North Indian');
  });

  it('recommendations() POSTs and returns response', async () => {
    const payload = {
      request_id: 'abc', recommendations: [], summary: null,
      filter_code: 'OK', rec_code: 'OK', used_fallback: false,
      hints: [], latency_ms: 100, shortlist_size: 10,
    };
    mockOk(payload);
    const result = await api.recommendations({
      location: 'Bangalore', budget: 'medium', cuisine: 'North Indian',
      min_rating: 4.0, extras: [], max_recommendations: 5,
    });
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('/recommendations'),
      expect.objectContaining({ method: 'POST' }),
    );
    expect(result.filter_code).toBe('OK');
  });

  it('throws on non-ok response', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 422, json: async () => ({ detail: 'bad' }) });
    await expect(api.recommendations({
      location: '', budget: 'medium', cuisine: 'X',
      min_rating: 0, extras: [], max_recommendations: 5,
    })).rejects.toThrow();
  });
});
