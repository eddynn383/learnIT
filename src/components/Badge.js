import { addClass, classModifier } from '../functions/utils';
import '../assets/design/badge.scss'

const Badge = (o) => {
    const defaultClass = 'badge'
    const size = o.size
    const classes = classModifier(defaultClass, [...o?.class, o?.size])
    const text = o.maxValue ? (o.value > o.maxValue ? `${o.maxValue}+` : o.value) : o.value

    const outerProps = {
        className: addClass(classes),
        maxvalue: o.maxValue,
        size: size,
        title: o.title,
    }

    if (o.value <= 0) {
        return null;
    }

    return (
        <span {...outerProps}>{text}</span>
    )
}

export default Badge