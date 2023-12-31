import React,{useState,useEffect} from "react";

const Home = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);

    return (
    <>
        { loading ? <div id="loading"></div> : <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column">
                                <h1>Grow Your Business</h1>
                                <strong>React Learning</strong>
                                <h2>
                                    We are team of talented devloper making websites
                                </h2>
                            </div>
                            <div className="col-lg-6 header-img">
                                <img src="/images/home.svg" className="img-fluid animated" alt="home img" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        }
    </>
    );
}

export default Home;