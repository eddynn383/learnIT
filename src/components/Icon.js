import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Badge from '../components/Badge'

const Icon = (o) => {
    const solid = fas[o.value]
    return (
        <>
            {o.badge && <Badge value={o.badge}/>}
            <FontAwesomeIcon icon={solid}/>
        </>
    )
}

export default Icon
