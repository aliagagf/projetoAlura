import React from "react";
import './Header.css';
import smallLeft from '../../src/assets/icons/small-left.png';
import smallRight from '../../src/assets/icons/small-right.png';
import search from '../../src/assets/icons/search.png';

const Header = () => {
    return(
        <nav className="header_navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="Seta esquerda"/>
                    </button>
                    <button className="arrow-right">
                        <img src={smallRight} alt="Seta direita"/>
                    </button>
                </div>
                 <div className="header_search">
                    <img src={search} alt=""/>
                    <input id= "search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?"  />
                </div>
                    
                <div className="header_login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
    )
};

export default Header;
