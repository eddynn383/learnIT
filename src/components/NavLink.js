import Text from './Text';
import Icon from './Icon';
import { Link, useMatch, useResolvedPath, } from 'react-router-dom';
import { covertClasses } from '../functions/utils';

import '../assets/design/link.scss';

const NavLink = (o) => {
    const resolved = useResolvedPath(o.to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const classes = covertClasses(o.class, true, 'active', match);

    return (
        <Link to={o.to} className={classes} >
            {o.iconBefore && <Icon value={o.iconBefore} />}
            {o.text && <Text type="inline">{o.text}</Text>}
            {o.iconAfter && <Icon value={o.iconAfter } />}
        </Link>
    )
}

export default NavLink