import '../css/card.css'
import PropTypes from 'prop-types'

const Card=(props)=>{
    return (
        <>
            <div className="card">
                <div className="cardImage"><img source={props.productImage} alt={props.imageAlt} /></div>
                <div className="category"><h2>{props.name}</h2></div>
                <div className="heading"><p>{props.productDesc}</p>
                    <div className="value">
                        {props.onStock ? <h4 className='onStock'>On Stock</h4> : <h4 className='outStock'>Out of Stock</h4>} <h4 className='price'>${props.value}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes={
    imageAlt: PropTypes.string,
    name: PropTypes.string,
    productDesc: PropTypes.string,
    onStock: PropTypes.bool,
    value: PropTypes.number
}

Card.defaultProps={
    imageAlt: "Image Description",
    name: "Product Name",
    productDesc: "Product Description",
    onStock: false,
    value: 0
}

export default Card