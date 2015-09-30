'use strict';

import React from 'react';

import './Button.less';

const Button = React.createClass({
    handleClick() {
        if (this.props.handleClick) {
            this.props.handleClick();
        }
    },

    render() {
        return (
            <button className   = { "Button btn btn-" + this.props.type || "default" }
                    type        = "button"
                    onClick     = { this.handleClick }>
                { this.props.value }
            </button>
        );
    }
});

export default Button;
