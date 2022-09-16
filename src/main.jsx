
import createElement from './core/createElement';

import { render } from './core/index';
import App from './App.jsx';

render(document.querySelector('#root'), (<App></App>))