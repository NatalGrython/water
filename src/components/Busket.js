import Modal from 'react-modal'
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'
import { useState } from 'react'

const Busket = ({ open }) => {
    const [data, setData] = useState([])
    const styles = {
        content: {
            border: '14px solid #288d74',
            width: '1000px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '52px',
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
                        imgPath = 'kuler3.png'
                        title = 'Кулер №3'
                        break

                    default:
                        break
                }

                return (
                    <>
                        <div className="bucket-good">
                            <div className="bucket-good__info">
                                <div className="bucket-good__img">
                                    <img src={imgPath} alt="" />
                                </div>

                                <h1 className="bucket-good__title">{title}</h1>
                            </div>

                            <div className="bucket-good__descript">
                                <h1 className="bucket-good__price">40,00 Р</h1>
                                <button className="bucket-good__delete">
                                    &#10006;
                                </button>
                            </div>
                        </div>
                    </>
                )
            })
        } else {
            return (
                <>
                    <h1 className="goods__dont">Нет продуктов</h1>
                </>
            )
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

    const getAllPrice = () => {
        if (localStorage.getItem('bucket')) {
            return `${
                JSON.parse(localStorage.getItem('bucket')).product.length * 40
            },00 Р`
        } else {
            return ''
        }
    }
    return (
        <>
            <Modal isOpen={open} style={styles}>
                <div className="basket__goods">
                    <h1 className="basket__title">Моя корзина</h1>

                    {getGoods()}

                    <input
                        className="basket__path"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ваш адрес"
                    />
                    <input
                        className="basket__path"
                        type="text"
                        name=""
                        id=""
                        placeholder="Пожелания"
                    />
                </div>
                <div className="basket__details">
                    <h1 className="detals__title">Детали заказа</h1>
                    <div className="detals">
                        <div className="detals__sum">
                            <h1 className="detals__sum__title">Сумма</h1>
                            <h1 className="detals__sum__value">
                                {getAllPrice()}
                            </h1>
                        </div>
                        <div className="detals__delivery">
                            <h1 className="detals__delivery__title">
                                Доставка
                            </h1>
                            <h1 className="detals__delivery__value">
                                БЕСПЛАТНО
                            </h1>
                        </div>
                        <button
                            className="detals__delivery__button"
                            onClick={setOrder}
                        >
                            <span>Заказать</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default Busket
