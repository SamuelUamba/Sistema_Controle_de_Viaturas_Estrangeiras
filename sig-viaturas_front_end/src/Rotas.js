import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import AddVeiclePage from './pages/guestPages/addVeicle';
import ListVeiclePage from './pages/guestPages/listVeicles';
import UpdateVeiclePage from './pages/guestPages/updateVeicles';
import ListUsersPage from './pages/adminPages/listUsers';
import RegisterUserPage from './pages/adminPages/registerUser';
import AdminDashboardPage from './pages/adminPages/adminDashboar';
import UserDetailsPage from './pages/adminPages/userDetails';
import LoginPage from './pages/login';


const Rotas = () => {

    return (
        <HashRouter>
            <  Routes>
                {/* Rotas do guest................... */}

                <Route exact path="/user/addVeicle" element={<AddVeiclePage />} />
                <Route exact path="/user/updateVehicle" element={<UpdateVeiclePage />} />
                <Route exact path="/user/listVehicle" element={<ListVeiclePage />} />


                {/* Rotas do admin..........................*/}

                <Route exact path="/admin/dashboard" element={<AdminDashboardPage />} />

                <Route exact path="/admin/registUser" element={<RegisterUserPage />} />

                <Route exact path="/admin/listUser" element={<ListUsersPage />} />

                <Route exact path="/admin/details/:id" element={<UserDetailsPage />} />


                {/* login route */}
                <Route exact path="/" element={<LoginPage />} />


            </  Routes>
        </HashRouter>

    )


}

export default Rotas
