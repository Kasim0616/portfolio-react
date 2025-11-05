import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillSections = [
  {
    title: 'Programming Languages',
    items: ['R','Java', 'Python', 'JavaScript', 'SAP ABAP' ],
  },
  {
    title: 'Databases',
    items: ['MongoDB' ,'MySQL','SAP HANA' ],
  },
  {
    title: 'Libraries & Frameworks',
    items: ['React'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Google Colab', 'Google Cloud Platform (GCP)', 'Dynatrace', 'Visual Cron', 'Relius'],
  },
  {
    title: 'APIs',
    items: ['REST APIs', 'SOAP APIs'],
  },
  {
    title: 'Version Control',
    items: ['Git','GitHub'],
  },
  {
    title: 'IDEs',
    items: ['RStudio','VS Code'],
  },
  {
    title: 'Architecture & Services',
    items: ['Software Architecture', 'Frontend Development', 'Application Security', 'Process Automation'],
  },
]

const projectGroups = [
  {
    category: 'Python Projects',
    projects: [
      {
        name: 'LLM Project - Job Prediction using Machine Learning AI',
        context: 'Google Colab',
        description:
          'Built a regression-driven pipeline to predict salary, experience, and location from historical job listings using feature engineering and preprocessing.',
      },
      {
        name: 'Satellite Tracker App',
        context: 'Live API',
        description: 'Used a live orbital-tracking API to display satellites currently passing over Germany with real-time updates.',
      },
      {
        name: 'SRH AI Assistance',
        context: 'Gemini vs ChatGPT Mini',
        description:
          'Evaluated Gemini and ChatGPT Mini models for a college admissions chatbot, comparing context retention, accuracy, and response usefulness.',
      },
    ],
  },
  {
    category: 'Java Projects',
    projects: [
      {
        name: 'SRH Hospital Management System',
        context: 'Desktop Application',
        description: 'Developed a basic hospital management app covering patient intake, appointments, and staff scheduling workflows.',
      },
      {
        name: 'Smart Bookmark Manager',
        context: 'Desktop Application',
        description: 'Created a bookmark manager for readers to capture, tag, and organize saved articles for quick retrieval.',
      },
    ],
  },
]

export default function Portfolio() {
  const heroRef = useRef(null)
  const kickerRef = useRef(null)
  const titleRef = useRef(null)
  const leadRef = useRef(null)
  const sectionRefs = useRef([])
  const cueRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(kickerRef.current, { y: 24, opacity: 0, duration: 0.6 })
        .from(titleRef.current, { y: 32, opacity: 0, duration: 0.8 }, '-=0.4')
        .from(leadRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      if (cueRef.current) {
        tl.from(cueRef.current, { y: 12, opacity: 0, duration: 0.5 }, '-=0.3')
        gsap.to(cueRef.current, {
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 1.4,
          ease: 'sine.inOut',
        })
      }

      sectionRefs.current.forEach((section) => {
        if (!section) return
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const heroEl = heroRef.current
    if (!heroEl) return

    const handleMove = (event) => {
      const rect = heroEl.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      heroEl.style.setProperty('--portfolio-spot-x', `${x}%`)
      heroEl.style.setProperty('--portfolio-spot-y', `${y}%`)
      heroEl.style.setProperty('--portfolio-spot-opacity', '1')
    }

    const handleLeave = () => {
      heroEl.style.setProperty('--portfolio-spot-opacity', '0')
    }

    heroEl.addEventListener('pointermove', handleMove)
    heroEl.addEventListener('pointerleave', handleLeave)

    return () => {
      heroEl.removeEventListener('pointermove', handleMove)
      heroEl.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  const handleCueClick = () => {
    const target = document.getElementById('experience')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="portfolio-content" ref={heroRef}>
      <header className="portfolio-hero">
        <div className="portfolio-spotlight" aria-hidden="true" />
        <span className="section-kicker" ref={kickerRef}>Portfolio</span>
        <h2 className="section-title" ref={titleRef}>Experience &amp; Work</h2>
        <p ref={leadRef}>
          Engineering the kind of software you don't have to think twice about because good code should speak through stability.
        </p>
        <button type="button" className="portfolio-scroll" onClick={handleCueClick} ref={cueRef}>
          <span className="portfolio-scroll__icon" />
          <span className="portfolio-scroll__label">Browse</span>
        </button>
      </header>

      <section
        id="experience"
        className="portfolio-section"
        ref={(el) => {
          sectionRefs.current[0] = el
        }}
      >
        <div className="section-heading">
          <h3>Experience</h3>
          <p>Highlights from the journey so far.</p>
        </div>
        <div className="experience-timeline">
          <article className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-year">2022 &ndash; Present</span>
            </div>
            <div className="timeline-body">
              <h4>Voya Financial &mdash; Senior Software Engineer</h4>
              <p>
                Lead backend engineering, process automation, and application security initiatives with Dynatrace, Relius,
                and Visual Cron to deliver reliable customer-facing solutions.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-year">2020 &ndash; 2022</span>
            </div>
            <div className="timeline-body">
              <h4>Cognizant Technology Solutions &mdash; Junior Software Engineer</h4>
              <p>
                Developed core application features and operations workflows while transitioning from civil engineering into
                software development.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="education"
        className="portfolio-section"
        ref={(el) => {
          sectionRefs.current[1] = el
        }}
      >
        <div className="section-heading">
          <h3>Education</h3>
          <p>Current academic focus.</p>
        </div>
        <div className="education-card">
          <h4>SRH Stuttgart &mdash; Master&apos;s in Applied Computer Science</h4>
          <p>
            Exploring advanced computer science topics with an emphasis on security governance, automation, and responsible
            deployment of technology in enterprise environments.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="portfolio-section"
        ref={(el) => {
          sectionRefs.current[2] = el
        }}
      >
        <div className="section-heading">
          <h3>Skills</h3>
          <p>Tools and concepts I reach for most.</p>
        </div>
        <div className="skills-groups">
          {skillSections.map((section) => (
            <article key={section.title} className="skill-card">
              <header className="skill-card__header">
                <h4 className="skill-card__title">{section.title}</h4>
              </header>
              <div className="skill-card__body">
                {section.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="project-work"
        className="portfolio-section"
        ref={(el) => {
          sectionRefs.current[3] = el
        }}
      >
        <div className="section-heading">
          <h3>Project Work</h3>
          <p>Initiatives and experiments.</p>
        </div>
        <div className="project-groups">
          {projectGroups.map((group) => (
            <div key={group.category} className="project-group">
              <h4 className="project-group__title">{group.category}</h4>
              <div className="project-list">
                {group.projects.map((project) => (
                  <article key={project.name} className="project-card">
                    <header className="project-card__header">
                      <h5 className="project-card__name">{project.name}</h5>
                      <span className="project-card__context">{project.context}</span>
                    </header>
                    <p className="project-card__description">{project.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
