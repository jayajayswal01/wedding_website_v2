import React from 'react';
import Image from 'next/image';
import styles from './the_couple.module.css';

interface CoupleDetails {
  name: string;
  description: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const TheCoupleSection = () => {
  const groomDetails: CoupleDetails = {
    name: "Jayaj",
    description: "A software engineer with a passion for creating beautiful things. When not coding, you'll find him planning adventures and dreaming up new ideas. His smile lights up every room he enters.",
    socialLinks: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  };

  const brideDetails: CoupleDetails = {
    name: "Anita",
    description: "A creative soul with an eye for design and beauty. Her infectious laughter and warm personality make everyone feel at home. She brings color and joy to everything she touches.",
    socialLinks: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  };

  return (
    <section className={styles.coupleSection}>
      <div className={styles.decorativeBorder}>
        <div className={styles.borderPattern}></div>
      </div>

      <div className={styles.sectionTitle}>
        <span className={styles.titleDecor}>॥</span>
        <h2>The Beautiful Couple</h2>
        <span className={styles.titleDecor}>॥</span>
      </div>

      <div className={styles.container}>
        {/* Groom Side */}
        <div className={styles.personCard}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/groom.jpg"
                alt="Groom"
                width={300}
                height={400}
                className={styles.personImage}
                priority
              />
              <div className={styles.imageDecor}></div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>{groomDetails.name}</h3>
            <span className={styles.role}>The Groom</span>
            <p>{groomDetails.description}</p>
            <div className={styles.socialLinks}>
              {Object.entries(groomDetails.socialLinks).map(([platform, link]) => (
                <a 
                  key={platform} 
                  href={link} 
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.connector}>
          <div className={styles.heart}>❤</div>
        </div>

        {/* Bride Side */}
        <div className={styles.personCard}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/bride.jpg"
                alt="Bride"
                width={300}
                height={400}
                className={styles.personImage}
                priority
              />
              <div className={styles.imageDecor}></div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>{brideDetails.name}</h3>
            <span className={styles.role}>The Bride</span>
            <p>{brideDetails.description}</p>
            <div className={styles.socialLinks}>
              {Object.entries(brideDetails.socialLinks).map(([platform, link]) => (
                <a 
                  key={platform} 
                  href={link} 
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.quote}>
        <p>"Two souls with but a single thought, two hearts that beat as one"</p>
      </div>
    </section>
  );
};

export default TheCoupleSection;
