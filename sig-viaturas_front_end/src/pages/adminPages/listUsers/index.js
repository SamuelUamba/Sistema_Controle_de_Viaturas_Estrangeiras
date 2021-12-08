import React from 'react';
import UserList2 from '../../../Components/admin/UserList2'
import AdminSidebar from '../../../Components/admin/adminSideBar/AdminSidebar';


const ListUsersPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<UserList2 />}
            />

        </div>
    )
}

export default ListUsersPage