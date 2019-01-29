import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <header>
    <Link prefetch href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link prefetch href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link prefetch href="/counter">
      <a style={linkStyle}>Counter</a>
    </Link>
    <Link prefetch href="/counter-u1">
      <a style={linkStyle}>Counter-U1</a>
    </Link>
    <Link prefetch href="/counter-u2">
      <a style={linkStyle}>Counter-U2</a>
    </Link>
    <Link prefetch href="/counter-res">
      <a style={linkStyle}>Counter-RES</a>
    </Link>
    <Link prefetch href="/counter-res1">
      <a style={linkStyle}>Counter-RES1</a>
    </Link>
    <Link prefetch href="/counter-res2">
      <a style={linkStyle}>Counter-RES2</a>
    </Link>
    <Link prefetch href="/counter-hooks">
      <a style={linkStyle}>Counter-Hooks</a>
    </Link>
    <Link prefetch href="/counter-ezpz1">
      <a style={linkStyle}>Counter-EZPZ1</a>
    </Link>
    <Link prefetch href="/counter-ezpz2">
      <a style={linkStyle}>Counter-EZPZ2</a>
    </Link>
    <Link prefetch href="/tir-hooks">
      <a style={linkStyle}>TIR-Hooks</a>
    </Link>
  </header>
)

export default Header
