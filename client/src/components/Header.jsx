import logo from './assets/logo.png';

const Header = () => {
  return (
    <div className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <span>ProjectMgmt</span>
          </div>
        </a>
        Header
      </div>
    </div>
  );
};

export default Header;
