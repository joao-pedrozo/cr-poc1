import * as S from './styles';
import parseHtml from 'html-react-parser';
import Image from 'next/image';

interface ProductHeader {
  name: string;
  whatIsItFor: string;
  substance: string;
  factory: string;
  hasPrescriptionType: boolean;
  classification: string;
}

const ProductHeader = ({ name, whatIsItFor, substance, factory }: ProductHeader) => {
  return (
    <S.Wrapper>
      <h1>{name}</h1>
      <S.HeaderBottom>
        <S.HeaderLeftSide>
          <S.WhatIsItForWrapper>
            <span>
              <b>Pra que serve:</b> {parseHtml(whatIsItFor)}
            </span>
          </S.WhatIsItForWrapper>
        </S.HeaderLeftSide>
        <S.HeaderMiddle>
          <S.HeaderMiddleSection>
            <Image src="/assets/icons/factory.icon.svg" width={15} height={15} />
            <span>{factory}</span>
          </S.HeaderMiddleSection>

          <S.HeaderMiddleSection>
            <Image src="/assets/icons/formula.icon.svg" width={15} height={15} />
            <span>{substance}</span>
          </S.HeaderMiddleSection>

          <S.HeaderMiddleSection>
            <Image src="/assets/icons/prescription.icon.svg" width={15} height={15} />
            <span>Prescrição</span>
          </S.HeaderMiddleSection>
        </S.HeaderMiddle>
      </S.HeaderBottom>
    </S.Wrapper>
  );
};

export default ProductHeader;
