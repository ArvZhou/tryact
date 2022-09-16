import createElement from './core/createElement';

import { Component } from './core/index';

export default class App extends Component {
    state = {
        list: ['Tryact', 'Tryvue', 'Tryvue']
    }

    render() {
        const { list } = this.state;

        return (
            <div>
                <h3>Welcome to tryact!!!</h3>
                <ul onClick={() => {console.log(list)}}>
                    {
                        list.map(item => (<li>{item}</li>))
                    }
                </ul>
            </div>
        )
    }

    constructor() {
        super();
    
        setTimeout(() => {
            this.setState({
                list :['Tryact', 'Tryvue', 'Tryredux', 'trypack', 'trytemplate']
            });
        }, 3000)
    }
}