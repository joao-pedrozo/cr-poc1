import Image from 'next/image';

import convertMoneyValue from '@/utils/convertMoneyValue';
import * as S from './styles';
import BaseButton from '@/components/BaseButton';

interface OffersListProps {
  variations: Array<any>;
  variationsWithOffers: Array<any>;
  productName: string;
}

const OffersList = ({ variationsWithOffers, productName, variations }: OffersListProps) => {
  return (
    <S.Wrapper>
      <S.OffersWrapper>
        {variations.map((variant) => (
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
            {variationsWithOffers.map((variantWithOffer) => {
              if (variantWithOffer.id === variant.id) {
                return variantWithOffer.offers.map((offer) => (
                  <S.OfferCard key={offer.id}>
                    <S.OfferCardLeftSIde>
                      <S.OfferCardImageWrapper>
                        <Image width={80} height={40} src={offer.storeLogo} />
                      </S.OfferCardImageWrapper>

                      <S.OfferCardSelledByWrapper>
                        <span>Vendido/Entregue por {offer.storeName}</span>
                      </S.OfferCardSelledByWrapper>
                    </S.OfferCardLeftSIde>

                    <S.OfferCardRightSide>
                      <span>{convertMoneyValue(offer.price)}</span>
                      <BaseButton>Comprar agora</BaseButton>
                    </S.OfferCardRightSide>
                  </S.OfferCard>
                ));
              }
            })}
          </S.VariantItemWrapper>
        ))}
      </S.OffersWrapper>
    </S.Wrapper>
  );
};

export default OffersList;
