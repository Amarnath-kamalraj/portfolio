import React from "react";
import MainHeading from "../../components/Heading/MainHeading";
import {
  ContactForm,
  InputLayout,
  FormControl,
} from "../../styles/components/Contact";
import Button from "../../styles/UI/Button";

const Contact = () => {
  return (
    <div>
      <MainHeading title="Get In Touch" description="Contact me" />
      <ContactForm>
        <InputLayout>
          <FormControl>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" id="first_name" />
          </FormControl>
          <FormControl>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" id="last_name" />
          </FormControl>
        </InputLayout>
        <InputLayout>
          <FormControl>
            <label htmlFor="phone_number">Phone Number</label>
            <input type="text" name="phone_number" id="phone_number" />
          </FormControl>
          <FormControl>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </FormControl>
        </InputLayout>
        <FormControl>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
        </FormControl>
        <FormControl>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5"></textarea>
        </FormControl>
        <Button>Submit</Button>
      </ContactForm>
    </div>
  );
};

export default Contact;
