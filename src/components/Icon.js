import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

const Icon = (o) => {
    const solid = fas[o.value]
    return (
        <FontAwesomeIcon icon={solid} />
    )
}

export default Icon
