import styled from 'styled-components';
export const ProductCard = styled.div`
    width : 31%;
    display : inline-block;
    padding : 15px;
    margin : 1%;
    border : 1px solid #ccc;
    min-height : 450px;
    vertical-align : top;
    cursor: pointer;
    @media screen and (max-width:769px){
      width : 48% ;  
     
    } 
    @media screen and (max-width:468px){
      width :90%;  
      margin : 2% 5%;
    } 

    .product-card-body {
        figure {
            height : 300px;
            img {
                width : 100%;
                height : 300px;
                object-fit : cover;
                transition : all 0.5s;
                transform : scale(0.8);
                &:hover {
                    transform : scale(1.1);
                    transition : all 0.5s;
                }
            }
        }
      .product-card-details {
          text-align : center ;
          padding : 20px 0;
          h2 {
            min-height : 60px;
            font-size: 16px;
            vertical-align : text-top;
          }
          span {
              font-weight : bold;
              color : goldenrod;
              font-size : 25px;
          }
      }  
    }
`;
