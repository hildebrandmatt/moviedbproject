import { makeYear } from '../utilities/dateMaker';

const Footer = () => (
    <footer>
        <p>&copy; {makeYear()} Matt Hildebrand and Skye Yang</p>
    </footer>
);

export default Footer;