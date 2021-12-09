import React from 'react';
import GuestSidebar from '../../../Components/guest/guestSideBar/GuestSidebar';
import GuestDashboard from '../../../Components/guest/dashboard/GuestDashboard';


const GuestDashboardPage = () => {

    return (
        <div>
            <GuestSidebar
                componente={<GuestDashboard />}
            />
        </div>
    )
}

export default GuestDashboardPage
