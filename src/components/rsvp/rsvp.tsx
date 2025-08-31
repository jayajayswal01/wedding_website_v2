import React, { useState } from 'react';
import styles from './rsvp.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  attending: string;
  guestCount: string;
  events: string[];
  message: string;
}

const RSVPSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guestCount: '1',
    events: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const events = [
    { id: 'mehendi', label: 'Mehendi Ceremony' },
    { id: 'sangeet', label: 'Sangeet Night' },
    { id: 'haldi', label: 'Haldi Ceremony' },
    { id: 'wedding', label: 'Wedding Ceremony' },
    { id: 'reception', label: 'Reception' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event: string) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter(e => e !== event)
        : [...prev.events, event]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className={styles.rsvpSection}>
      <div className={styles.decorativeBorder}>
        <div className={styles.borderPattern}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContent}>
            <span className={styles.decorSymbol}>॥</span>
            <h2>RSVP</h2>
            <p className={styles.subTitle}>Join Us in Our Celebration</p>
            <div className={styles.decorativeLine}></div>
          </div>

          {!submitted ? (
            <form className={styles.rsvpForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className={styles.input}
                />
                <span className={styles.focusDecor}></span>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Email"
                    className={styles.input}
                  />
                  <span className={styles.focusDecor}></span>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Phone"
                    className={styles.input}
                  />
                  <span className={styles.focusDecor}></span>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <select
                    name="attending"
                    value={formData.attending}
                    onChange={handleInputChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Will you attend?</option>
                    <option value="yes">Joyfully Accepts</option>
                    <option value="no">Regretfully Declines</option>
                  </select>
                  <span className={styles.focusDecor}></span>
                </div>

                <div className={styles.formGroup}>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    required
                    className={styles.select}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                  <span className={styles.focusDecor}></span>
                </div>
              </div>

              <div className={styles.eventsSelection}>
                <p className={styles.eventsTitle}>Which events will you attend?</p>
                <div className={styles.eventsGrid}>
                  {events.map(event => (
                    <label key={event.id} className={styles.eventCheckbox}>
                      <input
                        type="checkbox"
                        checked={formData.events.includes(event.id)}
                        onChange={() => handleCheckboxChange(event.id)}
                      />
                      <span className={styles.checkmark}></span>
                      {event.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message or Wishes (Optional)"
                  className={styles.textarea}
                ></textarea>
                <span className={styles.focusDecor}></span>
              </div>

              <button 
                type="submit" 
                className={`${styles.submitButton} ${loading ? styles.loading : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.loader}></span>
                ) : (
                  <>
                    Send RSVP
                    <span className={styles.buttonDecor}>॥</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✨</div>
              <h3>Thank You!</h3>
              <p>We have received your RSVP and look forward to celebrating with you!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
