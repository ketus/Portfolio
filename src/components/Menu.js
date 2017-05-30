import React, {Component} from 'react';
import {Checkbox, Menu, Popup} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export class MainMenu extends Component {
  render() {
    const style = {
      // position: fixed,
      width: 200,
      height: '100%',
      background: '#000',
      boxShadow: '5px 0 35px grey',
    };

    const themeToggle = <Checkbox toggle defaultChecked />;

    return (
        <Menu inverted vertical fixed="left" style={style}>

          <Menu.Item exact name='Home' as={NavLink} to="/" />
          <Menu.Item exact name='Blog' as={NavLink} to="/blog" />
          <Menu.Item exact name='Contact' as={NavLink} to="/contact" />

            <Menu.Item position='right'>
              <Popup trigger={themeToggle} content="Choose light or dark theme"/>
            </Menu.Item>

        </Menu>
    );
  }
}
