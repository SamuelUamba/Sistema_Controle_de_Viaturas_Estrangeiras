import React from 'react';
import ListVeicle from '../../../Components/guest/ListVeicle';
import SideBarComponent from '../../../Components/SidebarComponent/SideBarComponent';

const ListVeiclePage = () => {
    return (
        <div>
            <SideBarComponent
                componente={<ListVeicle />}
            />
        </div>
    )
}

export default ListVeiclePage
