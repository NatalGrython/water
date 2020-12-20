import HeaderTools from './HeaderTools'
import Hello from './Hello'

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="header__links">
                <a href="#header" className="header__link">
                    Главная
                </a>
                <a href="#main" className="header__link">
                    Магазин
                </a>
                <a href="#product" className="header__link">
                    Товары
                </a>

                <a href="#footer" className="header__link">
                    Контакты
                </a>
            </div>
            <Hello />
            <HeaderTools />
        </header>
    )
}
export default Header
