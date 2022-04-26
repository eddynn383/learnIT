import Text from './Text';
import Icon from './Icon';
import { classModifier, addClass } from '../functions/utils';
import '../assets/design/button.scss'

const Button = (o) => {
    const defaultClass = 'button'
    const classes = classModifier(defaultClass, o.class)
    
    const outerProps = {
        className: addClass(classes),
        id: o.id,
        type: o.type,
        'data-size': o.size
    }

    return (
        <button {...outerProps}>
            {o.iconBefore && <Icon value={o.iconBefore} />} 
            {o.text && <Text type="inline">{o.text}</Text>}   
            {o.iconAfter && <Icon value={o.iconAfter} />} 
        </button>
    )
}

export default Button