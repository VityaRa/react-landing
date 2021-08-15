import { useState, useEffect } from 'react'
import { MOBILE_WIDTH } from '../utils/constants'

const useResolution = (resolution = MOBILE_WIDTH) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleResize = () => {
        let width = window.innerWidth
        if (width <= resolution) setIsMobile(true)
        else setIsMobile(false)
    }

    return isMobile
}

export default useResolution
