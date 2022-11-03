import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Checking if Quote deploy correctly', () => {
  test('if Calculator renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
