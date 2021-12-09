import React from 'react'
import { Badge } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../../../css/cssGeral.css'

const UserCard = (props) => {
    return (
        <div>
            <div className='user-car-display-flex'>
                <AccountCircleIcon
                    color="primary"
                    style={{ fontSize: 50, margin: '0px 10px' }}
                />
                <span >{props.item.nome + "  " + props.item.apelido}</span>
            </div>
        </div>
    )
}

export default UserCard
