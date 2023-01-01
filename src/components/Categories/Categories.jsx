import { Link } from "react-router-dom"
import "./Categories.css"

const Categories = ()=>{
    return <>
        <section className="container">
            <div className="container-fluid my-5">
                <div className="heading">
                    <h1 className="p-md-5 p-sm-2 p-1 text-center">Categories</h1>
                </div>
            </div>
            <div className="row p-0 my-4 flex-wrap">
                <div className='col-md-4 col-sm-6 col-6 p-2 mx-auto'>
                    <div className='card category-card'>
                        <div className='card-overlay text-center flex-wrap d-flex align-items-center justify-content-center'>
                            <div className='my-auto'>
                                <h1 className='card-title w-100 col-12 text-center text-light'>
                                    Agriculture
                                </h1>    
                                <Link to='#' className='card-link btn bg-dark text-light'>View More</Link>
                            </div>
                        </div>
                        <Link to='#'>
                            <img src='images/category/agriculture.jpeg' alt='agriculture' className='card-img-top img-fluid' style={{"height":"240px"}} />
                        </Link>
                    </div>           
                </div>
                <div className='col-md-4 col-sm-6 col-6 p-2 mx-auto'>
                    <div className='card category-card'>
                        <div className='card-overlay text-center flex-wrap d-flex align-items-center justify-content-center'>
                            <div className='my-auto'>
                                <h1 className='card-title w-100 col-12 text-center text-light'>
                                    Bunglow
                                </h1>    
                                <Link to='#' className='card-link btn bg-dark text-light'>View More</Link>
                            </div>
                        </div>
                        <Link to='#'>
                            <img src='images/category/bunglow.jpg' alt='bunglow' className='card-img-top img-fluid' style={{"height":"240px"}} />
                        </Link>
                    </div>        
                </div>
                <div className='col-md-4 col-sm-6 col-6 p-2 mx-auto'>
                <div className='card category-card'>
                        <div className='card-overlay text-center flex-wrap d-flex align-items-center justify-content-center'>
                            <div className='my-auto'>
                                <h1 className='card-title w-100 col-12 text-center text-light'>
                                    Flats
                                </h1>    
                                <Link to='#' className='card-link btn bg-dark text-light'>View More</Link>
                            </div>
                        </div>
                        <Link to='#'>
                            <img src='images/category/flats.jpeg' alt='Flats' className='card-img-top img-fluid' style={{"height":"240px"}} />
                        </Link>
                    </div> 
                </div>
                <div className='col-md-4 col-sm-6 col-6 p-2 mx-auto'>
                <div className='card category-card'>
                        <div className='card-overlay text-center flex-wrap d-flex align-items-center justify-content-center'>
                            <div className='my-auto'>
                                <h1 className='card-title w-100 col-12 text-center text-light'>
                                    NA Land
                                </h1>    
                                <Link to='#' className='card-link btn bg-dark text-light'>View More</Link>
                            </div>
                        </div>
                        <Link to='#'>
                            <img src='images/category/naland.jpg' alt='naland' className='card-img-top img-fluid' style={{"height":"240px"}} />
                        </Link>
                    </div>    
                </div>
                <div className='col-md-4 col-sm-6 col-6 p-2 mx-auto'>
                    <div className='card category-card'>
                        <div className='card-overlay text-center flex-wrap d-flex align-items-center justify-content-center'>
                            <div className='my-auto'>
                                <h1 className='card-title w-100 col-12 text-center text-light'>
                                    Plot
                                </h1>    
                                <Link to='#' className='card-link btn bg-dark text-light'>View More</Link>
                            </div>
                        </div>
                        <Link to='#'>
                            <img src='images/category/plot.jpeg' alt='plot' className='card-img-top img-fluid' style={{"height":"240px"}} />
                        </Link>
                    </div>   
                </div>
                <div className='col-md-4 col-sm-6 col-6 p-2 mx-auto'>
                <div className='card category-card'>
                        <div className='card-overlay text-center flex-wrap d-flex align-items-center justify-content-center'>
                            <div className='my-auto'>
                                <h1 className='card-title w-100 col-12 text-center text-light'>
                                    Villas
                                </h1>    
                                <Link to='#' className='card-link btn bg-dark text-light'>View More</Link>
                            </div>
                        </div>
                        <Link to='#'>
                            <img src='images/category/villas.jpg' alt='villas' className='card-img-top img-fluid' style={{"height":"240px"}} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}
                    


export default Categories;