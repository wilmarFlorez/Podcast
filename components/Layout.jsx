import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>{ title }</title>
        </Head>
        <header>
          <Link>
            <a href="/" className="logo">
              Podcasts
            </a>
          </Link>
        </header>
        {children}

        <style jsx>
          {`
            header {
              color: #ffffff;
              background: #f3411b;
              padding: 40px 0;
              text-align: center;
              font-size: 3rem;
              letter-spacing: 0.1rem;
              font-weight: 600;
            }

            .logo {
              color: #ffffff;
            }
          `}
        </style>

        <style jsx global>
          {`
            body {
              margin: 0;
              background: #fafafa;
              font-family: 'Arial';
            }

            a {
              text-decoration: none;
              color: #000000;
            }
          `}
        </style>
      </React.Fragment>
    )
  }
}
