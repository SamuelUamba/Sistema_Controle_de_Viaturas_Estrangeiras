import React from 'react'
import RegistUser from '../../../Components/admin/RegistUser';
import AdminSidebar from '../../../Components/admin/adminSideBar/AdminSidebar';



const RegisterUserPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<RegistUser />}
            />
        </div>
    )
}

export default RegisterUserPage