import { renderHook } from '@testing-library/react-hooks';
import useDebounce from '../use-debounce';

jest.spyOn(global, 'setTimeout');

describe('use-debounce testing', () => {
  const fakeValue = 'value';
  const delay = 100;

  it('shoud return value after delay', () => {
    const { result } = renderHook(() => useDebounce(fakeValue, delay));
    expect(setTimeout).toHaveBeenCalled();
    expect(result.current).toBe(fakeValue);
  });
});
