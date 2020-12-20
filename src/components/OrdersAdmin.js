import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const OrdersAdmin = () => {
    const { request } = useFetch()
    const [data, setData] = useState()
    const toServer = async () => {
        const data = await request(
            `http://localhost:5000/api/goods/order/all`,
            'POST'
        )
        localStorage.setItem('orders-admin', JSON.stringify(data))
        setData(data)
    }

    const getOrders = () => {
        if (localStorage.getItem('orders-admin')) {
            const orders = JSON.parse(localStorage.getItem('orders-admin')).data
            return orders.map((element, index) => {
                return (
                    <div className="orders-admin__item">
                        <h1>Заказ №{index + 1}</h1>
                        <h1>{element.products.join('_')}</h1>
                    </div>
                )
            })
        } else {
            return <h1> Заказов нет </h1>
        }
    }

    useEffect(() => toServer(), [])

    return (
        <>
            <div className="orders-admin">{getOrders()}</div>
        </>
    )
}
export default OrdersAdmin
