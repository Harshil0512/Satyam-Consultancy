import Slider from "react-slick";
import "./PartnerSlider.css"


const PartnerSlider = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
            <div className="carousel-inner">
                <div className="active">
                    <div className="carousel-content flex-wrap my-auto">
                        <img src="images/DhavalProfile.jpg" alt="Dhaval Dave" className="d-block col-12 mt-4 rounded-circle carousel-profile img-fluid"/>
                        <div className="text-center col-12 my-4">
                            <h5 className="fs-1">Dhaval Dave</h5>
                            <p className="text-secondary">Founder</p>
                        </div>
                    </div>
                </div>
            </div>
          <div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="carousel-content flex-wrap my-auto">
                      <img src="images/DixitProfile.jpg" alt="Dixit Dave" className="d-block col-12 mt-4 rounded-circle carousel-profile img-fluid" />
                      <div className="text-center col-12 my-4">
                          <h5 className="fs-1">Dixit Dave</h5>
                          <p className="text-secondary">Co-Founder</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </Slider>
      );
}

export default PartnerSlider