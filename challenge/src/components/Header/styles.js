import styled from 'styled-components';
export const Header = styled.header`
    
    border-bottom : 1px solid #ccc ;
    padding : 10px 15px;
    display : flex;
    justify-content  : space-between;
    align-items : center;
    .logo {
        img{
        width : 90%;
        }
      }
    .menu {
        svg {
            display : none;
        }
        @media screen and (max-width:769px){
            position : fixed;
            bottom : 10px;
            width : 50px;
            height : 50px;
            background : goldenrod;
            border-radius : 50%;
            z-index : 99999;
            transition : all 0.5s;
            padding : 30px; 
            svg {
                display : block;
                position :absolute;
                left: 15px;
                bottom : 15px;
            }
            &.active {
                width : 300px;
                height : auto;
                border-radius : 20px;
            }
            &-navbar{
                &.hide {    
                    display :none;
                }
                &.show {
                    display :block;
                }
                ul {
                    li{
                        display : block !important;
                        text-align : center;
                        padding : 15px 0;
                        a{
                             color : #fff !important;
                        }
                    }
                }  
            }
        }
    }
    .menu-navbar { 
        ul {
            li {
                display : inline-block ;
                margin : 0 20px;
                a{
                    color : #333;
                    text-decoration : none;
                    transition : all 0.5s;
                    &:hover {
                        color : goldenrod;

                    }
                }
            }
        }
        
    }
    .cart{
        padding : 5px ;
        border : 1px solid #ccc;
        border-radius : 10px;
        display : flex;
        width: 121px;
        align-items : center;
        position: relative;
        color : green;
        font-weight : bold;
        cursor: pointer;
        &:hover {
         >.view-cart {
            visibility : visible;
            margin-top : 110px;
            opacity: 1;
            z-index :9999;
            
         }
        }
        .view-cart{
            transition : opacity 0.5s;
            position: absolute;
            background : #fff;
            margin-top : 0;
            width : 300px;
            left : -200px;
            border : 1px solid #ccc;
            border-radius : 10px;
            padding : 5px;
            opacity : 0;
            color : #000;
            visibility :hidden;
            &.undefined {
                display :none;
            }
            .row {
                display : flex;
                justify-content : space-between;
                align-items: center;
            }
            img {
                width : 80px;
                object-fit : cover;
                margin-right : 10px;
            }
            span {
                font-weight : 600;
                color : goldenrod;
            }
            .checkout {
                flex-flow : 2;
                width : 100%;
                background : goldenrod;
                color : #fff;
                padding : 10px;
                font-weight :600;
                text-transform : uppercase;
            }
        }
    }
`;
