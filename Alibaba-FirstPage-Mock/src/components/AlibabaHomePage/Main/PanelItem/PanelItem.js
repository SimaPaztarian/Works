import React, { Component } from 'react'
import '../Main.css'

export default class PanelItem extends Component {
    render() {
        const classes = this.props.active && 'active'
        return (
            <li className='search-item'>
                <a onClick={this.props.onClick} href="#" className={classes}>
                    <div className='svg-icon-wrapper'>
                        <img src={this.props.src} alt=''/>
                    </div>
                    <p>{this.props.txt}</p>
                </a>
            </li>
        )
    }
}
