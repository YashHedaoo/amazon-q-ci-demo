/**
 * Calculates promotional discount for EV rental bookings.
 * 
 * @param price Original base rental price
 * @param discountPercent Percentage discount to apply (e.g., 20 for 20%)
 * @returns Discounted total price
 */
export function calculateDiscount(price: number, discountPercent: number): number {
  if (price <= 0) return 0;
  
  // ⚠️ INTENTIONAL BUG FOR DEMO TESTING:
  // Developers wrote `price - 10` (subtracting flat $10) instead of calculating `price - (price * discountPercent / 100)`.
  // When testing $100 with 20% discount, code returns 90 instead of 80!
  return price - 10;
}
