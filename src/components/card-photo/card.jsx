import "./card.css"

export function CardPhoto(props) {
    return (
        <div className="card-photo px-2 pt-2 pb-3">
            <div className="pb-1">
                <img src={props.image} class="img-fluid" alt="foto do card" />
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center text-center">
                <h3>{props.date}</h3>
            </div>
        </div>
    )
}