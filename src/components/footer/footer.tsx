import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/story' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'RSVP', href: '/rsvp' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' }
  ];

  const venues = [
    {
      name: 'Wedding Venue',
      address: 'Royal Gardens, Mumbai',
      phone: '+91 98765 43210'
    },
    {
      name: 'Reception Venue',
      address: 'Grand Ballroom, Mumbai',
      phone: '+91 98765 43211'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.decorativeBorder}>
        <div className={styles.borderPattern}></div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.footerGrid}>
          {/* Logo and Description */}
          <div className={styles.brandSection}>
            <div className={styles.logoSection}>
              <h2 className={styles.logoText}>Jayaj & Anita</h2>
              <span className={styles.weddingDate}>August 31, 2025</span>
            </div>
            <p className={styles.description}>
              Join us in celebrating the beginning of our beautiful journey together.
              Your presence will add to our joy.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3>Quick Links</h3>
            <div className={styles.decorLine}></div>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkDecor}>॥</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Venue Information */}
          <div className={styles.venueSection}>
            <h3>Venue Details</h3>
            <div className={styles.decorLine}></div>
            <div className={styles.venueList}>
              {venues.map((venue) => (
                <div key={venue.name} className={styles.venueItem}>
                  <h4>{venue.name}</h4>
                  <p>{venue.address}</p>
                  <a href={`tel:${venue.phone}`} className={styles.phoneLink}>
                    <span className={styles.phoneIcon}>📞</span>
                    {venue.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className={styles.contactSection}>
            <h3>Stay Connected</h3>
            <div className={styles.decorLine}></div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
            <div className={styles.contactInfo}>
              <p>
                <span className={styles.contactIcon}>✉</span>
                <a href="mailto:contact@jayajanita.com">contact@jayajanita.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.decorativeElement}>
            <span className={styles.decorSymbol}>॥</span>
            <span className={styles.decorLine}></span>
            <span className={styles.decorSymbol}>॥</span>
          </div>
          <p className={styles.copyright}>
            © {currentYear} Jayaj & Anita. All rights reserved.
          </p>
          <p className={styles.blessing}>
            Celebrating Love with Blessings from Family & Friends
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
