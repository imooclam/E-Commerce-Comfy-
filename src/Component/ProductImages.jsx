import React, { useState } from 'react';
import styled from 'styled-components';
const ProductImages = ({ images = [{ url: '' }] }) => {
  // const ProductImages = ({ images }) => {
  // be sure you check Images
  // console.log(images);
  const [main, setMain] = useState(images[0]);
  // const [main, setMain] = useState(images?.[0]);

  return (
    <Wrapper>
      <img src={main.url} alt="img" className="main " />
      <section className="gallery">
        {/* NOW ineed to change our index */}
        {/* then We need to add active class  so we need to say id img.url match img that comming from main*/}
        {images.map((img, index) => {
          // console.log(img);
          return (
            <img
              src={img.url}
              key={index}
              alt={img.filename}
              onClick={() => setMain(images[index])}
              className={`${img.url === main.url ? 'active' : null}`}
            />
          );
        })}
      </section>
    </Wrapper>
  );
};
export default ProductImages;
const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
