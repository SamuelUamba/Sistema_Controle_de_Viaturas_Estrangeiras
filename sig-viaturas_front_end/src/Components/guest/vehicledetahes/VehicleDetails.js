import React from 'react'
import '../../../css/cssGeral.css';
import Card from 'react-bootstrap/Card';
import UserCard from './UserCard';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import cssGeral from '../../../css/cssGeral.css';
import useFetch from '../../useFetch'
import DetalhesUser from './DetalhesUser';
import Spinner from 'react-bootstrap/Spinner';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '60vh',
        borderRadius: '10px'

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));




const VehicleDetails = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const { dbData: usersList, error, loading } = useFetch('http://127.0.0.1:8000/api/getusuario');



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (error) {
        return <span>ERROR: {error.message}</span>
    }
    if (loading) {
        return (
            <div style={{ paddingTop: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    return (



        <Card style={{ height: '100vh', margin: "5px 5px 5px 5px" }}>

            <Card.Header >
                <Typography color="primary" gutterBottom>
                    <h4 style={{ margin: '10px 0px' }}>Lista de usuários</h4>
                </Typography>
            </Card.Header>
            <Card.Body>
                <div className='div-flexEnd-style'>
                    <GroupIcon
                        color="primary"
                        style={{ fontSize: 80, margin: '5px 5px 5px 5px', display: 'flex', alignItems: 'center', justifyContent: 'right' }}
                    />

                </div>
                <hr />
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        {
                            usersList?.map((item, index) =>
                            (
                                <Tab label={<UserCard item={item} />} {...a11yProps(index)} />

                            ))
                        }

                    </Tabs>


                    {
                        usersList?.map((item, index) =>
                        (
                            <TabPanel value={value} index={index}>
                                <DetalhesUser detalhes={item} />
                            </TabPanel>
                        ))
                    }


                </div>
            </Card.Body>
        </Card>




    )
}

export default VehicleDetails
