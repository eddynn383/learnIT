import NavLink from '../components/NavLink';
import useNavigation from '../hooks/useNavigation';
import { addClass } from '../functions/utils';
import '../assets/design/navigation.scss';

const Navigation = (o) => {
    const links = useNavigation()
    const defClass = 'nav'
    const classes = addClass(defClass, o.class)

    return (
        <nav className={classes}>
            <ul>
                {
                    links.map((link, idx) => {
                        console.log(link)
                        return (
                            <li key={idx}>
                                <NavLink to={link.url} class={link.classes} iconBefore={link.iconBefore} text={link.text} />
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation