import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data to the backend
      try {
        const response = await fetch('http://localhost:5000/api/contact/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Form submitted successfully:', data);
          alert(data.message); // Show success message
        } else {
          console.error('Form submission failed:', data);
          alert(data.message); // Show error message
        }
        
        // Reset the form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    }
  };

  return (
    <section className="contact-form container py-5">
      <h2 className="text-primary text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
          />
          {errors.subject && <small className="text-danger">{errors.subject}</small>}
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
