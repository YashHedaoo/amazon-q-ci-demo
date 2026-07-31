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
  return price - 10;
}
