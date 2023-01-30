import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const AnnonceDetail = () => {

const [annonce, setAnnonce] = useState([])

const {id} = useParams();
const history = useHistory();

useEffect(() => {
    getSingleAnnonce();
},[])


const getSingleAnnonce = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
  console.log(data);
  setAnnonce(data);
  

}

const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    history.push("/")
}



    return (
        <div>
            <h2>Detail d'une Annonce </h2>
            <hr></hr>
            <div className="full-Annonce-detail">
                <img src={annonce.photo} height="300" width="500"/>
                <div className="annonce-detail">
                    <p>{annonce.annonceur}</p>
                    <p>{annonce.info_contact}</p>
                    <p>{annonce.theme}</p>
                    <p>{annonce.categorie}</p>
                    <p>{annonce.modaliter}</p>
                    <p>{annonce.dat}</p>
                    <p>{annonce.tarif}</p>
                    <p>{annonce.description}</p>
                    <i>{annonce.favorite}</i>
                </div> 
            </div>
           

          

            <Link className="btn btn-outline-primary mr-2" to={`/${annonce.id}/update`}>modifier</Link>
            <Link className="btn btn-danger" onClick={() => deleteUser(annonce.id)}>Supprimer</Link>
        </div>
    );
};

export default AnnonceDetail;