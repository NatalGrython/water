import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Goods from './components/Goods'
import Header from './components/Header'
import Main from './components/Main'
import OrdersAdmin from './components/OrdersAdmin'
import Product from './components/Product'
import AuthContext from './context/AuthContext'

function App() {
    const [auth, setAuth] = useState(false)
    let adminFlag
    if (localStorage.getItem('user')) {
        adminFlag = JSON.parse(localStorage.getItem('user')).admin
        console.log(adminFlag)
    } else {
        adminFlag = false
    }
    if (!adminFlag) {
        return (
            <>
                <AuthContext.Provider
                    value={{
                        auth,
                        setAuth,
                    }}
                >
                    <Header />
                    <Main />
                    <Product />
                    <Goods title={'Вода'} />
                    <Goods title={'Фильтры'} />
                    <Goods title={'Ионизаторы'} />
                    <Goods title={'Кулеры'} />
                    <Footer />
                </AuthContext.Provider>
            </>
        )
    } else {
        return (
            <>
                <AuthContext.Provider
                    value={{
                        auth,
                        setAuth,
                    }}
                >
                    <Header />
                    <OrdersAdmin />
                    <Footer />
                </AuthContext.Provider>
            </>
        )
    }
}

export default App
