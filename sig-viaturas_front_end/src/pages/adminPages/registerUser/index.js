import React from 'react'
import SidebarComponent from '../../../Components/SidebarComponent/SideBarComponent' 
import RegistUser from '../../../Components/admin/RegistUser'


const RegisterUserPage = () => {
    return (
        <div>
            <SidebarComponent
                componente={<RegistUser/>}
            />
        </div>
    )
}

export default RegisterUserPage
