import React from 'react';

import * as S from './styles';
import Header from '../components/Header';

const Layouts = ({children}) => {
    return (
        <>
       <Header /> 
        <S.MainWrapper>
            <S.Container>
              {children}
            </S.Container>
        </S.MainWrapper>
        </>
    )
};

export default Layouts;
