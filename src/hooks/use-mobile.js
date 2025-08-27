import { useState, useEffect } from 'react'

/**
 * useMobile - A custom hook to determine if the device is mobile based on screen width
 * @returns {boolean} - True if the device is mobile
 */
export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if the screen width is less than 768px
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    checkMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return isMobile
}
