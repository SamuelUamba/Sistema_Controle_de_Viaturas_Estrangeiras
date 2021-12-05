import React from 'react';
import AdminSidebar from '../../../Components/admin/adminSideBar/AdminSidebar';
import AdminDashboard from '../../../Components/admin/dashboard/AdminDashboard';


const AdminDashboardPage = () => {

    return (
        <div>
            <AdminSidebar
                componente={<AdminDashboard />}
            />
        </div>
    )
}

export default AdminDashboardPage
