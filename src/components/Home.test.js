import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home.js';

describe ('Checking home deployment', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
