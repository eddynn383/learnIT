import { addClass, classModifier } from '../functions/utils';
import '../assets/design/logo.scss';

const Logo = (o) => {
    const defaultClass = 'logo'
    const classes = classModifier(defaultClass, o.class)
    const outerProps = {
        className: addClass(classes)
    }
    const innerProps = {
        src: o.url,
        alt: o.alt,
        style: o.style
    }
    
    return (
        <>
            <div {...outerProps}>
                <img {...innerProps} />
            </div>
        </>
    )
}

export default Logo