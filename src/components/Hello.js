import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

const Hello = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const user = JSON.parse(localStorage.getItem('user'))
    user ? setAuth(true) : setAuth(false)
    if (auth) {
        return (
            <>
                <div className="header__name user">
                    <h1 className="user__hello">Приветствуем,</h1>
                    <h1 className="user__name">{user.name}</h1>
                    <h1 className="user__surname">{user.surname}</h1>
                </div>
            </>
        )
    } else {
        return <></>
    }
}
export default Hello
