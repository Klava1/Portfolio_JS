const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Portfolio logo" />
      </div>
      <nav className="navbar" aria-label="Main navigation">
        <a
          href="#my_stack"
          className="nav-item"
          aria-label="Go to stack section"
        >
          STACK
        </a>
        <a
          href="#my_works"
          className="nav-item"
          aria-label="Go to works section"
        >
          MY WORKS
        </a>
        <a
          href="#contacts_form"
          className="nav-item"
          aria-label="Go to contacts section"
        >
          CONTACTS
        </a>
      </nav>
    </header>
  );
};

export default Header;

