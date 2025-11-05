import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const bgRef = useRef(null)
  const textRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headlineRef = useRef(null)
  const signatureRef = useRef(null)
  const scrollCueRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray('[data-depth]', heroRef.current)
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || '0')
        gsap.to(layer, {
          y: () => -(window.innerHeight * depth),
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1, opacity: 0.06, xPercent: -8 },
          {
            scale: 1.08,
            opacity: 0.12,
            xPercent: 8,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 0 },
          {
            y: -50,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      }

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReduced) {
        const introTL = gsap.timeline({ defaults: { ease: 'power3.out' } })
        introTL
          .from(eyebrowRef.current, { y: 24, opacity: 0, duration: 0.6 })
          .from(headlineRef.current, { y: 36, opacity: 0, duration: 0.8 }, '-=0.3')
          .from(signatureRef.current?.children || [], { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.4')
          .from(scrollCueRef.current, { y: 10, opacity: 0, duration: 0.6 }, '-=0.3')
      }

      if (scrollCueRef.current) {
        gsap.to(scrollCueRef.current, {
          y: 12,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: 'sine.inOut',
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const heroEl = heroRef.current
    if (!heroEl) return

    const updateSpotlight = (event) => {
      const rect = heroEl.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      heroEl.style.setProperty('--spot-x', `${x}%`)
      heroEl.style.setProperty('--spot-y', `${y}%`)
      heroEl.style.setProperty('--spot-opacity', '1')
    }

    const resetSpotlight = () => {
      heroEl.style.setProperty('--spot-opacity', '0')
    }

    heroEl.addEventListener('pointermove', updateSpotlight)
    heroEl.addEventListener('pointerleave', resetSpotlight)

    return () => {
      heroEl.removeEventListener('pointermove', updateSpotlight)
      heroEl.removeEventListener('pointerleave', resetSpotlight)
    }
  }, [])

  const handleScrollCueClick = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="hero-layers">
        <span className="hero-orb orb-1" data-depth="0.18" />
        <span className="hero-orb orb-2" data-depth="0.28" />
        <span className="hero-orb orb-3" data-depth="0.45" />
      </div>
      <div className="hero-bg" aria-hidden="true" ref={bgRef} data-depth="0.12">
        PORTFOLIO
      </div>
      <div className="hero-inner" ref={textRef}>
        <p className="eyebrow" ref={eyebrowRef}>KASIM NIHAL BASHEER RAGUMAN</p>
        <h1 className="headline" ref={headlineRef}>Welcome to my portfolio</h1>
        <div className="hero-signature" ref={signatureRef}>
          
          <span>Software Engineer | Problem Solver | System Builder</span>
          
          
        </div>
      </div>
      <button
        type="button"
        className="scroll-cue"
        ref={scrollCueRef}
        onClick={handleScrollCueClick}
        aria-label="Scroll to about section"
      >
        <span className="scroll-cue__dot" />
        <span className="scroll-cue__label">Scroll</span>
      </button>
    </section>
  )
}

