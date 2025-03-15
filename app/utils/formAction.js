"use client";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

let lastSubmittedTime = 0;
const RATE_LIMIT = 60000;

export const handleContactForm = (e, selectedService) => {
  e.preventDefault();

  const currentTime = Date.now();
  if (currentTime - lastSubmittedTime < RATE_LIMIT) {
    return toast.error("Please wait a moment before submitting again.");
  }

  const username = e.target.username.value;
  const designation = e.target.designation.value;
  const organization = e.target.organization.value;
  const officeaddress = e.target.officeaddress.value;
  const city = e.target.city.value;
  const email = e.target.email.value;
  const number = e.target.number.value;
  const comment = e.target.comment.value;

  if (
    !username ||
    !designation ||
    !organization ||
    !officeaddress ||
    !city ||
    !email ||
    !number ||
    !comment ||
    !selectedService
  ) {
    return toast.error("All fields are required");
  }

  const emailData = {
    user_name: username,
    user_email: email,
    to_name: "Team VTAX",
    message: `
        Designation: ${designation}
        Organization: ${organization}
        Office Address: ${officeaddress}
        City: ${city}
        Email: ${email}
        Number: ${number}
        Service: ${selectedService}
        comment: ${comment}
    `,
  };
  lastSubmittedTime = currentTime;
  emailjs
    .send("service_3oztlvy", "template_dp9ft8z", emailData, "IEYz3Q6W1w-W9l0cJ")
    .then((response) => {
      toast.success("Thank you for your submission!");
      console.log("Email sent successfully!", response.status, response.text);
      localStorage.setItem("service", "");
      e.target.reset();
      lastSubmittedTime = 0;
    })
    .catch((error) => {
      toast.error("Failed to send message. Please try again later.");
      console.error("Failed to send email:", error);
    });
};

export const handleCareerForm = (e) => {
  e.preventDefault();

  const currentTime = Date.now();
  if (currentTime - lastSubmittedTime < RATE_LIMIT) {
    return toast.error("Please wait a moment before submitting again.");
  }

  const firstname = e.target.firstname.value;
  const email = e.target.email.value;
  const number = e.target.number.value;
  const gender = e.target.gender.value;
  const position = e.target.position.value;
  const dateofbirth = e.target.dateofbirth.value;
  const qualification = e.target.qualification.value;
  const experience = e.target.experience.value;
  const lastCompany = e.target.last_company.value;
  const comment = e.target.comment.value;

  if (
    (!firstname,
    !email,
    !number,
    !gender,
    !position,
    !dateofbirth,
    !qualification,
    !experience,
    !lastCompany,
    !comment)
  ) {
    return toast.error("All fields are required");
  }

  const emailData = {
    user_name: firstname,
    user_email: email,
    to_name: "Team VTAX",
    message: `
        Position you are applying for: ${position}
        Gender: ${gender}
        Email: ${email}   
        Number: ${number}    
        Date of Birth: ${dateofbirth}
        Qualification: ${qualification}
        Experience: ${experience}
        Last Company: ${lastCompany}
        Comment: ${comment}
    `,
  };
  lastSubmittedTime = currentTime;
  emailjs
    .send("service_xo5wvvq", "template_1wghvrf", emailData, "dnAEXfKgKY1A-ns9F")
    .then((response) => {
      toast.success("Thank you for your submission!");
      console.log("Email sent successfully!", response.status, response.text);
      e.target.reset();
      lastSubmittedTime = 0;
    })
    .catch((error) => {
      toast.error("Failed to send message. Please try again later.");
      console.error("Failed to send email:", error);
    });
};
