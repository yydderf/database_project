import { CCard, CCardImage, CCardBody, CCardTitle, CButton, CCardText, CRow, CCol } from "@coreui/react";
import { Container } from "react-bootstrap";

export default function TeamCards() {

    var teams = [{"name": 'Lakers', "src": "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg", "text": "Los Angeles"},
                 {"name": 'Knicks', "src": "https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg", "text": "New York"},
                 {"name": 'Celtics', "src": "https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg", "text": "Boston"},
                 {"name": 'Cavaliers', "src": "https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg", "text": "Cleveland"},
                 {"name": 'Timberwolves', "src": "https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg", "text": "Minnesota"},
                 {"name": 'Pistons', "src": "https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg", "text": "Detroit"},
                 {"name": 'Warriors', "src": "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg", "text": "Golden State"},
                 {"name": 'Rockets', "src": "https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg", "text": "Houston"},
                 {"name": 'Suns', "src": "https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg", "text": "Phoenix"},
                 {"name": 'Bulls', "src": "https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg", "text": "Chicago"},
                 {"name": 'Kings', "src": "https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg", "text": "Sacramento"},
                 {"name": 'Nets', "src": "https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg", "text": "Brooklyn"},
                 {"name": 'Bucks', "src": "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg", "text": "Milwaukee"},
                 {"name": '76ers', "src": "https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg", "text": "Philadelphia"},
                 {"name": 'Heat', "src": "https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg", "text": "Miami"},
                 {"name": 'Pelicans', "src": "https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg", "text": "New Orleans"},
                 {"name": 'Hornets', "src": "https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg", "text": "Charlotte"},
                 {"name": 'Spurs', "src": "https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg", "text": "San Antonio"},
                 {"name": 'Hawks', "src": "https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg", "text": "Atlanta"},
                 {"name": 'Mavericks', "src": "https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg", "text": "Dallas"},
                 {"name": 'Wizards', "src": "https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg", "text": "Washington"},
                 {"name": 'Nuggets', "src": "https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg", "text": "Denver"},
                 {"name": 'Jazz', "src": "https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg", "text": "Utah"},
                 {"name": 'Raptors', "src": "https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg", "text": "Toronto"}]

    return (
        <div className="m-0 bg-black"> 
            <Container className="mb-0 bg-black">
                <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 6 }} >
                {teams.map((team, index) => {
                    return (
                        <CCol xs>
                            <CCard style={{ cursor: "pointer" }} onClick={event => window.location.href="/Teams/" + (team.name)}>
                                <CCardImage orientation="top" src={team.src}/>
                                <CCardBody>
                                    <CCardTitle>{team.name}</CCardTitle>
                                    <CCardText>{team.text}</CCardText>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    )
                })}
                </CRow>
            </Container>
        </div>
    )
}