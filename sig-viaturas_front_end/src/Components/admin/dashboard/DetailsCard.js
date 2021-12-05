import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../../css/cssGeral.css'


const DetailsCard = (props) => {
    return (
        <div  >

            <div id='cardId' className='details-card'>

                <Card border={props.border} style={{ width: '18rem', height: '14rem' }}>
                    <Card.Header>
                        {props.icon}

                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {props.title}

                        </Card.Text>

                        <Card.Title>{props.value}</Card.Title>

                    </Card.Body>
                </Card>
            </div>


        </div>
    )
}

export default DetailsCard
