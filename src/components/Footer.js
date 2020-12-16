import { makeYear } from '../utilities/dateMaker';

const Footer = () => (
    <footer>
        <p>&copy; {makeYear()} matt hildebrand + skye yang | for educational purposes only</p>
    </footer>
);

export default Footer;