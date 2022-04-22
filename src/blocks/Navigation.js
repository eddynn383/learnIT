import React from 'react';
import Link from '../components/Link';
import useNavigation from '../hooks/useNavigation';

const Navigation = (o) => {
    const navLinks = useNavigation()

    console.log(navLinks)
    return (
        <nav>
            <ul>
                {
                    navLinks.map((navLink, idx) => {
                        console.log(navLink)
                        navLink && (
                            <li>
                                <Link to={navLink.url} class={navLink.class}>{navLink.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation