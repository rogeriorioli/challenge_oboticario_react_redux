import React, {useState} from 'react';
import { connect } from 'react-redux'
import logo from '../../assets/logo.png'
import * as S from './styles';
import { MdMenu, MdClose, MdShoppingCart } from "react-icons/md";


 
function Header({cart}) {
    const [openMenu , setOpenMenu ] = useState(false);

    const  handleOpen = () => {
        setOpenMenu(!openMenu)
    }
    const menu = [
            {
                label :"PERFUMARIA" ,
                url :  ''
            },
            {
                label :"MAQUIAGEM" ,
                url :  ''
            },
            {
                label :"CABELOS"  ,
                url :  ''
            },
            {
                label : "INFANTIl" ,
                url :  ''
            }                               
    ]
  return (
    <S.Header>
        <div className="logo">
            <img src={logo} alt="O Boticario"/>
        </div>
        <div className={`menu ${openMenu !== true ? '' : 'active'} `} onClick={handleOpen}>
            {openMenu !== true ? <MdMenu size={30} color="#fff"/> : <MdClose size={30} color="#fff"/> }
             <nav className={`menu-navbar ${openMenu !== true ? 'hide' : 'show'}`}>   
                <ul>
                    {menu.map(list => {
                        return(
                            <li key={list.label}>
                                <a href={list.url}>{list.label}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div> 
        <div className="cart">
           <MdShoppingCart size="30px" color="#333"/>
              { cart.Value === undefined ? 'R$ 00.0' : `R$ ${cart.Value}` }
              {cart.name === undefined ? '' : 
              <>   
                <div className="view-cart"> 
                <div className="row">
                    {cart.images === undefined ? 'carrinho vazio' : 
                    cart.images.map(imagem => 
                            <div className="image" key={Math.random()}> 
                                <img src={imagem.imageUrl} alt=""/>
                            </div>
                        )}
                    
                {cart.name === undefined ? ''  : 
                    <>
                    <div className="name">
                        <p>{cart.name}</p>
                        <span>{`R$ ${cart.Value}`}</span>
                    </div>
                    </>
                }
                </div>
                {cart.name === undefined ? ''  : 
                    <button className="checkout">
                            Finalizar Compra
                    </button>  
                
                }
                </div>
              </>
            }
        </div> 
    </S.Header>
  );
}
export default connect(state => ({ 
    cart : state.cart
    
}))(Header);