import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.font};
  width: min(90vw, 900px);
  margin: 0 auto;
`;

export const Header = styled.div`
  /* @media ${({ theme }) => theme.device.tablet} {
    display: grid;
  } */
`;

export const Body = styled.div``;

export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing.small};
`;
