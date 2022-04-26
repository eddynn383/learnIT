import { addClass, classModifier } from '../functions/utils';
import '../assets/design/cover.scss';

const Cover = (o) => {
    const defaultClass = 'cover'
    const classes = classModifier(defaultClass, o.class)

    const outerProps = {
        className: addClass(classes),
        'data-type': o.type,
        'data-size': o.size,
    }

    const innerProps = {
        src: o.url,
        alt: o.alt,
        style: o.style
    }

    return (
        <div {...outerProps}>
            <img {...innerProps} />
        </div>
    )
}

export default Cover