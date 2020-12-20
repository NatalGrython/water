const Product = () => {
    return (
        <div className="product" id="product">
            <div className="product__fon">
                <div className="product__item product__item__first">
                    <h1 className="product__title">ВОДА</h1>
                    <button className="product__button">
                        <a href="#Вода">Перейти</a>
                    </button>
                </div>
            </div>
            <div className="product__fon">
                <div className="product__item product__item__second">
                    <h1 className="product__title">ФИЛЬТРЫ</h1>
                    <button className="product__button">
                        <a href="#Фильтры">Перейти</a>
                    </button>
                </div>
            </div>
            <div className="product__fon">
                <div className="product__item product__item__third">
                    <h1 className="product__title">ИОНИЗАТОРЫ</h1>
                    <button className="product__button">
                        <a href="#Ионизаторы">Перейти</a>
                    </button>
                </div>
            </div>
            <div className="product__fon">
                <div className="product__item product__item__fourth">
                    <h1 className="product__title">КУЛЕРЫ</h1>
                    <button className="product__button">
                        <a href="#Кулеры">Перейти</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
