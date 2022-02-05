import { useState } from "react";
import { Heading2 } from "./Skills";
import styled from "styled-components";

const ContactForm = styled.form`
  font-family: "BJR";
  padding: 0 1.5rem 1rem;

  p {
    color: var(--p-blue);
    text-align: center;
  }
  label {
    display: block;
  }
  input {
    font-family: "BJR";
    margin-bottom: 1.5rem;
  }
  input,
  input::placeholder,
  textarea,
  textarea::placeholder {
    color: #1e4b8f;
  }
  input,
  textarea {
    width: 50%;
    padding: 0.5rem;
    background-color: #eff6fc;
    border: 1px solid var(--text-blue);
    border-radius: 0.25rem;
  }
  textarea {
    width: 70%;
    margin-bottom: 1rem;
  }
  span {
    color: red;
    display: block;
    margin: 0 0 0.5rem;
  }

  @media screen and (min-width: 745px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 50%;
      margin: 1rem 0;
    }
    textarea {
      width: 50%;
    }
  }
`;

const ContactBtn = styled.button`
  width: 80%;
  margin: 1rem 10%;
  padding: 1rem 0.5rem;
  font-family: "BJSB";
  background-color: #0a192f;
  color: #eff6fc;
  border: 1px solid var(--text-blue);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1.5px solid var(--text-blue);
    background-color: #eff6fc;
    color: #0a192f;
  }

  @media screen and (min-width: 745px) {
    width: 50%;
    margin: 1rem 0;
  }
`;

function Contact() {
  const [errors, setErrors] = useState("");
  const [mailError, setMailError] = useState("");
  const [msgError, setMsgError] = useState("");

  const validateName = (e) => {
    if (e.target.value?.length < 2) {
      setErrors("Please input your name");
      return false;
    } else {
      setErrors("");
      console.log(e.target.value);
      return true;
    }
  };
  const validateText = (e) => {
    if (e.target.value?.length < 4) {
      setMsgError("Please input your message");
      return false;
    } else {
      setMsgError("");
      console.log(e.target.value);
      return true;
    }
  };

  const validateMail = (e) => {
    if (e.target.validity.typeMismatch) {
      setMailError("Please provide a valid email");
      return false;
    } else if (e.target.value?.length === 0) {
      setMailError("Please input your email");
      return false;
    } else {
      setMailError("");
      return true;
    }
  };

  const submit = (e) => {
    if (!validateMail() || !validateText() || !validateName()) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Heading2 id="contact">Get in touch</Heading2>
      <ContactForm
        action="https://formsubmit.co/tomiaiyeniko@gmail.com"
        method="POST"
      >
        <p>
          Got a job for me, or a question, or you just want to say hi? You could
          be my first employer. My inbox is always open.
        </p>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="What's your name..."
          required
          onBlur={validateName}
        />
        <span className="nameSpan">{errors}</span>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
          required
          onBlur={validateMail}
        />
        <span className="emailSpan">{mailError}</span>
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          rows="8"
          placeholder="Enter your message..."
          required
          onBlur={validateText}
        ></textarea>
        <span className="textASpan">{msgError}</span>
        <input
          type="hidden"
          name="_next"
          value="https://tomipter.com/#contact"
        ></input>
        <ContactBtn type="submit" onClick={submit}>
          Say Hello 👍🏾
        </ContactBtn>
      </ContactForm>
    </>
  );
}

export default Contact;
export { ContactBtn };
