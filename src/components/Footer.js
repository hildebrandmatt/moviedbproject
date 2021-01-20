import { makeYear } from '../utilities/dateMaker';

const Footer = () => (
    <footer>
        <p>&copy; {makeYear()} | created by <a href="http://mhildebrand.bcitwebdeveloper.ca/">matt hildebrand</a> + <a href="http://skyeyang.bcitwebdeveloper.ca">skye yang</a> | for educational purposes only</p>
    </footer>
);

export default Footer;