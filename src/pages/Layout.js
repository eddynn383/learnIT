import logoPath from '../assets/logo/logo-light.svg';
import coverURL from '../assets/profile/profile.jpg';
import Panel from '../components/Panel';
import Logo from '../components/Logo';
import Navigation from '../blocks/Navigation';
import CalendarSchedule from '../components/CalendarSchedule';
import Search from '../blocks/Search';
import Cover from '../components/Cover';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Badge from '../components/Badge';
import { Outlet } from "react-router-dom";
import Dropdown from '../blocks/Dropdown';

const Layout = (o) => {
    const props = {
        logo: {
            class: ['main'],
            url: logoPath,
            alt: 'Placeholder Logo',
            style: {
                width: '210px'
            }
        },
        navigation: {
            class: ['main']
        },
        timeline: {
            class: ['schedule']
        },
        search: {       
            class: ['search'],
            input: {
                class: ['search'],
                id: 'search',
                type: 'text',
                size: 'medium',
                placeholder: 'Search...'
            },
            button: {
                class: ['search', 'reset'],
                iconBefore: 'faMagnifyingGlass'
            }
            
        },
        notifications: {
            class: ['notifications', 'icon', 'reset'],
            size: 'medium',
            type: 'button',
            iconBefore: <Icon class={['faBell']} value="faBell" badge={<Badge class={['notification']} maxValue={50} value={120} size="small" />} />
        },
        messages: {
            class: ['messages', 'icon', 'reset'],
            size: 'medium',
            type: 'button',
            iconBefore: <Icon class={['faComment']} value="faComment" badge={<Badge class={['messages']} maxValue={99} value={52} size="small" />} />
        },
        profile: {
            class: ['profile', 'cover', 'reset'],
            size: 'medium',
            type: 'button',
            cover: <Cover class={['button-cover']} url={coverURL} alt="test" size="medium" type="rounded"/>,
            content: <Navigation class={['profile']} />
        }
    }

    return (
        <> 
            <Panel class="panel panel--left">
                <Panel class="panel panel--top">
                    <Logo {...props.logo} />
                </Panel>
                <Panel class="panel panel--bottom">
                    <Navigation {...props.navigation}/>
                    <CalendarSchedule {...props.timeline}/>
                </Panel>
            </Panel>
            <Panel class="panel panel--right">
                <Panel class="panel panel--top">
                    <Search {...props.search}/>
                    <Panel class="module module--tools">
                        <Dropdown {...props.notifications}/>
                        <Dropdown {...props.messages}/>
                        <Dropdown {...props.profile}/>
                    </Panel>
                </Panel>
                <Panel class="panel panel--bottom">
                    <Outlet />
                </Panel>
            </Panel>
        </>
    )
}

export default Layout;
