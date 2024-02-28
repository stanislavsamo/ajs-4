import healthStatus from './healthStatus';

describe('healthStatus function', () => {
  it('should return "healthy" if health is more than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(healthStatus(character)).toBe('healthy');
  });

  it('should return "wounded" if health is between 50 and 15 (inclusive)', () => {
    const character = { name: 'Маг', health: 30 };
    expect(healthStatus(character)).toBe('wounded');
  });

  it('should return "critical" if health is less than 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(healthStatus(character)).toBe('critical');
  });
});