import '../assets/design/panel.scss';

const Panel = (o) => {
    const innerProps = {
        className: o.class,
        style: o.style
    }

    return (
        <div {...innerProps}>
            {o.children}
        </div>
    )
}

export default Panel