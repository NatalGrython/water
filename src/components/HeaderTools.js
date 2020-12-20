import { useState, useContext } from 'react'
import RegistrModal from './RegistrModal'
import AuthContext from '../context/AuthContext'
import AccountMenu from './AccountMenu'
import Busket from './Busket'

const HeaderTools = () => {
    const [open, setOpen] = useState(false)
    const [openBusket, setOpenBusket] = useState(false)

    const { auth } = useContext(AuthContext)
    let filesrc = 'profile.png'

    const openModal = event => {
        event.preventDefault()
        setOpen(true)
    }

    const openBuket = event => {
        event.preventDefault()
        setOpenBusket(true)
    }

    if (auth) {
        return (
            <>
                <div className="header__tools">
                    <a href="/" className="header__sign">
                        <img src={filesrc} alt="" className="header__profile" />
                    </a>
                    <AccountMenu />

                    <a href="/" className="header__basket" onClick={openBuket}>
                        <img
                            className="header__bucket"
                            src="bucket.png"
                            alt=""
                        />
                    </a>
                    <Busket open={openBusket} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="header__tools">
                    <a href="/" className="header__sign" onClick={openModal}>
                        <img
                            src="profile.png"
                            alt=""
                            className="header__profile"
                        />
                    </a>
                    <RegistrModal open={open} setOpen={setOpen} />
                    <a href="/" className="header__basket" onClick={openBuket}>
                        <img
                            className="header__bucket"
                            src="bucket.png"
                            alt=""
                        />
                    </a>
                    <Busket open={openBusket} />
                </div>
            </>
        )
    }
}
export default HeaderTools
