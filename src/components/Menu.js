import React, {Component} from 'react';
import {Checkbox, Menu, Popup} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite';

import Avatar from './Avatar';

const styles = StyleSheet.create({
  menu: {
    width: 250 + 'px',    
    boxShadow: '5px 0 50px grey',
  },
});

export default class MainMenu extends Component {
  render() {

    return (
        <Menu inverted vertical
              fixed="left"
              className={css(styles.menu)}
              size="huge"
              color="black">

          <Menu.Item exact name='Home' as={NavLink} to="/" />
          <Menu.Item exact name='Blog' as={NavLink} to="/blog" />
          <Menu.Item exact name='Contact' as={NavLink} to="/contact" />

          <Menu.Item position='right' >
            <Checkbox toggle defaultChecked />
          </Menu.Item>

        </Menu>
    );
  }
}
