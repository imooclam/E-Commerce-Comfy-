import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{new Date().getFullYear()}
        <span> ComfySloth</span>
      </h5>
      <h5>All right reserved</h5>
    </Wrapper>
  );
};
export default Footer;
const Wrapper = styled.footer`
  height: 8rem;
  background-color: var(--clr-black);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  h5 {
    margin: 0 auto;
    font-size: 1.6rem;
    span {
      color: #ff9900;
    }
  }
`;
