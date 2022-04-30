import { addClass, classModifier } from '../functions/utils';
import '../assets/design/input.scss';

const Input = (o) => {
    const defaultContainerClass = 'input-group'
    const containerClasses = classModifier(defaultContainerClass, o.class)
    const defaultInputClass = 'input'
    const inputClasses = classModifier(defaultInputClass, o.class)

    const outerProps = {
        className: addClass(containerClasses)
    }

    const innerProps = {
        container: {
            className: addClass(inputClasses)
        },
        input: {
            id: o.id,
            type: o.type,
            size: o.size,
            placeholder: o.placeholder,
            ref: o.outerRef
        }
    }

    return (
        <div {...outerProps}>
            {o.label}
            <div {...innerProps.container}>
                {o.iconBefore}
                <input {...innerProps.input} />
                {o.iconAfter}
            </div>
        </div>
    )
}

export default Input    