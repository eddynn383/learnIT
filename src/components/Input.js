import { addClass } from '../functions/utils';
import '../assets/design/input.scss'

const input = (o) => {
    const defClass = 'input'
    const classes = addClass(defClass, o.className)

    const outerProps = {
        className: classes
    }

    const innerProps = {
        id: o.id,
        'data-type': o.type,
        'data-size': o.size,
        placeholder: o.placeholder
    }

    return (
        <div {...outerProps}>
            {o.label && <label for={o.id}>{o.label}</label>}
            <input {...innerProps} />
        </div>
    )
}

export default input    