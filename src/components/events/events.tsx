import React from 'react';
import Image from 'next/image';
import styles from './events.module.css';

interface EventDetails {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: string;
  bgImage: string;
}

const EventsSection = () => {
  const events: EventDetails[] = [
    {
      title: "Mehendi Ceremony",
      date: "August 29, 2025",
      time: "11:00 AM - 4:00 PM",
      venue: "Lotus Garden, Mumbai",
      description: "Join us for a colorful celebration as the bride's hands are adorned with beautiful mehendi designs. Enjoy music, dance, and festivities.",
      icon: "🌺",
      bgImage: "/images/events/mehendi.jpg"
    },
    {
      title: "Sangeet Night",
      date: "August 29, 2025",
      time: "7:00 PM - 11:00 PM",
      venue: "Golden Palace, Mumbai",
      description: "An evening filled with music, dance performances, and celebrations. Come ready to dance and make memories!",
      icon: "💃",
      bgImage: "/images/events/sangeet.jpg"
    },
    {
      title: "Haldi Ceremony",
      date: "August 30, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Family Temple, Mumbai",
      description: "Traditional haldi ceremony where turmeric paste is applied to the bride and groom for blessings and glowing skin.",
      icon: "✨",
      bgImage: "/images/events/haldi.jpg"
    },
    {
      title: "Wedding Ceremony",
      date: "August 31, 2025",
      time: "7:00 PM - 12:00 AM",
      venue: "Royal Gardens, Mumbai",
      description: "Join us for the main wedding ceremony as we take our vows and begin our journey together.",
      icon: "💑",
      bgImage: "/images/events/wedding.jpg"
    },
    {
      title: "Reception",
      date: "September 1, 2025",
      time: "7:00 PM - 11:00 PM",
      venue: "Grand Ballroom, Mumbai",
      description: "Celebrate with us at our wedding reception. An evening of dining, dancing, and joyous celebrations.",
      icon: "🎉",
      bgImage: "/images/events/reception.jpg"
    }
  ];

  return (
    <section className={styles.eventsSection}>
      <div className={styles.decorativeBorder}></div>
      
      <div className={styles.sectionHeader}>
        <div className={styles.headerDecor}>
          <span className={styles.decorLine}></span>
          <span className={styles.decorSymbol}>॥</span>
          <span className={styles.decorLine}></span>
        </div>
        <h2>Wedding Events</h2>
        <p className={styles.subTitle}>Join us in celebrating our special moments</p>
      </div>

      <div className={styles.eventsContainer}>
        {events.map((event, index) => (
          <div 
            key={event.title}
            className={`${styles.eventCard} ${index % 2 === 0 ? styles.evenCard : styles.oddCard}`}
          >
            <div className={styles.eventContent}>
              <div className={styles.eventIcon}>{event.icon}</div>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <div className={styles.eventDetails}>
                <div className={styles.detailGroup}>
                  <span className={styles.detailIcon}>📅</span>
                  <span>{event.date}</span>
                </div>
                <div className={styles.detailGroup}>
                  <span className={styles.detailIcon}>⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className={styles.detailGroup}>
                  <span className={styles.detailIcon}>📍</span>
                  <span>{event.venue}</span>
                </div>
              </div>
              <p className={styles.eventDescription}>{event.description}</p>
              <button className={styles.mapsButton}>
                View Location
                <span className={styles.buttonIcon}>🗺️</span>
              </button>
            </div>
            <div className={styles.eventImageWrapper}>
              <Image
                src={event.bgImage}
                alt={event.title}
                width={400}
                height={300}
                className={styles.eventImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.finalNote}>
        <div className={styles.noteContent}>
          <span className={styles.noteIcon}>💌</span>
          <p>We request the honor of your presence to make our celebrations more special</p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
