function Footer() {

    return (
        <div>
            <div className="container footerContainer">
                <div className="footerIcons">
                    <a href="https://github.com/Dtrieu1/" target="_blank" rel="noreferrer">
                        <img src={gitHub192} height="50px" width="50px" alt="Github Profile" />
                    </a>
                    <a href="https://www.linkedin.com/in/davidtrieu1/" target="_blank" rel="noreferrer">
                        <img src={linkedIn192} height="50px" width="50px" alt="Linkedin Profile" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer;