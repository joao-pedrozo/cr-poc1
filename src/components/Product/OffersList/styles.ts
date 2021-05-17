import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ebeced;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
`;

export const OffersWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

export const OfferItemWrapper = styled.div`
  width: 100%;
`;

export const OfferItemHeader = styled.div`
  display: flex;
  background: #fff;
  border-radius: 4px;
  flex-direction: column;
  border: 1px solid #ccc;
  margin-bottom: 8px;

  .classification {
    width: 100%;
    height: 8px;
    background-color: red;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
`;

export const OfferItemHeaderDescription = styled.div`
  display: flex;
  padding: 8px;
`;

export const OfferItemHeaderDescriptionTitle = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
