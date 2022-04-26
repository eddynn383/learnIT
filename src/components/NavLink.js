import Text from './Text';
import Icon from './Icon';
import { Link, useMatch, useResolvedPath, } from 'react-router-dom';
import { addActive, addClass, classModifier } from '../functions/utils';

import '../assets/design/link.scss';

const NavLink = (o) => {
    const defaultClass = 'link'
    const resolved = useResolvedPath(o.to)
    const match = useMatch({ path: resolved.pathname, end: true })
    const classes = classModifier(defaultClass, o.class)
    const withActive = addActive(classes, 'active', match)

    return (
        <Link to={o.to} className={addClass(withActive)} >
            {o.iconBefore && <Icon value={o.iconBefore} />}
            {o.text && <Text type="inline">{o.text}</Text>}
            {o.iconAfter && <Icon value={o.iconAfter } />}
        </Link>
    )
}

export default NavLink