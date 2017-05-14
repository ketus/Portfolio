import React, { Component } from 'react';
import { Checkbox, Menu, Popup } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {

    let themeToggle = <Checkbox toggle defaultChecked/>;

    return (
      <Menu>
        <Menu.Item exact name='Home' as={NavLink} to="/" />
        <Menu.Item exact name='Blog' as={NavLink} to="/blog" />
        <Menu.Item exact name='Contact' as={NavLink} to="/contact" />

          <Menu.Item position='right'>
            <Popup trigger={themeToggle} content="Choose light or dark theme"/>
          </Menu.Item>

      </Menu>
    )
  }
}
