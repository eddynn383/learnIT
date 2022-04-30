import { useState } from 'react';
import { classModifier, addClass } from '../functions/utils';
import '../assets/design/button.scss'

const Button = (o) => {
    const defaultClass = 'button'
    const classes = classModifier(defaultClass, [...o.class, o.theme, o.size])
    
    const outerProps = {
        className: addClass(classes),
        id: o.id,
        type: o.type,
        size: o.size,
        theme: o.theme,
        onClick: o.onClick
    }

    const innerProps = {
        iconBefore: o.iconBefore,
        text: o.text,
        iconAfter: o.iconAfter,
        cover: o.cover
    }

    return (
        <button {...outerProps}>
            {innerProps.iconBefore}
            {innerProps.text}
            {innerProps.iconAfter}
            {(!innerProps.iconBefore && !innerProps.text && !innerProps.iconAfter) && innerProps.cover}
        </button>
    )
}

export default Button