'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/cv', label: 'CV' },
    { href: 'https://x.com/faiazparis', label: 'X', external: true },
    { href: 'https://github.com/faiazparis', label: 'GitHub', external: true },
  ]

  return (
    <header>
      <nav>
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const linkProps = item.external 
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? 'active' : ''}
              {...linkProps}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
