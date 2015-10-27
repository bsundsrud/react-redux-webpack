import 'babel-core/polyfill';
import Main from './components/Main';
import React from 'react';
import { render } from 'react-dom';
import './styles';

render(<Main/>, document.getElementById('root'));
