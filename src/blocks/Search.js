import Input from '../components/Input';
import Button from '../components/Button';
import { addClass } from '../functions/utils';

const Search = (o) => {
    console.log(o)
    const defClass = 'module'
    const classes = addClass(defClass, o.class)
    const outerProps = {
        className: classes,
    }
    const innerProps = {
        input: {
            className: o.input.class,
            id: o.input.id,
            type: o.input.type,
            'data-size': o.input.size,
            placeholder: o.input.placeholder,
        },
        button: {
            className: o.button.class,
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