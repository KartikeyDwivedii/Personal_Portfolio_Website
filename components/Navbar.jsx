'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoFirst}>K</span>artikey<span className={styles.logoDot}>.</span>
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={styles.link}>{label}</a>
          ))}
        </div>
        <div className={styles.navActions}>
          <ThemeToggle />
          <a href="/Kartikey_Dwivedi_Resume.pdf" download className={styles.resumeBtn}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
