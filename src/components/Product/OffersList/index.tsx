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
              <S.VariantItemWrapper key={variant.id}>
                <S.VariantItemHeader>
                  <div className="classification" />

                  <S.VariantItemHeaderDescription>
                    <Image width={64} height={60} src={variant.image} />
                    <S.VariantItemHeaderDescriptionTitle>
                      <span>
                        {productName}
                        <b> {variant.name}</b>
                      </span>
                    </S.VariantItemHeaderDescriptionTitle>
                  </S.VariantItemHeaderDescription>
                </S.VariantItemHeader>
                {variant.offers.map((offer) => (
                  <S.OfferCard key={offer.id}>
                    <S.OfferCardImageWrapper>
                      <Image width={80} height={40} src={offer.storeLogo} />
                    </S.OfferCardImageWrapper>
                    <S.OfferCardSelledByWrapper>
                      <span>Vendido/Entregue por {offer.storeName}</span>
                    </S.OfferCardSelledByWrapper>
                  </S.OfferCard>
                ))}
              </S.VariantItemWrapper>
            )}
          </>
        ))}
      </S.OffersWrapper>
    </S.Wrapper>
  );
};

export default OffersList;
