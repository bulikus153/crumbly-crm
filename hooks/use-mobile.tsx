import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange)
    } else {
      // Safari < 14 support
      // @ts-ignore - addListener exists on older browsers
      mql.addListener(onChange)
    }
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", onChange)
      } else {
        // @ts-ignore - removeListener exists on older browsers
        mql.removeListener(onChange)
      }
    }
  }, [])

  return !!isMobile
}
