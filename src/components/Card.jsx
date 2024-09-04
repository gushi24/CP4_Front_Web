import '../css/card.css'

const Card=(props)=>{
    return (
        <>
            <div className="card">
                <div className="cardImage"><img src='{props.productImage}' alt='Product Image'></img></div>
                <div className="category"><h2>{props.name}</h2></div>
                <div className="heading"><p>{props.productDesc}</p>
                    <div className="author">{props.onStock ? "On Stock" : "Out of Stock"} ${props.value}</div>
                </div>
            </div>
        </>
    )
}
export default Card