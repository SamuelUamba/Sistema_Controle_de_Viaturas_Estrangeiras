import React from 'react';
import UpdateVeicle from '../../../Components/guest/UpdateVeicle';
import SideBarComponent from '../../../Components/SidebarComponent/SideBarComponent';

const UpdateVeiclePage = () => {
    return (
        <div>
            <SideBarComponent
                componente={<UpdateVeicle />}
            />
        </div>
    )
}

export default UpdateVeiclePage
