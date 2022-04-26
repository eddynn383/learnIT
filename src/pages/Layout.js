import logoPath from '../assets/logo/logo-light.svg';
import profilePath from '../assets/profile/profile.jpg';
import Panel from '../components/Panel';
import Logo from '../components/Logo';
import Navigation from '../blocks/Navigation';
import CalendarSchedule from '../components/CalendarSchedule';
import Search from '../blocks/Search';
import Cover from '../components/Cover';
import InfoButton from '../blocks/InfoButton';
import { Outlet } from "react-router-dom";

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
        cover: {
            class: ['profile'],
            url: profilePath,
            alt: 'Fake Face',
            size: 'medium',
            type: 'rounded'
        },
        notifications: {
            class: ['info', 'notifications'],
            url: '/notifications',
            size: 'large',
            iconBefore: 'faBell'
        },
        messages: {
            class: ['info', 'messages'],
            url: '/messages',
            size: 'large',
            iconBefore: 'faComment'
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
                        <InfoButton {...props.notifications} />
                        <InfoButton {...props.messages} />
                        <Cover {...props.cover} />
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
