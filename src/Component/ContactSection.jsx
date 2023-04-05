import styled from 'styled-components';

function ContactSection() {
  return (
    <Wrapper>
      <article className="container">
        <h3>Join our newsletter and get 20% off</h3>
        <article className="form-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form
            action="https://formspree.io/f/mjvdeqqj"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </article>
      </article>
    </Wrapper>
  );
}
export default ContactSection;

const Wrapper = styled.article`
  background-color: #fff;
  width: 100%;
  height: auto;
  padding-bottom: 5rem;

  .container {
    margin-top: 10rem;
  }
  h3 {
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 700;
  }
  .form-container {
    display: grid;
    place-items: center;
    p {
      font-size: 2rem;
    }
  }
  @media (min-width: 75em) {
    .container {
      margin-top: 30rem;
    }
    .form-container {
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }
  }
  .contact-form {
    width: 90vw;
    max-width: 70rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 2rem;
    padding: 1rem 2rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
`;
