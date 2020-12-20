import Good from './Good'

const Goods = props => {
    const path = {
        imageOne: '',
        imageTwo: '',
        imageThree: '',
    }

    const description = {
        one: '',
        two: '',
        three: '',
    }
    const id = {
        one: '',
        two: '',
        three: '',
    }

    switch (props.title) {
        case 'Вода':
            path.imageOne = '5litr.jpg'
            path.imageTwo = '10litr.jpg'
            path.imageThree = '20litr.jpg'
            description.one = 'Чистая вода в 5-литровой бутылке'
            description.two = 'Чистая вода в 10-литровой бутылке'
            description.three = 'Чистая вода в 20-литровой бутылке'
            id.one = 'Water-one'
            id.two = 'Water-two'
            id.three = 'Water-three'

            break
        case 'Фильтры':
            path.imageOne = 'kuvshin1.jpg'
            path.imageTwo = 'kuvshin2.jpg'
            path.imageThree = 'kuvshin3.jpg'
            description.one = 'Отличный фильтрующий чайник в голубой расцеветке'
            description.two = 'Отличный фильтрующий чайник в зеленой расцеветке'
            description.three = 'Отличный фильтрующий чайник в белой расцеветке'
            id.one = 'Filter-one'
            id.two = 'Filter-two'
            id.three = 'Filter-three'
            break
        case 'Ионизаторы':
            path.imageOne = 'ion1.jpg'
            path.imageTwo = 'ion2.jpg'
            path.imageThree = 'ion3.jpg'
            description.one =
                'Ионизатор F-5234 фильтрующий воду и убивающий около 90% бактерий'
            description.two =
                'Ионизатор AF-344 фильтрующий воду и убивающий около 90% бактерий'
            description.three =
                'Ионизатор C-744 фильтрующий воду и убивающий около 90% бактерий'
            id.one = 'Ion-one'
            id.two = 'Ion-two'
            id.three = 'Ion-three'
            break
        case 'Кулеры':
            path.imageOne = 'kuler1.jpg'
            path.imageTwo = 'kuler2.jpg'
            path.imageThree = 'kuler3.png'
            description.one =
                'Малогабаритный кулер CM-23, подходящий под любой офис'
            description.two =
                'Курпогабаритный кулер AS-439, зарекомендоваший себя на рынке, как лидера '
            description.three = 'Малогабартиный кулер R-123, относительно новый'
            id.one = 'Culer-one'
            id.two = 'Culer-two'
            id.three = 'Culer-three'
            break
        default:
            break
    }

    return (
        <>
            <div className="goods" id={props.title}>
                <div className="goods__background">
                    <h1 className="goods__title">{props.title}</h1>
                </div>

                <div className="goods__card row">
                    <Good
                        path={path.imageOne}
                        description={description.one}
                        id={id.one}
                    />
                    <Good
                        path={path.imageTwo}
                        description={description.two}
                        id={id.two}
                    />
                    <Good
                        path={path.imageThree}
                        description={description.three}
                        id={id.three}
                    />
                </div>
            </div>
        </>
    )
}
export default Goods
