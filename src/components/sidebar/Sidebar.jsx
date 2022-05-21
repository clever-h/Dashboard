import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BugReportIcon from '@mui/icons-material/BugReport';
import BadgeIcon from '@mui/icons-material/Badge';
import LinkIcon from '@mui/icons-material/Link';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="logo"> H@amidR</div>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                          <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">List</p>
                    <li>
                        <PersonIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    <li>
                        <BugReportIcon className='icon'/>
                        <span>Ticket</span>
                    </li>
                    <li>
                        <BadgeIcon className='icon'/>
                        <span>Info</span>
                    </li>
                    <li>
                        <LinkIcon className='icon'/>
                        <span>Link</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                          <NotificationsActiveIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">Service </p>
                    <li>
                         <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <li>
                         <PsychologyIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                         <AccountBoxIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                         <LogoutIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;