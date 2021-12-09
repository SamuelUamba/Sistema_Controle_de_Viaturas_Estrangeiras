
import React from 'react';
import { CgUserList, CgPlayListRemove } from "react-icons/cg";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CommuteIcon from '@material-ui/icons/Commute';
import ListIcon from '@material-ui/icons/List';


export const GuestMenuList = [
    {
        title: "Dashboard",
        url: "/guest/dashboard",
        icon: <DashboardIcon />,
        cName: "nav-text",
        id: 1
    },
    {
        title: "Adicionar Entrada",
        url: "/guest/addvehicle",
        icon: <CommuteIcon />,
        cName: "nav-text",
        id: 3
    },
    {
        title: "Lista de Vehiculos",
        url: "/guest/listvehicle",
        icon: <ListIcon />,
        cName: "nav-text",
        id: 4
    }
]

export default GuestMenuList

