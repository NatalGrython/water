import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    List,
    ListItem,
    Divider,
    ListItemText,
} from '@material-ui/core'
import { useFetch } from '../hooks/useFetch'

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [openDialog, setOpenDialog] = React.useState(false)
    const { setAuth } = useContext(AuthContext)
    const { request } = useFetch()
    let arrayOrder
    if (localStorage.getItem('orders')) {
        arrayOrder = JSON.parse(localStorage.getItem('orders')).result
    } else {
        arrayOrder = null
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const requestServer = async () => {
        const email = JSON.parse(localStorage.getItem('user')).email

        const data = await request(
            `http://localhost:5000/api/goods/order/get`,
            'POST',
            {
                email,
            }
        )
        localStorage.setItem('orders', JSON.stringify(data))
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const logOut = () => {
        setAuth(false)
        localStorage.removeItem('user')
        localStorage.removeItem('bucket')
    }

    const changeOpen = async () => {
        handleClose()
        setOpenDialog(true)
        await requestServer()
    }

    const getList = () => {
        if (localStorage.getItem('orders')) {
            return arrayOrder.map((element, index) => {
                return (
                    <ListItem button>
                        <ListItemText
                            primary={`Заказ №${index + 1}`}
                            secondary={element.products.join('_')}
                        />
                    </ListItem>
                )
            })
        } else {
            return (
                <ListItem>
                    <ListItemText primary="Закзов нет" />
                </ListItem>
            )
        }
    }

    return (
        <>
            <div className="header__account">
                <img
                    className="header__icon"
                    src="arrow.png"
                    alt=""
                    onClick={handleClick}
                />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={changeOpen}>Мои заказы</MenuItem>
                    <Dialog fullScreen open={openDialog}>
                        <AppBar>
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="close"
                                ></IconButton>
                                <Typography variant="h6">Мои заказы</Typography>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem button>
                                <ListItemText
                                    primary="Phone ringtone"
                                    secondary="Titania"
                                />
                            </ListItem>
                            <Divider />
                            {getList()}
                        </List>
                    </Dialog>
                    <MenuItem onClick={handleClose}> Мой аккаунт</MenuItem>
                    <MenuItem onClick={logOut}>Выход</MenuItem>
                </Menu>
            </div>
        </>
    )
}

export default AccountMenu
