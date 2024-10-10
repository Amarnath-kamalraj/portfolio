import styled from "styled-components";

export const ContactForm = styled.form`
  width: 60%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

export const InputLayout = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & label {
    font-size: 1.35rem;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    font-weight: 500;
    color: var(--color-grey-500);
  }

  & input {
    outline: none;
    border: 1px solid #bbb;
    border-radius: 0.5rem;
    padding: 0.6rem 1.25rem;
    font-size: 1.3rem;
    letter-spacing: 1px;
    font-weight: 500;
    color: var(--color-grey-500);

    &:focus {
      border: 1px solid var(--color-primary-900);
    }
  }

  & textarea {
    outline: none;
    border: 1px solid #bbb;
    border-radius: 0.5rem;
    padding: 0.6rem 1.25rem;
    resize: none;
  }
`;
