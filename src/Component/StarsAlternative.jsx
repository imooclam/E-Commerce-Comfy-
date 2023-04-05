import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const StarsAlternative = ({ stars, reviews }) => {
  // we should check star Frist
  // console.log(stars);
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    // index is between 0-4
    // console.log(index);
    // test Prop
    // console.log(stars, reviews);
    const number = index + 0.5;
    return (
      <span key={index}>
        {' '}
        {/* index +1 because its start with 
         base index  */}
        {stars > index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars"></div>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .stars span {
    align-self: center;
  }
  display: flex;
  span {
    color: #ffb900;
    font-size: 2rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
  }
  margin-bottom: 0.5rem;
`;

export default StarsAlternative;
