// src/actions/contactAction.js
import { redirect } from "react-router-dom";

export async function contactAction({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  // Simulate saving to a backend or API call
  console.log("Form Submitted:", { name, email });

  // Redirect to thank you page after successful submission
  return redirect("/thank-you");
}
