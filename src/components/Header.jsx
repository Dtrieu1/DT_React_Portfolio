// Here we are importing a CSS file as a dependency
import '../components/styles/Header.css'

function Header() {
    return (
        <header className="header">
            <div class="container-fluid banner">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar">
                            <div class="navbar-brand">
                                David Trieu
                            </div>
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Portfolio">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="Contact">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="Resume">Resume</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;