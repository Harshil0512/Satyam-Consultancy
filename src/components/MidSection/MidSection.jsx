import "./MidSection.css"

const MidSection = ()=>{
    return <>
        <section className="container text-center content d-flex align-items-center justify-content-center">
            <div className="container-fluid">
                <h1 className="text-center text-light header-content">Find Your Property Today!</h1>
                <p className="header-content-small mt-2">
                    Choose Your Location
                </p>
                <form action="#" className="row col-md-10 col-sm-12 mx-auto">
                    <div className="col-md-3 col-sm-12 my-1 mx-0 px-1">
                        <label htmlFor="pin" className="visually-hidden">Pincode</label>
                        <input type="number" id="pin" className="form-control py-3" placeholder="Pincode" />
                    </div>
                    <div className="col-md-3 col-sm-12 my-1 mx-0 px-1">
                        <select name="city" id="city" className="form-select py-3" placeholder="Select City">
                            <option defaultValue>City</option>
                                <option value=''></option>
                        </select>
                    </div>
                    <div className="col-md-3 col-sm-12 my-1 mx-0 px-1">
                        <select name="Real Estate" id="Real Estate" className="form-select py-3" placeholder="Select Property">
                            <option defaultValue>Real Estate</option>
                            <option value='HK'>Option1</option>";
                        </select>
                    </div>
                    <div className="col-md-3 col-sm-12 my-1 mx-0 px-1">
                        <input type="submit" className="form-control submit-btn text-light fw-bold"/>
                    </div>
                </form>
            </div>        
        </section>
    </>
}

export default MidSection;