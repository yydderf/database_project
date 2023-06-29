import React from 'react'
import { CRow, CCard, CCol, CCardTitle, CCardBody, CCardImage, CCardText } from '@coreui/react'
import { Container } from 'react-bootstrap'

export default function Data() {
    var action = [{"name": 'upload', "src": "/public/upload.svg", "text": "upload"},
                  {"name": 'update', "src": "/public/update.svg", "text": "update"},
                  {"name": 'delete', "src": "/public/delete.svg", "text": "delete"}]
  return (
    <>
        <div className="mb-0 bg-black">
            <h2 style={{color: "white", textAlign: "center", marginBottom: 40}}>
                Data Center
            </h2>
            <Container className="d-flex justify-content-around">
                <img src="/public/database.svg" width={560} height={560} style={{opacity: 0.3, marginBottom: "30px"}}/>
                <h3 className="align-items-center" style={{color: "white", textAlign: "center"}}>
                    Interact with the database via
                    <li>API</li>
                    <li>Web Interface</li>
                </h3>
            </Container>
            <Container className="mb-0 bg-black">
                <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} >
                {action.map((act, index) => {
                    return (
                        <CCol xs>
                            <CCard style={{ cursor: "pointer", border: "0" }} onClick={event => window.location.href="/Data/" + (act.name)}>
                                <CCardImage className="bg-black" orientation="top" src={act.src} width={50} height={100}/>
                                <CCardBody className="bg-black">
                                    <CCardTitle style={{color: "white"}}>{act.name}</CCardTitle>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    )
                })}
                </CRow>
            </Container>
        </div>
    </>
  )
}