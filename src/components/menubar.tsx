import React, { Component } from 'react'

import { Button, Container, Grid, Icon, Menu } from 'semantic-ui-react';

import { Link } from "react-router-dom";

import moment, { Moment } from 'moment';

import { Auth } from "aws-amplify";

type State = {};

type Props = {
  pathName: string;
}

class SideMenu extends Component<Props, State> {
  state = {
    activeItem: '',
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  getCurrentDate = () => {
    return moment().format("DDMMYYYY");
  }

  logout = async() => {
    await Auth.signOut({ global: true}).then(()=>{
      window.location.reload(false);
    })
  }

  render() {
    return (
      <div>
        <Grid padded className="tablet computer only">
          <Menu borderless fluid inverted size="huge">
            <Container>

              <Link to={`${this.props.pathName}/dailylisting/${this.getCurrentDate()}/lunch/Tembusu`}>
                <Menu.Item as='a' active={this.state.activeItem === 'dailylisting'}
                  onClick={() => this.setState({ activeItem: 'dailylisting' })}>
                  Daily Listing
                </Menu.Item>
              </Link>
              {/* <Link to={`${this.props.pathName}/hawker`}>
                <Menu.Item as='a' active={this.state.activeItem === 'hawker'}
                  onClick={() => this.setState({ activeItem: 'hawker' })}>
                  Hawker
                </Menu.Item>
              </Link> */}

              <Link to={`${this.props.pathName}/stall`}>
                <Menu.Item as='a' active={this.state.activeItem === 'store'}
                  onClick={() => this.setState({ activeItem: 'store' })}>
                  Stalls
                </Menu.Item>
              </Link>
              <Link to={`${this.props.pathName}/transactions/${this.getCurrentDate()}`}>
                <Menu.Item as='a' active={this.state.activeItem === 'transactions'}
                  onClick={() => this.setState({ activeItem: 'transactions' })}>
                  Transactions
                </Menu.Item>
              </Link>
              <Link to={'/dashboard/summary'}>
                <Menu.Item as='a' active={this.state.activeItem === 'summary'}
                  onClick={() => this.setState({ activeItem: 'summary' })}>
                  Order Summaries
                </Menu.Item>
              </Link>
              <Link to='/dashboard/newusers'>
              <Menu.Item as='a' active={this.state.activeItem === 'newuser'}
                  onClick={() => this.setState({activeItem: "newuser"})}>
                  New Users
                </Menu.Item>
              </Link>
              <Menu.Item position='right' as='a'
                onClick={this.logout}>
                Logout
              </Menu.Item>
            </Container>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless fluid inverted size="huge">
            <Menu.Item header as="a" href="/">
              Hawker Deliveries
          </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  inverted
                  basic
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              <Link to={`${this.props.pathName}/dailylisting/${this.getCurrentDate()}`}>
                <Menu.Item as="a">
                  Daily Listing
              </Menu.Item>
              </Link>
              <Link to={`${this.props.pathName}/hawker`}>
                <Menu.Item as="a">
                  Hawkers
              </Menu.Item>
              </Link>
              <Link to={`${this.props.pathName}/stall`}>
                <Menu.Item as='a' active={this.state.activeItem === 'store'}
                  onClick={() => this.setState({ activeItem: 'store' })}>
                  Stalls
                </Menu.Item>
              </Link>
              <Link to={`${this.props.pathName}/transactions/${this.getCurrentDate()}`}>
                <Menu.Item as='a' active={this.state.activeItem === 'transactions'}
                  onClick={() => this.setState({ activeItem: 'transactions' })}>
                  Transactions
                </Menu.Item>
              </Link>
              <Link to={'/dashboard/summary'}>
                <Menu.Item as='a' active={this.state.activeItem === 'summary'}
                  onClick={() => this.setState({ activeItem: 'summary' })}>
                  Order Summaries
                </Menu.Item>
              </Link>
              <Link to='/dashboard/newusers'>
              <Menu.Item as='a' active={this.state.activeItem === 'newuser'}
                  onClick={() => this.setState({activeItem: "newuser"})}>
                  New Users
                </Menu.Item>
              </Link>
              <Menu.Item position='right' as='a'
                onClick={this.logout}>
                Logout
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
      </div>
    )
  }
}

export default SideMenu;
