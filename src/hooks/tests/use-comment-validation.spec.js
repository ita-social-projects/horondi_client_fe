import { useFormik } from 'formik';
import useCommentValidation from '../use-comment-validation';

jest.mock('formik');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [true, () => null]
}));

const mockSubmit = jest.fn();
const mockChange = jest.fn();
const mockBlur = jest.fn();
const mockSetFieldValue = jest.fn();
const mockReset = jest.fn();

const formik = {
  values: {},
  handleSubmit: mockSubmit,
  handleChange: mockChange,
  handleBlur: mockBlur,
  errors: {},
  setFieldValue: mockSetFieldValue,
  resetForm: mockReset
};

useFormik.mockImplementation(() => formik);

describe('use-comments-validation tests', () => {
  it('should return expected result with true', () => {
    const result = useCommentValidation(false, () => {}, '123');
    expect(result).toBeTruthy();
  });
});
