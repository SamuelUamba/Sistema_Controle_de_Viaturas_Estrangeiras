import React from 'react'
import RegistUser from '../../../Components/admin/RegistUser'
import SideBarComponent from '../../../Components/SidebarComponent/SideBarComponent'

const RegistUserPage = () => {
    return (
        <div>
            <SideBarComponent componente={<RegistUser />} />
        </div>
    )
}

export default RegistUserPage
