import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux'
import  *  as S from './styles';
import Title from '../Title'


function addToCart(cart, price, name, image) {
        return {
            type : 'SEND_CART',
            cart,
            price,
            name, 
            image
        }
}

const Product = ({items, dispatch}) => {   
  return (
      <>
        <Title/>
        {items.map(item => {
            return(
                <S.ProductCard 
                    key={item.name} 
                    onClick={() => dispatch(addToCart(item, item.Value, item.name , item.images))} >
                    <div className="product-card-body">
                        <figure>
                            {item.images.map(image =>  
                                <img src={image.imageUrl} key={Math.random()} alt={item.name}/>
                             )}
                        </figure>
                        <div className="product-card-details">
                            <h2>{item.name}</h2>
                            <CurrencyFormat  displayType={'text'} prefix={'R$'} thousandSeparator={true}  value={item.Value}/>
                        
                        </div>
                    </div>
                    
                </S.ProductCard> 
            )
        })}
    </>
  );
}

export default connect(state => ({ 
    items: state.items,
    cart : state.cart
  }))(Product);

