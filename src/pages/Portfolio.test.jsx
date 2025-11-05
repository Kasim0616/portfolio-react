import React from 'react'
import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio'

vi.mock('gsap', () => {
  const timelineInstance = {
    from: vi.fn().mockReturnThis(),
    fromTo: vi.fn().mockReturnThis(),
    to: vi.fn().mockReturnThis(),
  }

  return {
    default: {
      registerPlugin: vi.fn(),
      context: (callback) => {
        if (typeof callback === 'function') {
          callback()
        }
        return { revert: vi.fn() }
      },
      timeline: vi.fn(() => timelineInstance),
      from: vi.fn(),
      to: vi.fn(),
      fromTo: vi.fn(),
      utils: { toArray: () => [] },
    },
  }
})

vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: {} }))

describe('Portfolio page', () => {
  it('renders grouped skills with expected content', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { level: 3, name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: /programming languages/i })).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('REST APIs')).toBeInTheDocument()
  })

  it('renders project categories and cards', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { level: 3, name: /project work/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: /python projects/i })).toBeInTheDocument()
    expect(screen.getByText(/Satellite Tracker App/i)).toBeInTheDocument()
    expect(screen.getByText(/Smart Bookmark Manager/i)).toBeInTheDocument()
  })
})
