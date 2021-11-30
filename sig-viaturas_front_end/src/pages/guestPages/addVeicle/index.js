import React from 'react';
import AddVeicle from '../../../Components/guest/AddVeicle';
import SideBarComponent from '../../../Components/SidebarComponent/SideBarComponent';

const AddVeiclePage = () => {
    return (
        <div>
            <SideBarComponent
                componente={<AddVeicle />}
            />
        </div>
    )
}

export default AddVeiclePage
