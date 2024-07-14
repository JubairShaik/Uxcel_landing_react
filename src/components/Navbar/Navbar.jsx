/* eslint-disable react/prop-types */

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-logo">
          <a className="" href="/">
            <img
              src="./images/logo.svg"
              className="header-logo-img"
              alt="Logo"
            />
          </a>
        </div>
        <div className="header-inner">
          <div className="header-menu"> 

            <div className="header-menu-sections">
              <DropdownMenu
                title="Product"
                listClass="header-dropdown-list-right1"
              >
                <DropdownLink
                  href="/"
                  title="Learn"
                  description="Improve design skills with interactive design courses & lessons"
                />
                <DropdownLink
                  href="/"
                  title="Test"
                  description="Measure design skills with interactive assessments"
                />
                <DropdownLink
                  href="/"
                  title="Practice"
                  description="Build design skills with real-world design exercisese"
                />
                <div className="header-dropdown-divider"></div>
                <DropdownLink
                  href="/"
                  title="UX Certifications"
                  description="Earn globally-recognized design certifications"
                />
              </DropdownMenu>

              <DropdownMenu
                title="Resources"
                listClass="header-dropdown-list-right2"
              >
                <DropdownLink
                  href="/"
                  title="Blog"
                  description="News, ideas & insights on design"
                />
                <DropdownLink
                  href="/"
                  title="Designer Stories"
                  description="Learn how Uxcel has changed lives"
                />
                <DropdownLink
                  href="/"
                  title="Guides"
                  description="Inspiring guides on all things design"
                />
                <DropdownLink
                  href="/"
                  title="Salary Explorer"
                  description="Discover designer salaries worldwide"
                />
                <DropdownLink
                  href="/"
                  title="UX Design Glossary"
                  description="Every design term in one place"
                />
                <div className="header-dropdown-divider"></div>
                <DropdownLink
                  href="/"
                  title="Help Center"
                  description="Advice & answers from Uxcel"
                />
                <DropdownLink
                  href="/"
                  title="Slack Community"
                  description="Connect with Uxcelers worldwide"
                />
              </DropdownMenu>

              <a href="/" className="header-link">
                Pricing
              </a>
            </div>


            <div className="header-divider"></div>
            <a href="/" className="header-switch-link">
              For Teams
            </a>
          </div>
          <div className="header-btns">
            <a href="/auth" className="btn login">
              Log In
            </a>
            <a href="/" className="btn primary-btn">
              Start for free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const DropdownMenu = ({ title, children, listClass }) => {
  return (
    <div className="header-dropdown">
      <div className="header-dropdown-toggle">
        <div>{title}</div>
      </div>
      <div className={`header-dropdown-list ${listClass}`}>{children}</div>
    </div>
  );
};

const DropdownLink = ({ href, title, description }) => {
  return (
    <a className="header-dropdown-link" href={href}>
      <div className="header-dropdown-link-title">{title}</div>
      <div>{description}</div>
    </a>
  );
};

export default Navbar ;
