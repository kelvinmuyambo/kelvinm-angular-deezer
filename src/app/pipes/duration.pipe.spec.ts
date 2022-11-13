import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return expected returns', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(20)).toBe('00:20');
    expect(pipe.transform(120)).toBe('02:00');
    expect(pipe.transform(4800)).toBe('01:20:00');
  });
});
