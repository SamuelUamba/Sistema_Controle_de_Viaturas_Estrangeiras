
import React from 'react';
import { CgUserList, CgPlayListRemove } from "react-icons/cg";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CommuteIcon from '@material-ui/icons/Commute';
import ListIcon from '@material-ui/icons/List';

import * as AiIcons from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { MdPayment } from "react-icons/md";



export const SideBarMenuList = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: <DashboardIcon />,
        cName: "nav-text",
        id: 1
    },
    {
        title: "Entrada de veículos",
        url: "/entrada",
        icon: <CommuteIcon />,
        cName: "nav-text",
        id: 3
    },
    {
        title: "Lista de veículos",
        url: "/lista",
        icon: <ListIcon />,
        cName: "nav-text",
        id: 4
    },
    {
        title: "Lista de proprietários",
        url: "/listaProprietario",
        icon: <CgUserList />,
        cName: "nav-text",
        id: 5
    }

]

export default SideBarMenuList

