import { CountPipe } from './count.pipe';

describe('CountPipe', () => {
  it('create an instance', () => {
    const pipe = new CountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return expected output', () => {
    const pipe = new CountPipe();
    expect(pipe.transform(1000)).toBe('1k');
    expect(pipe.transform(999)).toBe('999');
    expect(pipe.transform(1000)).toBe('1k');
    expect(pipe.transform(8000000)).toBe('8m');
    expect(pipe.transform(81000000000)).toBe('81b');
  });
});


