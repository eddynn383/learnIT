import '../assets/design/panel.scss';

const Panel = (o) => {

    const inlineStyle = {
        width: o.width,
        minWidth: o.minWidth,
        maxWidth: o.maxWidth
    }

    return (
        <div className={o.class} style={inlineStyle}>
            {o.children}
        </div>
    )
}

export default Panel