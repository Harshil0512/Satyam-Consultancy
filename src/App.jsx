import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header/header";
import MidSection from "./components/MidSection/MidSection";
import "./App.css"
import Categories from "./components/Categories/Categories";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnerSlider from "./components/PartnerSlider/PartnerSlider";


const App = ()=>{
    return <BrowserRouter>
        <div className="bg-img">
            <Header />
            <MidSection />
        </div>
            <Categories />
            <section className="container-fluid p-0 about">
                <div className="d-flex m-0 p-0 justify-content-md-between flex-wrap pb-sm-5 pb-5 pb-md-0">
                    <div className="col-md-6 col-sm-12">
                        <img src="images/about-image.jpeg" alt="About-us" className="img-fluid mw-25" />
                    </div>
                    <div className="col-md-5 col-sm-12 mx-2 my-auto py-md-0 p-sm-5">
                        <h3 className="title text-md-start text-sm-center text-center">
                            About Us
                        </h3>
                        <p className="my-4 text-md-start text-sm-center text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className="text-md-start text-sm-center text-center">
                            <Link href ="#" className="read-more my-0">
                                <div className="read-more-transition"></div>
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid p-0">
                <div className="container heading my-5">
                    <h1 className="p-md-5 p-sm-2 p-1 text-center">Brokers</h1>
                </div>
                {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-content flex-wrap my-auto">
                            <img src="Assets/images/profile.png" className="d-block col-12 mt-4 rounded-circle carousel-profile img-fluid" alt="..." />
                            <div className="text-center col-12 my-4">
                                <h5 className="fs-1">Your Name</h5>
                                <p className="text-secondary">Something About You</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-content flex-wrap my-auto">
                            <img src="Assets/images/profile.png" className="d-block col-12 mt-4 rounded-circle carousel-profile img-fluid" alt="..." />
                            <div className="text-center col-12 my-4">
                                <h5 className="fs-1">Your Name</h5>
                                <p className="text-secondary">Something About You</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-content flex-wrap my-auto">
                            <img src="Assets/images/profile.png" className="d-block col-12 mt-4 rounded-circle carousel-profile img-fluid" alt="..." />
                            <div className="text-center col-12 my-4">
                                <h5 className="fs-1">Your Name</h5>
                                <p className="text-secondary">Something About You</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </Link>
                <Link className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </Link>
                </div> */}
                <PartnerSlider />
            </section>


    </BrowserRouter>
}

export default App;