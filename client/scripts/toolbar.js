var Navbar = ReactBootstrap.Navbar,
NavBrand = ReactBootstrap.NavBrand,
Nav = ReactBootstrap.Nav,
NavItem = ReactBootstrap.NavItem;

const navbarInstance = (
  <Navbar className="navBarDark">
    <NavBrand><a href="#">Skeleton</a></NavBrand>
    <Nav>
      <NavItem className="navigationLink" eventKey={1} href="/images.html">Images</NavItem>
      <NavItem className="navigationLink" eventKey={2} href="/about.html">About</NavItem>
    </Nav>
  </Navbar>
);

ReactDOM.render(navbarInstance,
  document.getElementById('navigationBar')
);