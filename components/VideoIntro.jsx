'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';
import styles from '../styles/VideoIntro.module.css';

const CinematicLayer = dynamic(() => import('./CinematicLayer'), { ssr: false });

const RESUME_DATA = {
  firstName: 'Kartikey',
  lastName: 'Dwivedi',
  tagline: 'Available for opportunities · Delhi, India',
  role: 'Data Engineer',
  subtitle: 'Python · ETL · Data Warehousing · Apache Spark · AWS',
  email: 'kartikeydwivedi.work@gmail.com',
  skills: [
    'Python · Pandas · NumPy',
    'MySQL · MongoDB',
    'ETL Pipelines',
    'Data Warehousing',
    'Apache Spark',
    'AWS Cloud',
    'Power BI · Excel',
  ],
};

export default function VideoIntro({ videoSrc, avatarSrc, nextSectionId = 'about' }) {
  const videoRef   = useRef(null);
  const bgVideoRef = useRef(null);
  const tagRef     = useRef(null);
  const nameRef    = useRef(null);
  const roleRef    = useRef(null);
  const divRef     = useRef(null);
  const skillsRef  = useRef(null);
  const ctaRef     = useRef(null);
  const photoRef   = useRef(null);
  const controlRef = useRef(null);
  const scrollRef  = useRef(null);
  const badgeRef   = useRef(null);

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  // ── GSAP entrance ──────────────────────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to(tagRef.current,    { opacity: 1, y: 0, duration: 1,    delay: 0.4 })
      .to(nameRef.current,   { opacity: 1, y: 0, duration: 1.2,  ease: 'power4.out' }, '-=0.5')
      .to(roleRef.current,   { opacity: 1, y: 0, duration: 0.9 },                      '-=0.6')
      .to(divRef.current,    { opacity: 1, width: '120px', duration: 1 },               '-=0.5')
      .to(skillsRef.current, { opacity: 1, y: 0, duration: 0.8 },                      '-=0.5')
      .to(ctaRef.current,    { opacity: 1, y: 0, duration: 0.8 },                      '-=0.4')
      .to(photoRef.current,  { opacity: 1, x: 0, duration: 1.4, ease: 'power3.out' },  '-=1.2')
      .to(controlRef.current,{ opacity: 1, duration: 0.8 },                            '-=0.4')
      .to(scrollRef.current, { opacity: 1, duration: 0.8 },                            '-=0.4');

    gsap.to(badgeRef.current, { opacity: 1, duration: 0.6, delay: 1.6 });
    gsap.to(badgeRef.current, { opacity: 0, duration: 0.8, delay: 5.5 });
  }, []);

  // ── Video controls ──────────────────────────────────────────────────────────
  const toggleMute = () => {
    const v = videoRef.current;
    const bg = bgVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (bg) bg.muted = v.muted;
    setMuted(v.muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    playing ? v.pause() : v.play();
    setPlaying(!playing);
  };

  const scrollToNext = () => {
    document.getElementById(nextSectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section className={styles.hero}>

      {/* Ambient blurred background — video or image fallback */}
      <div className={styles.ambientBg}>
        {videoSrc ? (
          <video
            ref={bgVideoRef}
            src={videoSrc}
            autoPlay loop muted playsInline
            className={styles.bgVideo}
          />
        ) : avatarSrc ? (
          <img src={avatarSrc} alt="" aria-hidden="true" className={styles.bgImg} />
        ) : null}
      </div>

      {/* Three.js bokeh layer */}
      <CinematicLayer />

      {/* Foreground video / photo */}
      {videoSrc ? (
        <div ref={photoRef} className={styles.photoWrap}>
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay loop muted playsInline
            className={styles.heroVideo}
          />
        </div>
      ) : avatarSrc ? (
        <div ref={photoRef} className={styles.photoWrap}>
          <img src={avatarSrc} alt="Kartikey Dwivedi" className={styles.heroPhoto} />
        </div>
      ) : <div ref={photoRef} />}

      {/* Cinematic gradient overlays */}
      <div className={styles.overlayGradient} />

      {/* Hero content */}
      <div className={styles.content}>
        <div ref={tagRef} className={styles.tag}>
          <span className={styles.tagDot} />
          <span className={styles.tagText}>{RESUME_DATA.tagline}</span>
        </div>

        <div ref={nameRef} className={styles.nameBlock}>
          <span className={styles.nameFirst}>{RESUME_DATA.firstName}</span>
          <span className={styles.nameLast}>{RESUME_DATA.lastName}</span>
        </div>

        <div ref={roleRef} className={styles.roleLine}>
          <span className={styles.roleTitle}>
            <strong>{RESUME_DATA.role}</strong>
            {' · '}{RESUME_DATA.subtitle}
          </span>
        </div>

        <div ref={divRef} className={styles.divider} />

        <div ref={skillsRef} className={styles.skillsRow}>
          {RESUME_DATA.skills.map((s) => (
            <span key={s} className={styles.skillPill}>{s}</span>
          ))}
        </div>

        <div ref={ctaRef} className={styles.ctaRow}>
          <button className={styles.btnPrimary} onClick={scrollToNext}>
            View Portfolio
          </button>
          <a
            href="/Kartikey_Dwivedi_Resume.pdf"
            download
            className={styles.btnGhost}
          >
            <DownloadIcon />
            Resume
          </a>
          <span className={styles.contactMini}>
            <a href={`mailto:${RESUME_DATA.email}`}>{RESUME_DATA.email}</a>
          </span>
        </div>
      </div>

      {/* Sound / ambient badge */}
      <div ref={badgeRef} className={styles.soundBadge}>
        <SoundWave />
        <span>Live ambient</span>
      </div>

      {/* Glassmorphism controls */}
      <div ref={controlRef} className={styles.controls}>
        {videoSrc && (
          <>
            <button className={styles.ctrlBtn} onClick={togglePlay} title={playing ? 'Pause' : 'Play'}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button className={styles.ctrlBtn} onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'}>
              {muted ? <MuteIcon /> : <UnmuteIcon />}
            </button>
          </>
        )}
        <button className={styles.ctrlBtn} title="Particles" onClick={() => {}}>
          <ParticleIcon />
        </button>
      </div>

      {/* Scroll indicator */}
      <button ref={scrollRef} className={styles.scrollIndicator} onClick={scrollToNext}>
        <span className={styles.scrollLabel}>Explore</span>
        <span className={styles.scrollLine}>
          <span className={styles.scrollDot} />
        </span>
      </button>

    </section>
  );
}

/* ── Inline micro-icons ── */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" rx="1"/>
    <rect x="14" y="4" width="4" height="16" rx="1"/>
  </svg>
);
const MuteIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/>
  </svg>
);
const UnmuteIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
  </svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);
const ParticleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <circle cx="12" cy="12" r="3"/>
    <circle cx="4"  cy="8"  r="2" opacity="0.5"/>
    <circle cx="20" cy="6"  r="1.5" opacity="0.4"/>
    <circle cx="19" cy="18" r="2" opacity="0.5"/>
    <circle cx="5"  cy="17" r="1.5" opacity="0.4"/>
  </svg>
);
const SoundWave = () => (
  <span className="sound-wave" style={{display:'flex',alignItems:'center',gap:'2px',height:'14px'}}>
    {[0,1,2,3,4].map(i => (
      <span key={i} style={{
        display:'block', width:'2px', borderRadius:'2px',
        background:'#ff8c3c',
        height: [4,8,12,8,4][i]+'px',
        animation: `waveBar 1s ease-in-out ${i*0.1}s infinite`
      }}/>
    ))}
  </span>
);
