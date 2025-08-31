import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'Engagement' | 'PreWedding' | 'Ceremonies' | 'Candid';
  width: number;
  height: number;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/images/gallery/engagement-1.jpg",
      alt: "Engagement Ceremony",
      category: "Engagement",
      width: 800,
      height: 600
    },
    {
      id: 2,
      src: "/images/gallery/prewedding-1.jpg",
      alt: "Pre-wedding Shoot",
      category: "PreWedding",
      width: 600,
      height: 800
    },
    // Add more images here with varying dimensions for the masonry effect
  ];

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'Engagement', label: 'Engagement' },
    { id: 'PreWedding', label: 'Pre-Wedding' },
    { id: 'Ceremonies', label: 'Ceremonies' },
    { id: 'Candid', label: 'Candid' }
  ];

  const filteredImages = images.filter(img => 
    activeCategory === 'all' || img.category === activeCategory
  );

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={styles.gallerySection}>
      <div className={styles.decorativeBorder}>
        <div className={styles.borderPattern}></div>
      </div>

      <div className={styles.sectionHeader}>
        <div className={styles.headerDecor}>
          <span className={styles.decorSymbol}>॥</span>
          <h2>Our Love Story in Pictures</h2>
          <span className={styles.decorSymbol}>॥</span>
        </div>
        <p className={styles.subTitle}>Moments that tell our tale of love</p>
      </div>

      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${
              activeCategory === category.id ? styles.active : ''
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
            <span className={styles.buttonDecor}></span>
          </button>
        ))}
      </div>

      <div className={styles.galleryGrid}>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={styles.imageWrapper}
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.galleryImage}
            />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <span className={styles.viewIcon}>✨</span>
                <span className={styles.viewText}>View</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeButton} onClick={closeLightbox}>
            ✕
          </button>
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className={styles.lightboxImage}
            />
          </div>
          <div className={styles.imageInfo}>
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}

      <div className={styles.galleryNote}>
        <div className={styles.noteContent}>
          <span className={styles.noteIcon}>📸</span>
          <p>Each picture tells a story, each moment holds a memory</p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
