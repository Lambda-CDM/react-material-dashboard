require('normalize.css');
require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const githubButton = (
  <IconButton
    iconClassName="material-icons"
    href="https://github.com/lambdacdm/react-material-dashboard"
    linkButton={true}>
    code
  </IconButton>
);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme()
    });
  }

  toggleNavigation() {
    this.setState({open: !this.state.open});
  }

  render() {
    var navTitleStyle = {
      marginLeft: '-8px'
    };

    return (
      <div id="main">
        <AppBar
          title="React Material Dashboard"
          onLeftIconButtonTouchTap={this.toggleNavigation}
          iconElementRight={githubButton}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="RMD"
            showMenuIconButton={false}
            titleStyle={navTitleStyle}
          />
          <Link to="/home" onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/cards" onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Cards</MenuItem>
          </Link>
          <Link to="/table" onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Table</MenuItem>
          </Link>
        </Drawer>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Layout;
