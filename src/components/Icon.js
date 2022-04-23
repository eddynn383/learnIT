import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function Icon(o) {
    const i = fas[o.value]
    console.log(i)
    return (
        <FontAwesomeIcon icon={i} />
    )
}
