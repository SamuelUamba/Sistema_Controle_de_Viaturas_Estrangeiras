
import React from 'react';
import { CgUserList, CgPlayListRemove } from "react-icons/cg";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CommuteIcon from '@material-ui/icons/Commute';
import ListIcon from '@material-ui/icons/List';





export const SideBarMenuList = [
    {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: <DashboardIcon />,
        cName: "nav-text",
        id: 1
    },
    {
        title: "Entrada de veículos",
        url: "/user/addVeicle",
        icon: <CommuteIcon />,
        cName: "nav-text",
        id: 3
    },
    {
        title: "Lista de veículos",
        url: "/user/listVehicle",
        icon: <ListIcon />,
        cName: "nav-text",
        id: 4
    },

    // {
    //     title: "Lista de proprietários",
    //     url: "/listaProprietario",
    //     icon: <CgUserList />,
    //     cName: "nav-text",
    //     id: 5
    // }

]

export default SideBarMenuList

