import React from 'react'

const Link = (o) => {
    return (
        <a href={o.to} target={o.target} className={o.class}>{o.children}</a>
    )
}

export default Link