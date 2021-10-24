import { handleHelperText } from './handle-recovery-page';

describe('Handle recovery utils tests', () => {
  it('Should return expected result', () => {
    const result = handleHelperText('Email error message', '');

    expect(result).toBe('Email error message');
  });

  it('Should return expected result', () => {
    const result = handleHelperText('', 'USER_NOT_FOUND');

    expect(result).toBeUndefined();
  });

  it('Should return expected result', () => {
    const result = handleHelperText('', '');

    expect(result).toBeNull();
  });
});
