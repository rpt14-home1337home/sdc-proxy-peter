import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

// const React = require('react');
// const Enzyme = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');

// Enzyme.configure({ adapter: new Adapter() });

// global.React = React;
// global.shallow = Enzyme.shallow;
// global.render = Enzyme.render;
// global.mount = Enzyme.mount;