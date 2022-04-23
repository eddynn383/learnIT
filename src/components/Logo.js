import '../assets/design/logo.scss';

const Logo = (o) => {
    const inlineStyle = {
        width: o.width,
        minWidth: o.minWidth,
        maxWidth: o.maxWidth
    }

    return (
        <>
            <div className={o.class}>
                <img src={o.url} alt={o.alt} style={inlineStyle} />
            </div>
        </>
    )
}

export default Logo