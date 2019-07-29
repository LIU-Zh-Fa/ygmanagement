import React, { Component } from 'react';
import '@static/font/iconfont.css'
import {Icon} from "./styled"
console.log(Icon)
class IconFont extends Component {
    render() {
        let {type} = this.props;
        return (
            <Icon className={"iconfont " + type}></Icon>
        );
    }
}

export default IconFont;