import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import { Router } from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
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
              background: #ee314c;
              padding: 20px 0;
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

            /* Make clicks pass-through */
            #nprogress {
              pointer-events: none;
            }

            #nprogress .bar {
              background: #29d;

              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;

              width: 100%;
              height: 2px;
            }

            /* Fancy blur effect */
            #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px #29d, 0 0 5px #29d;
              opacity: 1;

              -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
            }

            /* Remove these to get rid of the spinner */
            #nprogress .spinner {
              display: block;
              position: fixed;
              z-index: 1031;
              top: 15px;
              right: 15px;
            }

            #nprogress .spinner-icon {
              width: 18px;
              height: 18px;
              box-sizing: border-box;

              border: solid 2px transparent;
              border-top-color: #29d;
              border-left-color: #29d;
              border-radius: 50%;

              -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
            }

            .nprogress-custom-parent {
              overflow: hidden;
              position: relative;
            }

            .nprogress-custom-parent #nprogress .spinner,
            .nprogress-custom-parent #nprogress .bar {
              position: absolute;
            }

            @-webkit-keyframes nprogress-spinner {
              0% {
                -webkit-transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(360deg);
              }
            }
            @keyframes nprogress-spinner {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </React.Fragment>
    )
  }
}
