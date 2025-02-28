import "./carousel.css"
import Lingua from "../../assets/carousel-img/lingua.jpeg"
import Midia from "../../assets/carousel-img/midia.jpeg"
import Olhos from "../../assets/olhos.jpeg"
import Maos from "../../assets/carousel-img/mao.jpeg"
import Formatura from "../../assets/carousel-img/formatura.jpeg"
import Beijo from "../../assets/carousel-img/beijo.jpeg"
import Junina from "../../assets/carousel-img/junina.jpeg"

export function Carousel() {
    return (
        <section className="carousel-vv p-5">
            <div id="carouselExampleDark" class="carousel carousel-dark slide p-5">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={Lingua} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block">
                            <h5>10/03/2023</h5>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Midia} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block">
                            <h5>24/04/2023</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Olhos} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block">
                            <h5>03/08/2023</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Maos} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block">
                            <h5>13/09/2023</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Formatura} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block">
                            <h5>14/12/2023</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Beijo} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block">
                            <h5>14/12/2023</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Junina} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block">
                            <h5>15/06/2024</h5>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}