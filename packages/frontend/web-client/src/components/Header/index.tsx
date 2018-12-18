import { Avatar, ButtonLink, Container, Topbar } from "design-system";
import { AccountMenu, ProfileSearch } from "domain-model";
import { Authenticated, Unauthenticated } from "domain-model";
import React from "react";
import { Link } from "react-router-dom";
import GitHub from "./GitHub.png";
import "./index.css";

export default class Header extends React.Component {
  public render () {
    return (
      <Topbar className="Header">
        <Container>
          <Link
            className="logo"
            to="/"
          >
            Social Network
          </Link>
          {this.renderMenuItems()}
        </Container>
      </Topbar>
    );
  }

  private renderMenuItems () {
    return (
      <div className="items">
        <Authenticated>
          <ProfileSearch />
          <AccountMenu />
        </Authenticated>
        <Unauthenticated>
          <ButtonLink to="/login">
            Login
          </ButtonLink>
          <ButtonLink to="/signup">
            Signup
          </ButtonLink>
        </Unauthenticated>
        <a href="https://github.com/davidchristie/social-network">
          <Avatar image={GitHub} />
        </a>
      </div>
    );
  }
}
