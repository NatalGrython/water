import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Good = ({ path, description, id }) => {
    const { request } = useFetch()

    const toServer = async event => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            const data = await request(
                `http://localhost:5000/api/goods/add`,
                'POST',
                {
                    user: user.email,
                    product: event.target.id,
                }
            )
        } else {
            const data = await request(
                `http://localhost:5000/api/goods/add`,
                'POST',
                {
                    user: 'nobody',
                    product: event.target.id,
                }
            )
        }
    }

    return (
        <>
            <div className="googs__item " id={id}>
                <div className="card">
                    <div className="card-image">
                        <img src={path} alt="" />

                        <a
                            className="btn-floating halfway-fab waves-effect waves-light red"
                            href="/"
                        >
                            <i className="material-icons">40Р</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <p>{description}</p>
                        <div className="goods__bucket">
                            <button
                                className="goods__buy"
                                onClick={toServer}
                                id={id}
                            >
                                <span id={id}>Добавить в корзину</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Good
