import * as S from './styles';
import parseHtml from 'html-react-parser';

interface ProductHeader {
    name: string;
    whatIsItFor: string;
} 

const ProductHeader = ({ name, whatIsItFor }: ProductHeader) => {
    return (
        <S.Wrapper>
            <h1>{name}</h1>
            <S.WhatIsItForWrapper>
                <span><b>Pra que serve:</b> {parseHtml(whatIsItFor)}</span>
            </S.WhatIsItForWrapper>
        </S.Wrapper>
    )
};

export default ProductHeader;