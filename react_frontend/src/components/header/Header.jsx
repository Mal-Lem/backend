import React ,{useRef} from 'react';
import { Container } from 'reactstrap';
import user from '../../assets/user.png'
import './Header.css'


const navLinks=[
    {
        display:"Home",
        url:"#"
    },
    {
        display:"A propos",
        url:"#"
        },
    {
        display:"Cours",
        url:"#"
    },
    {
        display:"Avis",
        url:"#"
    },
]
const Header = () => {

const menuRef = useRef()
const menuToggle=()=>menuRef.current.classList.toggle('active__menu')

  return (
  <header className="header">
    <container>
        <div className="nav">
            <div className="navigation">
                <div className="logo">
                     <h2><span>Up</span>Grade</h2>
                 </div>
            </div>

           

            <div className="nav__menu " ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">
            {
                navLinks.map((item,index)=>(
                    <li key={index}className="nav__item">
                    <a href={item.url}>{item.display}</a>
                    </li>
                ))
            }        
                    
                    
                </ul>
            </div>

            <div className="nav__right">
                <h2>Connexion</h2>
                <button>Inscription</button>
        
            </div>
            
                 
            

            <div className="mobile__menu">
                <span><button onClick={menuToggle}>menu</button></span>
            </div>
            
        </div>
    </container>
  </header>  
  )
};
export default Header;
