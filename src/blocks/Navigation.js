import { useState, useEffect } from 'react';
import NavLink from '../components/NavLink';
import useNavigation from '../hooks/useNavigation';
import { addClass, classModifier } from '../functions/utils';
import useAuth from '../hooks/useAuth';
import '../assets/design/navigation.scss';

const Navigation = (o) => {
    const { getDB, getSnapshot, currentUser } = useAuth()
    const [navigation, setNavigation] = useState()
    const getNavigation = async () => {
        try {       
            const links = await getDB('navigation', 'default')
            if (links.exists()) {
                setNavigation(links.data().main)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getNavigation()
    }, [])

    const defaultClass = 'nav'
    const classes = classModifier(defaultClass, o.class)

    return (
        <nav className={addClass(classes)}>
            <ul>
                {
                    navigation?.map((e, idx) => {
                        console.log(e)
                        return (
                            <li key={idx}>
                                <NavLink to={e.link} class={e.class} iconBefore={e.icon} text={e.title} />
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation