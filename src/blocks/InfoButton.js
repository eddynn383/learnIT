import NavLink from "../components/NavLink";
import Button from "../components/Button";
import { addClass, classModifier } from '../functions/utils';
import '../assets/design/input.scss';

const InfoButton = (o) => {
    const defaultClass = 'button'
    const classes = classModifier(defaultClass, o.class)
    console.log(classes)

    const outerProps = {
        className: addClass(classes)
    }

    const innerProps = {
        to: o.url,
        class: o.class,
        id: o.id,
        type: o.type,
        'data-size': o.size,
        iconBefore: o.iconBefore,
        text: o.text,
        iconAfter: o.iconAfter
    }
    return (
        <div {...outerProps}>
            <span>99+</span>
            {
                o.url 
                ? <NavLink {...innerProps} />
                : <Button {...innerProps} />
            }

        </div>
    )
}

export default InfoButton