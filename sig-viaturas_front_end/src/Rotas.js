import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import AddVeiclePage from './pages/guestPages/addVeicle';


const Rotas = () => {

    return (
        <HashRouter>
            <  Routes>

                <Route exact path="/" element={<AddVeiclePage />} />

                {/* <Route exact path="duc/home" element={<DucHomePage />} />
                <Route exact path="/duc/list" element={<DucListPage />} />
                <Route exact path="/duc/editar/:id" element={<DucEditPage />} />
                <Route exact path="/duc/atribuirtecnico/:id" element={<DucAtribuirTacnicoPage />} /> */}
            </  Routes>
        </HashRouter>

    )


}

export default Rotas
