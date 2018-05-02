import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <header>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/counter">
      <a style={linkStyle}>Counter</a>
    </Link>
    <Link href="/counter-u1">
      <a style={linkStyle}>Counter-U1</a>
    </Link>
    <Link href="/counter-u2">
      <a style={linkStyle}>Counter-U2</a>
    </Link>
  </header>
)

export default Header
