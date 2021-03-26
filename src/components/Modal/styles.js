import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Background = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  top: 0;
  height: 100vh;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.5);
  z-index: 9999;
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  max-width: 90%;
  overflow: hidden;
  border-top: 8px solid ${({ theme }) => theme.colors.modalBorder};
`;
