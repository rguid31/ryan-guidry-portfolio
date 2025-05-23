import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
        <h2>Get in touch</h2>
        <div className="contact-form-container">
            <form id="contactForm">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        autoComplete="name"
                        placeholder="Your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        autoComplete="email"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required
                        placeholder="What's this about?"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required
                        placeholder="Your message here..."
                    ></textarea>
                </div>

                <div className="button-container">
                    <button type="submit" className="submit-button">Send Message</button>
                </div>
            </form>

            <div id="form-response"></div>
        </div>

        <div className="contact-info">
            <p>Or reach out directly: <a href="mailto:inquireryan@gmail.com">inquireryan@gmail.com</a></p>
        </div>
    </section>
  );
};

export default Contact;
