export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#800020" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold" href="#">
          Nuestra API
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
