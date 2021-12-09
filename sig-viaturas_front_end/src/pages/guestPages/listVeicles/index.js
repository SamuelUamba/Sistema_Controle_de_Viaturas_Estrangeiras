import React from 'react';
import VehicleTable from '../../../Components/guest/VehicleTable';
import SideBarComponent from '../../../Components/SidebarComponent/SideBarComponent';

const ListVeiclePage = () => {
    return (
        <div>
            <SideBarComponent
                componente={<VehicleTable
                    tamanho={5}
                />}
            />
        </div>
    )
}

export default ListVeiclePage
