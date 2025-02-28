import "./index.css"
import PorDoSol from "../../assets/PorDoSol.jpeg"

export function Main () {
    return (
        <section className="main-vv p-5 d-md-flex align-items-center gap-5">
            <div className="photo-vv d-flex d-md-none justify-content-center pb-4">
                <img src={PorDoSol} class="img-fluid" alt="nossa foto mais linda" />
            </div>
            <div className="title-vv d-flex px-md-5">
                <h1 className="pb-2">Vinicius & Vitória</h1>
                <h2 className="pb-2">01/03/2025</h2>
                <p>Feliz nossos 2 anos meu amor, criei este site para registrar alguns momentos que eu considero marcantes nesses dois anos. Espero que goste, te amo.</p>
            </div>
            <div className="photo-vv d-none d-md-flex">
                <img src={PorDoSol} class="img-fluid" alt="nossa foto mais linda" />
            </div>
        </section>
    )
}