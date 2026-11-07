// Hosting-rate helpers: a tiny module for the harness acceptance demo.

/** kWh for `watts` drawn over `hours`. */
export function energyKwh(watts, hours) {
  if (!(watts >= 0) || !(hours >= 0)) throw new RangeError('watts and hours must be non-negative numbers');
  return (watts * hours) / 1000;
}

/** Dollars for `kwh` at `rateCentsPerKwh`, rounded to the cent. */
export function energyCost(kwh, rateCentsPerKwh) {
  if (!(kwh >= 0) || !(rateCentsPerKwh >= 0)) throw new RangeError('kwh and rate must be non-negative numbers');
  return Math.round(kwh * rateCentsPerKwh) / 100;
}
