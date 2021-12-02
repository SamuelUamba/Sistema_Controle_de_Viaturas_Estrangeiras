import React from 'react';
import MaterialTable from 'material-table';
import { Avatar, Grid } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import useFetch from '../../Components/useFetch';
import Spinner from 'react-bootstrap/Spinner';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const UserTable = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { dbData: usuarios, error, loading } = useFetch('http://127.0.0.1:8000/api/getusuario');


    const editFunction = () => {

        console.log(' edit usuarios')

    };


    if (error) {
        return <span>ERROR: {error.message}</span>
    }
    if (loading) {
        return (
            <div style={{ paddingTop: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }




    return (
        <div style={{ marginTop: '80px' }}>




        </div>

    )
}

export default UserTable