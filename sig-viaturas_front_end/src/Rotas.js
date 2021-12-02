import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import RegistUserPage from './pages/adminPages/registUser';
import AddVeiclePage from './pages/guestPages/addVeicle';
import ListUsersPage from './pages/adminPages/listUsers';



const Rotas = () => {

    return (
        <HashRouter>
            <  Routes>

                <Route exact path="/" element={<AddVeiclePage />} />

                <Route exact path="admin/registUser" element={<RegistUserPage />} />

                <Route exact path="/admin/listUser" element={<ListUsersPage />} />
               
               
                {/* <Route exact path="/duc/editar/:id" element={<DucEditPage />} />
                <Route exact path="/duc/atribuirtecnico/:id" element={<DucAtribuirTacnicoPage />} /> */}
            </  Routes>
        </HashRouter>

    )


}

export default Rotas
