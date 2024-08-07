import {Image, Container, Col, Row, Button} from 'react-bootstrap';
import { HashLink as Link } from "react-router-hash-link";
import '../style/Arts.css';


const Arts = () => {
    return(
        
        <div id="arts" className="section-container arts-section">
            <Container fluid>

                {/* Arts */}
                <Row>
                    <Col> 
                        <h2 className="mt-5 mb-4 pt-2 px-4 text-center fw-semibold">Schwaab&apos;s Artistry</h2>
                        <Row className="p-3 p-sm-4 mb-4 justify-content-between align-items-center">
                            <Col md={6} lg={4} className='p-3 my-3 text-center'>
                                <Image src="./assets/arts/melancholy-lake.png" alt="Melancholy Lake art by Eunice Schwaab" className='art-cover mb-4'/>
                                <h5 className='mb-4'>Melancholy Lake</h5>
                            </Col>
                            <Col  md={6} lg={4} className='p-3 my-3 text-center'>
                                <Image src="./assets/arts/perspective.png" alt="Perspective art by Eunice Schwaab" className='art-cover mb-4'/>
                                <h5 className='mb-4'>Perspective</h5>
                            </Col>
                            <Col  md={6} lg={4} className='p-3 my-3 text-center'>
                                <Image src="./assets/arts/the-colored-carcass.png" alt="The Colored Carcass art by Eunice Schwaab" className='art-cover mb-4'/>
                                <h5 className='mb-4'>The Colored Carcass</h5>
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-center mb-5'>
                            <Button as={Link} to="/gallery" className='primary-button'>
                                See More
                            </Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );

};

export default Arts;