// src/components/ContactForm.js
import { Form } from "react-router-dom";

export function ContactForm() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Form method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
