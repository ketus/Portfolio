import React, {Component} from 'react';
import {Checkbox, Menu, Popup} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  menu: {
    width: 250 + 'px',
    height: 100 + '%',
    backgroundColor: '#000',
    boxShadow: '5px 0 35px grey',
  },
});

export default class MainMenu extends Component {
  render() {
    const themeToggle = <Checkbox toggle defaultChecked />;

    return (
        <Menu inverted vertical fixed="left"
              className={css(styles.menu)}>

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

