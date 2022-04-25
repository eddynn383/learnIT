import { addClass } from '../functions/utils';
import '../assets/design/logo.scss';

const Logo = (o) => {
    const defClass = 'logo'
    const classes = addClass(defClass, o.class)
    const outerProps = {
        className: classes
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