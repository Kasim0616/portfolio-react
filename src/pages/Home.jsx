import React from 'react'
import Hero from '../components/Hero.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="home-content">
        <section id="about" className="story-section">
          <p className="section-kicker">About</p>
          <h3 className="section-title">Engineer &mdash; Builder &mdash; Coder</h3>
          <p>
            My path into computer science was not a straight line. I began in civil engineering, drafting bridges and
            structures on paper, but I felt a growing pull toward the systems hidden behind the screen—the logic,
            automation, and intelligence that bring ideas to life.
          </p>
          <p>
            That curiosity carried me into Cognizant Technology Solutions, where I had to unlearn and relearn nearly
            everything. The transition was demanding, yet it taught me perseverance, discipline, and the value of asking
            questions until the problem bends.
          </p>
          <p>
            Two years later, Voya Financial hired me directly as a Senior Software Engineer. There I built stable, secure,
            and automated systems with tools such as Dynatrace, Relius, and Visual Cron—work that proved to me that
            resilience can rebuild a career from scratch.
          </p>
          <p>
            Today I am pursuing my master&apos;s in applied computer science at SRH Stuttgart, diving deeper into security
            governance and automation. I am looking for challenges where I can contribute, learn fast, and build something
            meaningful alongside a team that cares about reliability and impact.
          </p>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-intro">
            <p className="section-kicker">Contact</p>
            <h3 className="section-title">Let&apos;s build with purpose !</h3>
            <p>
              I&apos;m interested in conversations about any opportunity where I can contribute, learn, and grow. Whether you have a project in mind,
              need a collaborator, or just want to say hello, feel free to reach out .
            </p>
          </div>
          <div className="contact-actions">
            <a className="primary-btn" href="mailto:bkasimnihal@gmail.com">Email Me</a>
            <a className="ghost-btn" href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

