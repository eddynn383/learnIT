import { addClass } from '../functions/utils';
import '../assets/design/cover.scss';

const Cover = (o) => {
    const defClass = 'cover'
    const classes = addClass(defClass, o.class)

    const outerProps = {
        className: classes,
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