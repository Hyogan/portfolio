'use client'

import Image from 'next/image'
import { useTheme } from '@/components/providers/ThemeProvider'

interface LogoProps {
  /** Pixel size — applied to both width and height (square logos) */
  size?: number
  /** Use the no-background version (transparent, works on any colored surface) */
  noBg?: boolean
  priority?: boolean
  className?: string
  alt?: string
}

export default function Logo({
  size = 26,
  noBg = false,
  priority = false,
  className,
  alt = 'AT Logo',
}: LogoProps) {
  const { isLight } = useTheme()

  // const src = noBg
  //   ? '/assets/logo-no-bg.png'
  //   : isLight
  //     ? '/assets/logo-dark.png'
  //     : '/assets/logo.png'

  const src = isLight ? '/assets/logo.png' : '/assets/logo-no-bg.png';

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  )
}
