import Modal from 'react-modal'
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'
import { useState } from 'react'

const Busket = ({ open }) => {
    const [data, setData] = useState()
    const styles = {
        content: {
            border: '14px solid #288d74',
        },
    }
    const { request } = useFetch()

    const toServer = async () => {
        let user
        if (!!JSON.parse(localStorage.getItem('user'))) {
            user = JSON.parse(localStorage.getItem('user')).email
        } else {
            user = 'nobody'
        }
        const response = await request(
            `http://localhost:5000/api/goods/get`,
            'POST',
            {
                user,
            }
        )
        localStorage.setItem('bucket', JSON.stringify(response))
        setData(response)
    }

    useEffect(() => {
        toServer()
    }, [data])

    const getGoods = () => {
        if (!!localStorage.getItem('bucket')) {
            const arrayProduct = JSON.parse(localStorage.getItem('bucket'))

            return arrayProduct.product.map((element, index, array) => {
                let imgPath
                let title
                let price = 40
                let counter = 1
                switch (element) {
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
                        imgPath = 'kuler3.jpg'
                        title = 'Кулер №3'
                        break

                    default:
                        break
                }

                return (
                    <>
                        <div className="good__item">
                            <img className="good__img" src={imgPath} alt="" />
                            <h1 className="good__title">{title}</h1>
                            <h1 className="good__price">{price}</h1>
                            <h1 className="good__count">{counter}</h1>
                            <h1 className="good__sum">{counter * price}</h1>
                        </div>
                    </>
                )
            })
        } else {
            return (
                <>
                    <h1>Нет продуктов</h1>
                </>
            )
        }
    }
    const getAllPrice = () => {
        if (JSON.parse(localStorage.getItem('bucket'))) {
            return (
                JSON.parse(localStorage.getItem('bucket')).product.length * 40
            )
        } else {
            return 0
        }
    }
    const setOrder = async () => {
        const data = JSON.parse(localStorage.getItem('bucket')).product
        const user = JSON.parse(localStorage.getItem('user')).email
        const response = await request(
            `http://localhost:5000/api/goods/order/set`,
            'POST',
            {
                user,
                data,
            }
        )
        localStorage.removeItem('bucket')
    }
    return (
        <>
            <Modal isOpen={open} style={styles}>
                <div className="bucket">
                    <h1 className="bucket__title">Корзина товаров</h1>
                    <div className="bucket__goods goods">
                        <div className="goods__titile title">
                            <h1 className="title__head title__text">
                                Название товара
                            </h1>
                            <h1 className="title__price title__text">
                                Стоимость
                            </h1>
                            <h1 className="title__amount title__text">
                                Количество
                            </h1>
                            <h1 className="title__summ title__text">Cумма</h1>
                        </div>
                        {getGoods()}
                    </div>
                    <div className="good__all">
                        <h1 className="good__all-price">{getAllPrice()}</h1>
                        <button className="gooo__order" onClick={setOrder}>
                            Заказать
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default Busket
