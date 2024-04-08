
import './navbar.css'


export const NavBar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="logo.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* Menu*/}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Talent Finder
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  For Recruiters
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  For Employers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Company
                </a>
              </li>
            </ul>
            <div class="d-grid gap-2 d-md-flex ">
              <button class="btn1 me-md-2" type="button">
                <span className="text1">Log In</span>
              </button>
              <button class="btn2 " type="button">
                <span className="text2">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}