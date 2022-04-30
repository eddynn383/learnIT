import Label from "../components/Label";
import { addClass, classModifier } from '../functions/utils';
import '../assets/design/checkbox.scss';
import Text from "./Text";

const Checkbox = (o) => {
    const defaultInputClass = 'input'
    const inputClasses = classModifier(defaultInputClass, o.class)
    const outerProps = {
        className: addClass(inputClasses)
    }

    const innerProps = {
        id: o.id,
        type: o.type,
        checked: o.checked,
        onClick: o.onclick
    }
    return (
        <div {...outerProps}>
            <Label>
                <input {...innerProps} />
                <span className="checkmark">{o.checkmark}</span>
                <Text type="inline">{o.label}</Text>
            </Label>
        </div>
    )
}

export default Checkbox