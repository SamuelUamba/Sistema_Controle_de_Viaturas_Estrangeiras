import React from 'react'
import UserDetails from '../../../Components/admin/detahesUser/UserDetails'
import AdminSidebar from '../../../Components/admin/adminSideBar/AdminSidebar';

const UserDetailsPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<UserDetails />}
            />

        </div>
    )
}

export default UserDetailsPage
