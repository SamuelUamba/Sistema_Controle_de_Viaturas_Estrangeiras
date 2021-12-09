import React from 'react';
import AddVeicle from '../../../Components/guest/AddVeicle';
import Componentes from '../../../Components/guest/componenteGeral/Componentes';
import SideBarComponent from '../../../Components/SidebarComponent/SideBarComponent';

const AddVeiclePage = () => {
    return (
        <div>
            <SideBarComponent
                componente={<Componentes />}
            />
        </div>
    )
}

export default AddVeiclePage
