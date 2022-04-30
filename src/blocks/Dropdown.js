import { useState } from "react";
import Button from "../components/Button";
import { addClass, addActive, classModifier } from '../functions/utils';
import '../assets/design/input.scss';

const Dropdown = (o) => {
    const [active, setActive] = useState(false)
    const defaultClass = 'dropdown'
    const classes = classModifier(defaultClass, o.class)
    const withActive = addActive(classes, 'active', active)

    const outerProps = {
        className: addClass(withActive)
    }

    const innerProps = {
        class: o.class,
        size: o.size,
        type: o.type,
        iconBefore: o.iconBefore,
        text: o.text,
        iconAfter: o.iconAfter,
        cover: o.cover
    }

    const handleButton = (e) => {
        e.preventDefault()
        setActive(!active)
    }
    return (
        <div {...outerProps}>
            <Button {...innerProps} onClick={handleButton}/>
            {active && <div className={`${defaultClass} ${defaultClass}--content`}>{o.content}</div>}
        </div>
    )
}

export default Dropdown