import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Importing CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/terms">Terms And Conditions</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/privacy">Privacy And Policy</Link>
      </div>
      <div className={styles.copyright}>
        &copy; 2024 GatorEx. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
