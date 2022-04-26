import { addClass } from '../functions/utils';

const Badge = (o) => {

    return (
        <span className={addClass('badge', 'test1', 'test2')}>{o.value}</span>
    )
}

export default Badge