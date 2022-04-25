import Text from './Text';
import Icon from './Icon';
import { addClass } from '../functions/utils';
import '../assets/design/button.scss'

const Button = (o) => {
    const defClass = 'button'
    const classes = addClass(defClass, o.className)
    
    const outerProps = {
        className: classes,
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