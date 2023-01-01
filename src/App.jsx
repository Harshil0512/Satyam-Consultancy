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
                    <h1 className="p-md-5 p-sm-2 p-1 text-center">Founders</h1>
                </div>
                <PartnerSlider />
            </section>


    </BrowserRouter>
}

export default App;