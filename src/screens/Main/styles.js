import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.font};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.small};
  /* @media ${({ theme }) => theme.device.tablet} {
    display: grid;
  } */
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Info = styled.div`
  max-width: 400px;
`;

export const Close = styled.div`
  color: ${({ theme }) => theme.colors.lightFont};
  cursor: pointer;
`;

export const Body = styled.div`
  columns: 2;
  column-gap: 0;
`;

export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  display: block;
  max-height: 75vh;
  align-self: center;
  max-width: 100%;
`;

export const InnerModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
