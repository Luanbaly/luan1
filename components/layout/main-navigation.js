import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
    return (
    <header className={classes.header}>
        <Link href='/'>
            <a>
            <Logo />
            </a>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/posts">POST</Link>
                    </li>
                <li>
                    <Link href="/contact">LIKE</Link>
                    </li>
                    <li>
                    <Link href="/contact">SUB</Link>
                    </li>
            </ul>
        </nav>
    </header>
    )};

export default MainNavigation;