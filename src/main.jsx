
import createElement from './core/createElement';

import { render } from './core/index';
import App from './App.jsx';

const root = document.querySelector('#root');

const list = ['Tryact', 'Tryvue', 'Tryvue'];

render(root, (
    <div>
        <h3>Welcome to tryact!!!</h3>
        <ul onClick={() => {console.log(list)}}>
            {
                list.map(item => (<li>{item}</li>))
            }
        </ul>
    </div>
))