import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
  // test Prop
  // console.log(stars, reviews);
  // const tempStars = Array.from({ length: 5 }, (_, index) => {
  //   const number = index + 0.5;
  //   return (
  //     <span key={index}>
  //       {stars > number ? (
  //         <BsStarFill />
  //       ) : stars > index ? (
  //         <BsStarHalf />
  //       ) : (
  //         <BsStar />
  //       )}
  //     </span>
  //   );
  // });
  return (
    <Wrapper>
      <div className="stars">
        {/* start star */}
        {/* what is value of star we have 5 value and every value iwant to check what is value of the star */}
        <span>
          {' '}
          {stars > 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {' '}
          {stars > 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {' '}
          {stars > 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {' '}
          {stars > 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {' '}
          {stars > 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end star */}
      </div>
      {/* <div className="stars">{tempStars}</div> */}
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
export default Stars;
