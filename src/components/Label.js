import '../assets/design/label.scss';

const Label = (o) => {
    return (
        <label htmlFor={o.for}>{o.children}</label>
    )
}

export default Label