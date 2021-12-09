import React from 'react'
import GuestSidebar from '../../../Components/guest/guestSideBar/GuestSidebar';
import VehicleDetalhes from '../../../Components/guest/vehicledetahes/DetalhesVehicle';

const vehicleDetailsPage = () => {
    return (
        <div>
            <GuestSidebar
                componente={<VehicleDetalhes />}
            />

        </div>
    )
}

export default vehicleDetailsPage
