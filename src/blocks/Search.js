import Input from '../components/Input';
import Button from '../components/Button';
import { addClass, classModifier } from '../functions/utils';
import '../assets/design/search.scss'

const Search = (o) => {
    // console.log(o)
    const defaultClass = 'module'
    const classes = classModifier(defaultClass, o.class)
    const outerProps = {
        className: addClass(classes),
    }
    const innerProps = {
        input: {
            class: o.input.class,
            id: o.input.id,
            type: o.input.type,
            'data-size': o.input.size,
            placeholder: o.input.placeholder,
        },
        button: {
            class: o.button.class,
            type: 'button',
            iconBefore: o.button.iconBefore
        }
    }
    return (
        <div {...outerProps}>        
            <Input {...innerProps.input} />
            <Button {...innerProps.button} />
        </div>
    )
}

export default Search