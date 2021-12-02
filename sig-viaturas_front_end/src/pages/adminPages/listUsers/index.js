import React from 'react';
import SideBarComponent from '../../../Components/SidebarComponent/SideBarComponent'
import ListUsers from '../../../Components/admin/ListUsers'

const ListUsersPage = () => {
    return (
        <div>
            <SideBarComponent
                componente={<ListUsers />}
            />

        </div>
    )
}

export default ListUsersPage
