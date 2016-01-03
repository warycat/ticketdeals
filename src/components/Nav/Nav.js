import React, { Component, PropTypes } from 'react';
import Link from '../Link';
import cx from 'classnames';
import s from './Nav.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class Nav extends Component{
  constructor(){
    super();
    this.state = {currentPath:'/'};
  }

  setPath(e){
    this.state.currentPath = e.currentTarget.pathname;
    Link.handleClick(e);
  }

  render(){
    return(
      <div data-collapse="medium" data-animation="default" data-duration="400" data-contain="1" className="w-nav navigation-bar">
        <div className="w-container">
          <a href="/index" className="w-nav-brand brand-link" onClick={this.setPath.bind(this)}>
            <h1 className="brand-text">Ticket Deals</h1>
          </a>
          <nav role="navigation" className="w-nav-menu navigation-menu">
            <a href="/index" className={cx("w-nav-link navigation-link", {"w--current":this.state.currentPath.match('/index')})} onClick={this.setPath.bind(this)}>INVENTORY</a>
            <a href="/checkout" className={cx("w-nav-link navigation-link", {"w--current":this.state.currentPath.match('/checkout')})} onClick={this.setPath.bind(this)}>CHECKOUT<span className={s.badge}>4</span>
              </a>
          </nav>
          <div className="w-nav-button hamburger-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    );
  }
}


export default Nav;
