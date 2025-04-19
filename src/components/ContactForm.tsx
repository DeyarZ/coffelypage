'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });
  const [isMobile, setIsMobile] = useState(false);

  // Responsive design detection
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipient: 'manuel@worlitzer.de'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Vielen Dank für deine Nachricht! Wir werden uns so schnell wie möglich bei dir melden.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus.message && (
        <div style={{
          padding: isMobile ? '12px' : '15px',
          marginBottom: isMobile ? '15px' : '20px',
          borderRadius: '8px',
          backgroundColor: submitStatus.success ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
          color: submitStatus.success ? 'rgb(22, 101, 52)' : 'rgb(153, 27, 27)',
          fontSize: isMobile ? '16px' : '18px'
        }}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '15px' : '20px'
      }}>
        <div>
          <label 
            htmlFor="name" 
            style={{
              display: 'block',
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '500',
              marginBottom: isMobile ? '6px' : '8px',
              color: '#292524'
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: isMobile ? '10px 14px' : '12px 16px',
              fontSize: isMobile ? '16px' : '18px',
              borderRadius: '8px',
              border: '1px solid #d6d3d1',
              backgroundColor: 'white'
            }}
          />
        </div>

        <div>
          <label 
            htmlFor="email" 
            style={{
              display: 'block',
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '500',
              marginBottom: isMobile ? '6px' : '8px',
              color: '#292524'
            }}
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: isMobile ? '10px 14px' : '12px 16px',
              fontSize: isMobile ? '16px' : '18px',
              borderRadius: '8px',
              border: '1px solid #d6d3d1',
              backgroundColor: 'white'
            }}
          />
        </div>

        <div>
          <label 
            htmlFor="message" 
            style={{
              display: 'block',
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '500',
              marginBottom: isMobile ? '6px' : '8px',
              color: '#292524'
            }}
          >
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={isMobile ? 4 : 5}
            style={{
              width: '100%',
              padding: isMobile ? '10px 14px' : '12px 16px',
              fontSize: isMobile ? '16px' : '18px',
              borderRadius: '8px',
              border: '1px solid #d6d3d1',
              backgroundColor: 'white',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: '#B45309',
            color: 'white',
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: 'bold',
            padding: isMobile ? '12px 24px' : '14px 28px',
            borderRadius: '30px',
            border: 'none',
            cursor: isSubmitting ? 'wait' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1,
            alignSelf: 'center',
            marginTop: isMobile ? '5px' : '10px'
          }}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>
      </form>
    </div>
  );
} 