import Text from './Text';
import Icon from './Icon';
import '../assets/design/link.scss';

const Link = (o) => {
    return (
        <a href={o.to} target={o.target} className={o.class}>
            {o.iconPos === "before" && <Icon value={o.iconValue} />}
            <Text type="inline">{o.children}</Text>
            {o.iconPos === "after" && <Icon value={o.iconValue } />}
        </a>
    )
}

export default Link