import Icon from '../components/Icon';
import Badge from '../components/Badge';
import Input from '../components/Input';
import Cover from '../components/Cover';
import Button from '../components/Button';
import coverURL from '../assets/profile/profile.jpg';

const Test = () => {
    const innerProps = {
        icon: {
            class: ['faUserGraduate'],
            value: 'faUserGraduate',
            size: 'xl',
            badge: <Badge class={['testClass']} maxValue={99} value={120} size="medium" title="testBadge" />
        },
        input: {
            class: ['color'],
            type: 'color'
        },
        button: {
            class: ['cover', 'reset'],
            type: 'button',
            cover: <Cover class={['button-cover']} url={coverURL} alt="test" size="medium" type="rounded"/>
        }
    }
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-araound'}}>
                <Icon {...innerProps.icon} />
                <Input {...innerProps.input} />
                <Button {...innerProps.button} />
            </div>
        </>
    )
}

export default Test