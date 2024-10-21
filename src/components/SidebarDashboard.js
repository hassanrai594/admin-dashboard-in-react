import { Sidebar, Menu, MenuItem,SubMenu  } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import logo from "../pin.png";

export default function SidebarDashboard({collapsed}) {
    return (
        <>
            <Sidebar className='h-screen py-3 bg-zinc-100' collapsed={collapsed}>
                <Menu>
                    <div className='pb-7 border-b-2 mb-7'>
                        <img src={logo} alt='Logo' className='h-16 w-16 mx-auto'></img>
                    </div>
                    <MenuItem component={<Link to="/dashboard" />}>Dashboard</MenuItem>
                    <MenuItem component={<Link to="/Page_1" />}>Page 1</MenuItem>
                    <SubMenu label="Page 2">
                        <MenuItem component={<Link to="/Page_2.1" />}> Page 2.1 </MenuItem>
                        <MenuItem component={<Link to="/Page_2.2" />}> Page 2.2 </MenuItem>
                    </SubMenu>
                    <MenuItem component={<Link to="/Page_3" />}>Page 3</MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}
