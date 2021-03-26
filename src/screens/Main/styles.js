import styled, { keyframes, css } from "styled-components";

const swim = keyframes`
  0% {
    left: -300px
  }

  25% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(-20deg);
  }

  100% {
    left: 100%;
  }
`;

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
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 50%;
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

const animationHelper = css`
  animation: ${swim} 10s ease-in;
`;

export const EasterIcon = styled.img`
  position: fixed;
  width: 300px;
  top: 50%;
  left: -350px;
  transform: translateY(-50%);
  ${({ start }) => (start ? animationHelper : null)};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.normal};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ModalImage = styled.img`
  display: block;
  max-height: 82vh;
  align-self: center;
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const InnerModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.normal};
`;
