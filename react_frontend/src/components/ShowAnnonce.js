import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowAnnonce = () => {

    const [Annonce, setAnnonce] = useState([])

    const fetchAnnonce = async () => {
        const result = await axios.get('http://localhost:8000/api/');

        console.log(result.data)
        setAnnonce(result.data)
    }

    useEffect(() => {
        fetchAnnonce();
    }, [])

    const goToDetail = () => {
        alert("detail page")
    }

    return (
        <div>

            <div className="main-annonce-show">
            {
                Annonce.map((Annonce, index) => (
                    <Card className="m-3 rounded shadow-lg main-annonce-show" style={{ width: '22em' }}>

                    <Card.Img variant="top" src={Annonce.photo} />

                    <Card.Body>

                        <Card.Title>{Annonce.annonceur}</Card.Title>
                        <Card.Text> {Annonce.info_contact} </Card.Text>
                        <Card.Text> {Annonce.theme} </Card.Text>
                        <Card.Text> {Annonce.categorie} </Card.Text>
                        <Card.Text> {Annonce.modaliter} </Card.Text>
                        <Card.Text> {Annonce.dat} </Card.Text>
                        <Card.Text> {Annonce.tarif} </Card.Text>
                        <Card.Text> {Annonce.description} </Card.Text>
                        <Card.Text> {Annonce.favorite} </Card.Text>


                        
                        <Link className="btn btn-primary mr-2" to={`/${Annonce.id}`}>plus de detail</Link>

                    </Card.Body>
                    </Card>
                ))

            }
            </div>
           
            
        </div>
    );
};

export default ShowAnnonce;