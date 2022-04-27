import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { addClass, classModifier } from '../functions/utils';
import '../assets/design/icon.scss';

const Icon = (o) => {
    const defaultClass = 'icon'
    const classes = classModifier(defaultClass, o.class)
    const outerProps = {
        className: addClass(classes)
    }
    const innerProps = {
        icon: fas[o.value],
        size: o.size
    }
    return (
        <span {...outerProps}>
            {o.badge}
            <FontAwesomeIcon {...innerProps} />
        </span>
    )
}

export default Icon
