import React from "react";
import github from '../../public/Images/Github_Logo.png';
import linkedin from '../../public/Images/Linkedin.png';
import '../components/styles/Footer.css'


function Footer() {
    return (
        // <div>
        //     <div className="footer">
        //         <div>
        //             <a href="https://github.com/Dtrieu1/" target="_blank" rel="noreferrer">
        //                 <img src={github} height="55px" width="85px" alt="Github Profile" />
        //             </a>
        //             <a href="https://www.linkedin.com/in/davidtrieu1/" target="_blank" rel="noreferrer">
        //                 <img src={linkedin} height="55px" width="55px" alt="Linkedin Profile" />
        //             </a>
        //         </div>
        //     </div>
        // </div>

        <footer class=" footer text-center text-lg-start">

            <div class="container d-flex justify-content-center">
                <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
                    <a href="https://www.linkedin.com/in/davidtrieu1/" target="_blank" rel="noreferrer">
                        <img src={linkedin} height="55px" width="55px" alt="Linkedin Profile" />
                    </a>
                </button>
                <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
                    <a href="https://github.com/Dtrieu1/" target="_blank" rel="noreferrer">
                        <img src={github} height="55px" width="55px" alt="Github Profile" />
                    </a>
                </button>
            </div>
        </footer>

    );
}
export default Footer;