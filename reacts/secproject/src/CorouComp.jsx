import bluebox from './assets/bluebox.jpg';
import redbox from './assets/redbox.jpg';
import greenbox from './assets/greenbox.jpg';

function CorouComp(props) {
    return <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={redbox} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Vintage Books Exhibition</h5>
                        <p>Vintage books collection that you will savour</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={greenbox} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Old Books Exhibition</h5>
                        <p>Old books collection that you will savour</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bluebox} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>New Books Exhibition</h5>
                        <p>New books collection that you will savour</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    </>
}

export default CorouComp;