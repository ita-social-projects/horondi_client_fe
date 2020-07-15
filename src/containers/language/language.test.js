import React from 'react';
import TestRenderer from 'react-test-render';
import Language from './language';

describe('test Language component', () => {
  const testRenderer = TestRenderer.create(<Language />);
  const testInstance = testRenderer.root;
  console.log(testInstance);
  it('should exist', () => {
    expect(testInstance).exists();
  });
});
