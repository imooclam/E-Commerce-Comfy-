import { Link } from 'react-router-dom';
import { BsQuestionDiamond } from 'react-icons/bs';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <article className="title">
        <h1> Sorry😢😢😢 No page Here </h1>
        <p>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </p>
        <h2>404</h2>
        <Link to="/" className="btn-ghost large">
          Back to home
        </Link>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 16rem);
  padding: 10rem;

  .title h1 {
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 10rem;
    font-weight: bold;
  }
  p {
    font-size: 2rem;
  }
  .large {
    padding: 1rem 2rem;
    font-size: 2.6rem;
  }
`;
export default Error;
