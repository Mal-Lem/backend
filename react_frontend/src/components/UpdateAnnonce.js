import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateAnnonce = () => {

    let history = useHistory();
    const { id } = useParams();

    const [photo, setPhoto] = useState(null)
    const [annonceur, setAnnonceur] = useState(null)
    const [info_contact, setInfo_contact] = useState(null)
    const [modaliter,setModaliter] = useState(null)
    const [categorie, setCategorie] = useState(null)
    const [theme,setTheme] = useState(null)
    const [dat,setDat] = useState(null)
    const [tarif,setTarif] = useState(null)
    const [description,setDescription] = useState(null)
    useEffect(() => {
        loadAnnonce();
    }, [])


    // load annonce by its is and show data to forms by value

   let loadAnnonce = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    console.log(result.data.name);

    setPhoto(result.data.photo);
    setAnnonceur(result.data.annonceur);
    setInfo_contact(result.data.info_contact);
    setModaliter(result.data.modaliter);
    setCategorie(result.data.categorie);
    setTheme(result.data.theme);
    setDat(result.data.dat);
    setTarif(result.data.tarif);
    setDescription(result.data.description);
   }


// Update s annonce by id

   const updateSingleAnnonce = async () => {
        let formField = new FormData()

        formField.append('annonceur',annonceur)
        formField.append('info_contact',info_contact)
        formField.append('theme',theme)
        formField.append('categorie',categorie)
        formField.append('modaliter',modaliter)
        formField.append('date',dat)
        formField.append('tarif',tarif)
        formField.append('description',description)

        if(photo !== null) {
          formField.append('photo', photo)
        }

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })

    }



    

    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">modifier annonce</h2>
    

    <div className="form-group">
        <label>Image</label>
             <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])}/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="annonceur"
              value={annonceur}
              onChange={(e) => setAnnonceur(e.target.value)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your phone number"
              name="Info_contact"
              value={info_contact}
              onChange={(e) => setInfo_contact(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your theme(modul)"
              name="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your categorie (niveau)"
              name="categorie"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your modaliter"
              name="modaliter"
              value={modaliter}
              onChange={(e) => setModaliter(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your date"
              name="date"
              value={dat}
              onChange={(e) => setDat(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your tarif"
              name="tarif"
              value={tarif}
              onChange={(e) => setTarif(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
      </div>
      <button onClick={updateSingleAnnonce} className="btn btn-primary btn-block">modifier annonce</button>
   
  </div>
</div>
 
    );
};

export default UpdateAnnonce;