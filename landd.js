import React from "react";
import NavScrollExample from "./nav";
import { Col, Container,Row } from "react-bootstrap";
 function Final(){
    return(
        <>
        <NavScrollExample/>
        <div className="c">
            <Container>
                <h1 style={{textAlign:"center",marginTop:50}}>Final Project</h1>
                <Row xs={1} md={3}>
                    <Col>
                    <img src='https://wallpaperaccess.com/full/1311181.jpg' alt="" width='270' height='480' style={{
                        
                    }} />
                    </Col>
                    <Col >
                    <p style={{fontSize: 26, lineHeight:'1.5', marginLeft: '9%', textIndent
                    : '9%' , fontWeight: 'bold' }}></p>
                    
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
 }
 export default Final;