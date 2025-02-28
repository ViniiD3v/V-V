import "./date.css"
import { CardPhoto } from "../../components/card-photo/card.jsx"
import Elevador from "../../assets/elevador.jpeg"
import Festa from "../../assets/festaJunina.jpeg"
import Quadra from "../../assets/quadra.jpeg"

export function Dates() {
    return (
        <section className="dates mb-5">
            <div className="px-4 mb-5">
                <div className="line-card-start d-flex justify-content-end mb-5">
                    <CardPhoto
                        image={Quadra}
                        date="EU"
                    />
                </div>
                <div className="line-card-middle my-5">
                    <CardPhoto
                        image={Festa}
                        date="TE"
                    />
                </div>
                <div className="line-card-end d-flex justify-content-end mt-5">
                    <CardPhoto
                        image={Elevador}
                        date="AMO"
                    />
                </div>
            </div>
        </section>
    )
}