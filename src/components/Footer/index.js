import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <img src="./images/fb.png" alt="facebook icon" />
                <img src="./images/tw.png" alt="twitter icon" />
                <img src="./images/ig.png" alt="instagram icon" />
            </div>
            <img id="logo" src="./images/logo.png" />
            <span id="developed-by">Developed by Alura</span>
        </footer>
    );
}

export default Footer;