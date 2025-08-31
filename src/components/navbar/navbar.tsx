import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoWrapper}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Wedding</span>
            <span className={styles.decorativeLine}></span>
            <span className={styles.subText}>Celebration of Love</span>
          </div>
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
        </div>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink}>
            <span className={styles.linkText}>Home</span>
            <span className={styles.decorativeIcon}>✽</span>
          </Link>
          <Link href="/couple" className={styles.navLink}>
            <span className={styles.linkText}>The Couple</span>
            <span className={styles.decorativeIcon}>✽</span>
          </Link>
          <Link href="/events" className={styles.navLink}>
            <span className={styles.linkText}>Events</span>
            <span className={styles.decorativeIcon}>✽</span>
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            <span className={styles.linkText}>Gallery</span>
            <span className={styles.decorativeIcon}>✽</span>
          </Link>
          <Link href="/rsvp" className={styles.navLink}>
            <span className={styles.linkText}>RSVP</span>
            <span className={styles.decorativeIcon}>✽</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
