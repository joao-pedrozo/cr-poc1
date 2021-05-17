import Image from 'next/image';

import * as S from './styles';

interface OffersListProps {
  variationsWithOffers: Array<any>;
  productName: string;
}

const OffersList = ({ variationsWithOffers, productName }: OffersListProps) => {
  console.log(variationsWithOffers);

  return (
    <S.Wrapper>
      <S.OffersWrapper>
        {variationsWithOffers.map((variant, i) => (
          <>
            {i === 0 && (
              <S.OfferItemWrapper key={variant.id}>
                <S.OfferItemHeader>
                  <div className="classification" />

                  <S.OfferItemHeaderDescription>
                    <Image width={64} height={60} src={variant.image} />
                    <S.OfferItemHeaderDescriptionTitle>
                      <span>
                        {productName}
                        <b> {variant.name}</b>
                      </span>
                    </S.OfferItemHeaderDescriptionTitle>
                  </S.OfferItemHeaderDescription>
                </S.OfferItemHeader>
                {variant.offers.map((offer) => (
                  <span key={offer.id}>olá</span>
                ))}
              </S.OfferItemWrapper>
            )}
          </>
        ))}
      </S.OffersWrapper>
    </S.Wrapper>
  );
};

export default OffersList;
