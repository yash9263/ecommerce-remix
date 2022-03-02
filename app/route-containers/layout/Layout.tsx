import type { ReactNode } from 'react'
import { GlobalStyles } from '~/styles/globalStyles'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

/* TODO:
  1. Update header component
  2. Update  footer component
*/

function Header() {
  return <header>header</header>
}

function Footer() {
  return <footer>footer</footer>
}
