import { addClass, classModifier } from '../functions/utils';

const Form = (o) => {
    const defaultClass = 'form'
    const classes = classModifier(defaultClass, o.class)
    const outerProps = {
        className: addClass(classes),
        style: o.style,
        onSubmit: o.onSubmit
    }
    return (
        <form {...outerProps}>
            {o.children}
        </form>
    )
}

export default Form