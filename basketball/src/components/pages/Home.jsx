import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from "@coreui/react";
import Update from "/public/update.svg";
import Linear from "/public/linear.svg";
import Team from "/public/teams3.jpg";
import Foresee from "/public/foresee1.jpg";
import Player from "/public/player2.jpg";
import featureDiv from "/public/featureDiv.jpg";
import { Container } from "react-bootstrap";

export default function Home() {

    var carouselStyle = {
        padding: 0,
        border: 0,
        backgroundColor: "black",
        maxHeight: "875px"
    }

    var action = [{"name": 'upload', "src": "/public/upload.svg", "text": "upload"},
                  {"name": 'update', "src": "/public/update.svg", "text": "update"},
                  {"name": 'delete', "src": "/public/delete.svg", "text": "delete"}]

    return (
        <>
            <CCarousel controls transition="crossfade" indicators>
                <CCarouselItem className="bg-black">
                    <button style={carouselStyle} className="d-block w-100 mx-auto"
                     onClick={event =>  window.location.href='/Teams'}>
                        <img style={{opacity: 0.4}}
                         className="d-block w-100 mx-auto"
                         src={Team} alt="team image"
                        />
                    </button>
                    <CCarouselCaption className="d-none d-md-block">
                        <h3>Teams</h3>
                        <p>Check out the performance of your favorite team in the latest season</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem className="bg-black">
                    <button style={carouselStyle} className="d-block w-100 mx-auto"
                     onClick={event => window.location.href='/Players'}>
                        <img style={{opacity: 0.4}}
                         className="d-block w-100 mx-auto"
                         src={Player} alt="player image"
                        />
                    </button>
                    <CCarouselCaption className="d-none d-md-block">
                        <h3>Players</h3>
                        <p>Check out the performance of your favorite player in the latest season</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem className="bg-black">
                    <button style={carouselStyle} className="d-block w-100 mx-auto"
                     onClick={event => window.location.href='/Predict'}>
                        <img style={{opacity: 0.4}}
                         className="d-block w-100 mx-auto"
                         src={Foresee} alt="predict image"
                        />
                    </button>
                    <CCarouselCaption className="d-none d-md-block">
                        <h3>Prediction</h3>
                        <p>Predict which team will prevail in the upcoming season</p>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </>
    )
}
