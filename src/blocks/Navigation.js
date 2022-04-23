import Link from '../components/Link';
import useNavigation from '../hooks/useNavigation';
import '../assets/design/navigation.scss';

const Navigation = (o) => {
    const links = useNavigation()

    return (
        <nav className={o.class}>
            <ul>
                {
                    links.map((link, idx) => {
                        console.log(link)
                        return (
                            <li key={idx}>
                                <Link to={link.url} class={link.class} iconPos={link.iconPos} iconValue={link.iconValue} >{link.name}</Link>
                            </li>
                        )
                        
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation