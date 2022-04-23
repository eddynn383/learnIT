const Text = (o) => {
    return (
        o.type === 'inline' 
            ? <span className={o.type}>{o.children}</span>
            : <p className={o.type}>{o.children}</p>
    )
}

export default Text