import React, { useState, useEffect } from 'react';
import styles from '../../styles/ContactForm.module.css';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch CSRF token when component mounts
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch('/api/csrf');
                const data = await response.json();
                setCsrfToken(data.csrfToken);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };

        fetchCsrfToken();
    }, []);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Get in touch</h2>
            <div className="contact-form-container">
                <form 
                    id="contactForm" 
                    onSubmit={handleSubmit}
                    noValidate
                    aria-describedby={submitStatus.message ? 'form-status' : undefined}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            autoComplete="name"
                            placeholder="Your name"
                            className={`${styles.input} ${errors.name ? styles.error : ''}`}
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                            <span id="name-error" className={styles.errorMessage} role="alert">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            autoComplete="email"
                            placeholder="your.email@example.com"
                            className={`${styles.input} ${errors.email ? styles.error : ''}`}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <span id="email-error" className={styles.errorMessage} role="alert">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="subject" className={styles.label}>Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="What's this about?"
                            className={`${styles.input} ${errors.subject ? styles.error : ''}`}
                            aria-invalid={errors.subject ? 'true' : 'false'}
                            aria-describedby={errors.subject ? 'subject-error' : undefined}
                        />
                        {errors.subject && (
                            <span id="subject-error" className={styles.errorMessage} role="alert">
                                {errors.subject}
                            </span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your message here..."
                            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                            aria-invalid={errors.message ? 'true' : 'false'}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                        ></textarea>
                        {errors.message && (
                            <span id="message-error" className={styles.errorMessage} role="alert">
                                {errors.message}
                            </span>
                        )}
                    </div>

                    <div className={styles.buttonContainer}>
                        <button 
                            type="submit" 
                            className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>

                {submitStatus.message && (
                    <div 
                        id="form-status"
                        className={`${styles.formStatus} ${styles[submitStatus.type]}`}
                        role="alert"
                    >
                        {submitStatus.message}
                    </div>
                )}
            </div>

            <div className="contact-info">
                <p>Or reach out directly: <a href="mailto:inquireryan@gmail.com">inquireryan@gmail.com</a></p>
            </div>
        </section>
    );
} 