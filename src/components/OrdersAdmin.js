import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const OrdersAdmin = () => {
    const { request } = useFetch()
    const toServer = async () => {
        const data = await request(
            `http://localhost:5000/api/goods/order/all`,
            'POST'
        )
        localStorage.setItem('orders-admin', JSON.stringify(data))
    }

    const getSwitch = elements => {
        let imgPath
        let title
        switch (elements) {
            case 'Water-one':
                imgPath = '5litr.jpg'
                title = 'Вода 5л'

                break
            case 'Water-two':
                imgPath = '10litr.jpg'
                title = 'Вода 10л'
                break
            case 'Water-three':
                imgPath = '20litr.jpg'
                title = 'Вода 20л'
                break
            case 'Filter-one':
                imgPath = 'kuvshin1.jpg'
                title = 'Фильтр №1'
                break
            case 'Filter-two':
                imgPath = 'kuvshin2.jpg'
                title = 'Фильтр №2'
                break
            case 'Filter-three':
                imgPath = 'kuvshin3.jpg'
                title = 'Фильтр №3'
                break
            case 'Ion-one':
                imgPath = 'ion1.jpg'
                title = 'Ионизатор №1'

                break
            case 'Ion-two':
                imgPath = 'ion2.jpg'
                title = 'Ионизатор №2'

                break
            case 'Ion-three':
                imgPath = 'ion3.jpg'
                title = 'Ионизатор №3'

                break
            case 'Culer-one':
                imgPath = 'kuler1.jpg'
                title = 'Кулер №1'
                break
            case 'Culer-two':
                imgPath = 'kuler2.jpg'
                title = 'Кулер №2'

                break
            case 'Culer-three':
                imgPath = 'kuler3.png'
                title = 'Кулер №3'
                break

            default:
                break
        }

        return title
    }

    const getOrders = () => {
        if (localStorage.getItem('orders-admin')) {
            const orders = JSON.parse(localStorage.getItem('orders-admin')).data
            return orders.map((order, index) => {
                const productsCurrentOrder = order.products
                console.log(order)
                return (
                    <div className="orders-admin__item">
                        <div className="orders-admin__title">{`Заказ № ${
                            index + 1
                        }`}</div>
                        <div className="orders-admin__email">
                            <h1>{`Email покупателя: ${order.email}`}</h1>
                        </div>
                        <div className="orders-admin__info">
                            <h1>Товары:</h1>
                            {productsCurrentOrder.map(product => {
                                const titleProduct = getSwitch(product)
                                return (
                                    <h1 className="orders__value">
                                        {titleProduct}
                                    </h1>
                                )
                            })}
                        </div>
                        <div className="orders-admin__date">
                            {order.createdAt.replace('T', '/').slice(0, 16)}
                        </div>
                    </div>
                )
            })
        } else {
            return <h1>Нет заказов </h1>
        }
    }

    useEffect(() => toServer(), [])
    return (
        <>
            <div className="orders-admin__list">{getOrders()}</div>
        </>
    )
}
export default OrdersAdmin
