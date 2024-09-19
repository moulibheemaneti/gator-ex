import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'; // Import the CSS module

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Image
                    src="/logo.svg"  // Path to the logo
                    alt="GatorEx Logo"
                    width={160}
                    height={160}
                    priority  // Ensures the image is loaded quickly
                />

                {/* Navigation */}
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/marketplace">Marketplace</Link>
                    <Link href="/sublease">Sublease</Link>
                    <Link href="/contact">Contact Us</Link>
                </nav>

                {/* Authentication Buttons */}
                <div className={styles.authButtons}>
                    <Link href="/login" className="px-8 py-2 border mr-4">Log in</Link>
                    <Link href="/login" className="px-8 py-2 bg-green-600">Sign Up</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
