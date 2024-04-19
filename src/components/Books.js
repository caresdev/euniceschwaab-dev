import {Image, Container, Col, Row, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import '../style/Books.css';

const Books = () => {
    return(
        <div className="books-section">
            <Container fluid>
                <Row className="justify-content-center py-2">
                    <Col xs={10}>
                        <h2 className="my-5 text-center">Schwaab&apos;s Best Selling in Amazon</h2>
                        <Row className='best-selling p-4'>
                            <Col>
                                <Image src="./assets/stories-from-hell.png" alt="Stories From Hell cover" className='best-selling-cover-img'/>
                            </Col>
                            <Col>
                                <div className='rating-stars my-4'>
                                    <Row>
                                        <Col className='rating'>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='rating-comment my-4'>
                                    <p> 
                                        “A very well written book of short stories. 
                                        This 13-year-old girl has a bright future as a horror novelist ahead of her. 
                                        Well worth the read”.
                                    </p>
                                    <p>Eric Bruce</p>
                                </div>
                                <Button className='rating-button'>Buy Now</Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center py-4">
                    <Col xs={10}> 
                        <h2 className="my-5 text-center">Featured Books</h2>
                        <Row className="featured-books">
                            <Col xs={3} lg={4}>
                                <Image src="" alt="" className='book-cover'/>
                                <h3 className='book-title'>Book 1</h3>
                                <Button></Button>
                            </Col>
                            <Col xs={3} lg={4}>
                                <Image src="" alt="" className='book-cover'/>
                                <h3 className='book-title'>Book 2</h3>
                                <Button></Button>
                            </Col>
                            <Col xs={3} lg={4}>
                                <Image src="" alt="" className='book-cover'/>
                                <h3 className='book-title'>Book 3</h3>
                                <Button></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>

    );

};

export default Books;