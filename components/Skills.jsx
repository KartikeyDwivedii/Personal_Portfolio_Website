'use client';
import styles from '../styles/Sections.module.css';

const PowerBIIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28">
    <rect x="20" y="4" width="8" height="24" rx="1.5" fill="#F2C811" />
    <rect x="11" y="11" width="8" height="17" rx="1.5" fill="#F2C811" opacity="0.85" />
    <rect x="2" y="17" width="8" height="11" rx="1.5" fill="#F2C811" opacity="0.65" />
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28">
    <rect x="2" y="3" width="28" height="26" rx="3" fill="#185C37" />
    <rect x="2" y="3" width="15" height="26" rx="3" fill="#107C41" />
    <path d="M7 9l3.4 6.5L7 23h3l2-4.2L14 23h3l-3.4-7.5L17 9h-3l-1.8 3.9L10.4 9H7z" fill="#fff" />
  </svg>
);

const SKILLS = [
  {
    category: 'Programming',
    items: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    ],
  },
  {
    category: 'Database & Reporting',
    items: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Power BI', icon: <PowerBIIcon /> },
      { name: 'Excel', icon: <ExcelIcon /> },
    ],
  },
  {
    category: 'Big Data & Cloud',
    items: [
      { name: 'Apache Spark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
  {
    category: 'Tools & Version Control',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={`${styles.section} ${styles.altBg}`}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Skills</p>
        <h2 className={styles.sectionHeading}>Technical Expertise</h2>
        <div className={styles.skillsGrid}>
          {SKILLS.map(({ category, items }) => (
            <div key={category} className={styles.skillCard}>
              <h3 className={styles.skillCategory}>{category}</h3>
              <div className={styles.skillItems}>
                {items.map(({ name, logo, icon }) => (
                  <div key={name} className={styles.skillItem}>
                    {icon ? (
                      <span className={styles.skillLogo}>{icon}</span>
                    ) : (
                      <img
                        src={logo}
                        alt={name}
                        className={styles.skillLogo}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    )}
                    <span className={styles.skillName}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.softSkills}>
          <h3 className={styles.softTitle}>Soft Skills</h3>
          <div className={styles.softTags}>
            {['Quick Learner', 'Strong Communication', 'Team Collaboration', 'Attention to Detail', 'Problem Solving', 'Adaptability'].map(s => (
              <span key={s} className={styles.softTag}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
