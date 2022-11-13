import { SearchValidatorDirective } from './search-validator.directive';

describe('SearchValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new SearchValidatorDirective();
    expect(directive).toBeTruthy();
  });

  it('should return expected results', () => {
    const directive = new SearchValidatorDirective();
    expect(directive.validate({ value: 'test' } as any)).toBeNull();
    expect(directive.validate({ value: '' } as any)).toBeInstanceOf(Object);
    expect(directive.validate({  } as any)).toBeInstanceOf(Object);
  });
});
