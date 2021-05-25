import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ebeced;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
`;

export const OffersWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  padding-left: 45px;
  padding-right: 45px;
  max-width: 1170px;
`;

export const VariantItemWrapper = styled.div`
  width: 100%;
`;

export const VariantItemHeader = styled.div`
  display: flex;
  background: #fff;
  border-radius: 4px;
  flex-direction: column;
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  .classification {
    width: 100%;
    height: 8px;
    background-color: red;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
`;

export const VariantItemHeaderDescription = styled.div`
  display: flex;
  padding: 8px;
`;

export const VariantItemHeaderDescriptionTitle = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

// Offers

export const OfferCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #fff;
  height: 130px;
  padding: 8px;
  display: flex;
`;

export const OfferCardImageWrapper = styled.div`
  max-width: 80px;
  max-height: 40px;
`;

export const OfferCardSelledByWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;
