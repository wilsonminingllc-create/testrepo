import assert from 'node:assert/strict';
import { test } from 'node:test';
import { energyCost, energyKwh } from '../src/pricing.js';

test('energyKwh converts watt-hours to kWh', () => {
  assert.equal(energyKwh(3500, 24), 84);
  assert.equal(energyKwh(0, 10), 0);
  assert.throws(() => energyKwh(-1, 1), RangeError);
});

test('energyCost rounds to the cent', () => {
  assert.equal(energyCost(84, 7.5), 6.3);
  assert.equal(energyCost(1, 7.333), 0.07);
  assert.throws(() => energyCost(1, -1), RangeError);
});
