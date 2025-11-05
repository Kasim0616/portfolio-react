import React from 'react'

const Icon = ({ path }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
)

export default function SocialBar() {
  return (
    <div className="social-bar">
      <div className="social-left">
        <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer">
          <Icon path="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.82 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.13-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.46 11.46 0 0 1 6 0C16.42 4.3 17.43 4.6 17.43 4.6c.65 1.65.25 2.87.12 3.17.76.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.83.58A12 12 0 0 0 12 .5z" />
        </a>
        
      </div>
    
    </div>
  )
}

