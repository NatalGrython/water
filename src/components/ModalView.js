import { useState, useContext, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import AuthContext from '../context/AuthContext'

const ModalView = props => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        number: '',
        admin: false,
    })
    const [view, setView] = useState(true)
    const { request } = useFetch()
    const { setAuth } = useContext(AuthContext)

    const requestServer = async event => {
        event.preventDefault()
        const data = await request(
            `http://localhost:5000/api/auth/${view ? 'registration' : 'login'}`,
            'POST',
            {
                ...form,
            }
        )

        if (data.ok) {
            localStorage.setItem('user', JSON.stringify(data))
            setAuth(true)
            props.setOpen(false)
            setForm({
                name: '',
                surname: '',
                email: '',
                password: '',
                number: '',
                admin: false,
            })
        } else {
            alert(data.messege)
        }
    }

    const changeHandler = event => {
        event.preventDefault()
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form)
    }

    useEffect(() => {
        console.group('Called useEffect')
        console.log(form)
        console.groupEnd()
    }, [form])

    const changeView = event => {
        event.preventDefault()
        setView(!view)
        setForm({
            name: '',
            surname: '',
            email: '',
            password: '',
            number: '',
            admin: false,
        })
    }

    if (view) {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    placeholder="Имя"
                                    id="first_name"
                                    type="text"
                                    className="validate"
                                    name="name"
                                    value={form.name}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="input-field col s6">
                                <input
                                    id="last_name"
                                    type="text"
                                    className="validate"
                                    placeholder="Фамилия"
                                    name="surname"
                                    value={form.surname}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="email"
                                    type="email"
                                    className="validate"
                                    placeholder="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="password"
                                    type="password"
                                    className="validate"
                                    placeholder="Пароль"
                                    name="password"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="number"
                                    type="text"
                                    className="validate"
                                    placeholder="Номер"
                                    name="number"
                                    value={form.number}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <a
                                className="waves-effect waves-light btn col s6"
                                onClick={requestServer}
                                href="/"
                            >
                                Регистрация
                            </a>
                            <a
                                className="waves-effect waves-light btn col s6"
                                onClick={changeView}
                                href="/"
                            >
                                Вход
                            </a>
                        </div>
                    </form>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="email"
                                    type="email"
                                    className="validate"
                                    placeholder="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="password"
                                    type="password"
                                    className="validate"
                                    placeholder="Пароль"
                                    name="password"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <a
                                className="waves-effect waves-light btn col s6"
                                onClick={changeView}
                                href="/"
                            >
                                Регистрация
                            </a>
                            <a
                                className="waves-effect waves-light btn col s6"
                                onClick={requestServer}
                                href="/"
                            >
                                Вход
                            </a>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default ModalView
