'use strict';

import React    from 'react';

import Button   from './components/Button.jsx';
import ModalDialog    from './components/ModalDialog.jsx';

import LIVR     from 'livr';

import './App.less';

LIVR.Validator.defaultAutoTrim(true);

const App = React.createClass({

    getInitialState() {
        return {
            isModalVisible: false
        };
    },

    toggleModalVisibility() {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
        this.forceUpdate();
    },

    render() {
        return <div className="App container">
                    <h2>Test project for SellerCrowd</h2>
                    <p><b>Task:</b> 25070 </p>
                    <p><b>Design:</b> https://app.zeplin.io/project.html#pid=55ef71750324c30016019c4a&sid=55ef7188c31dcc7d3197d16c</p>
                    <Button handleClick = { this.toggleModalVisibility }
                            type        = 'default'
                            value       = 'Modal button' />
                    <ModalDialog showModal   = { this.state.isModalVisible }
                                 handleClick = { this.toggleModalVisibility } />
               </div>;
    }
});

export default App;
