import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

describe('testing Navbar component', () => {
  test('Navbar renders correctly', () => {
    const tree = renderer.create(
    <Router>
      <Navbar/>
    </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})