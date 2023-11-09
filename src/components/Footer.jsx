import React from "react";
import github from '/Images/Github_Logo.png';
import linkedin from '/Images/Linkedin.png';
import '../components/styles/Footer.css'


function Footer() {
    return (
        <footer className=" footer text-center text-lg-start">

            <div className="container d-flex justify-content-center">
                <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
                    <a href="https://www.linkedin.com/in/davidtrieu1/" target="_blank" rel="noreferrer">
                        <img src={linkedin} height="55px" width="55px" alt="Linkedin Profile" />
                    </a>
                </button>
                <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <a href="https://github.com/Dtrieu1/" target="_blank" rel="noreferrer">
                        <img src={github} height="55px" width="55px" alt="Github Profile" />
                    </a>
                </button>
            </div>
        </footer>

    );
}
export default Footer;