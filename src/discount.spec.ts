import { calculateDiscount } from './discount';

describe('Promotional Discount Engine', () => {
  it('should return 0 for non-positive prices', () => {
    expect(calculateDiscount(0, 20)).toBe(0);
    expect(calculateDiscount(-50, 10)).toBe(0);
  });

  it('should calculate 20% discount on $100 correctly (FAILING TEST CASE FOR DEMO)', () => {
    // 💡 EXPECTED: $100 with 20% discount = $80.
    // ❌ ACTUAL OUTPUT: discount.ts returns 90 (due to price - 10 bug).
    // This assertion will fail, causing CI to exit 1 and trigger Amazon Q AI diagnosis!
    const result = calculateDiscount(100, 20);
    expect(result).toBe(80);
  });
});
