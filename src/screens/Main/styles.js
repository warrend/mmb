import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.font};
  background: ${({ theme }) => theme.colors.background};
`;

export const Top = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-bottom: ${({ theme }) => `5px solid ${theme.colors.border}`};
  padding-bottom: ${({ theme }) => theme.spacing.xLarge};
`;

export const Heading = styled.h1`
  font: ${({ theme }) => theme.typography.mainTitle};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const SiteDescription = styled.p`
  font: ${({ theme }) => theme.typography.subtitle};
  max-width: 66%;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.small};
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
  column-gap: ${({ theme }) => theme.spacing.normal};
  margin: 0 ${({ theme }) => theme.spacing.large};

  @media ${({ theme }) => theme.device.tablet} {
    columns: 3;
  }
`;

export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.normal};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
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
