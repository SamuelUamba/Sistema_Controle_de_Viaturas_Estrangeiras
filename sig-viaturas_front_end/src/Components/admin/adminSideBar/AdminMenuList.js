
import React from 'react';
import { CgUserList, CgPlayListRemove } from "react-icons/cg";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';


export const AdminMenuList = [
    {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: <DashboardIcon />,
        cName: "nav-text",
        id: 1
    },
    {
        title: "Adicionar users",
        url: "/admin/registUser",
        icon: <CgUserList />,
        cName: "nav-text",
        id: 3
    },
    {
        title: "Lista de users",
        url: "/admin/listUser",
        icon: <ListIcon />,
        cName: "nav-text",
        id: 4
    }
]

export default AdminMenuList

