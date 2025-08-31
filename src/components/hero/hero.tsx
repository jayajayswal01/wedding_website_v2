import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.decorativeCorner1}></div>
      <div className={styles.decorativeCorner2}></div>
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.names}>Jayaj & Anita</span>
            <span className={styles.decorativeLine}></span>
            <span className={styles.weddingText}>Are Getting Married</span>
          </h1>
          
          <div className={styles.dateLocation}>
            <div className={styles.dateWrapper}>
              <span className={styles.date}>August 31, 2025</span>
              <span className={styles.decorativeElement}>❈</span>
            </div>
            <p className={styles.venue}>Mumbai, India</p>
          </div>

          <div className={styles.rsvpContainer}>
            <button className={styles.rsvpButton}>
              <span className={styles.buttonText}>RSVP Now</span>
              <span className={styles.buttonDecoration}>॥</span>
            </button>
          </div>
        </div>

        <div className={styles.decorativeElements}>
          <div className={styles.mandala}>
            <div className={styles.mandalaInner}></div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Explore</span>
        <div className={styles.scrollArrow}>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
