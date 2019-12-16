import { Link } from '../routes'
import slug from '../helpers/slug'

export default class PodcastPlayer extends React.Component {
  render() {
    const { clip, onClose } = this.props

    return (
      <div className="modal">
        <div className="clip">
          <nav>
            {onClose ? (
              <a className="circleIcon" onClick={onClose}>
                &lt;
              </a>
            ) : (
              <Link
                route="channel"
                params={{ slug: slug(clip.channel.title), id: clip.channel.id }}
                prefetch
              >
                <a className="close">&lt; Volver</a>
              </Link>
            )}
          </nav>

          <picture>
            <div
              style={{
                backgroundImage: `url(${clip.urls.image ||
                  clip.channel.urls.logo_image.original})`,
              }}
            />
          </picture>

          <div className="player">
            <h3>{clip.title}</h3>
            <h6>{clip.channel.title}</h6>
            <audio controls autoPlay={true} preload={"auto"}>
              <source src={clip.urls.high_mp3} type="audio/mpeg" />
            </audio>
          </div>
        </div>

        <style jsx>{`
          nav {
            background: none;
          }
          nav a {
            display: inline-block;
            padding: 10px;
            color: white;
            cursor: pointer;
            text-decoration: none;
          }
          .clip {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: #282828;
            color: white;
          }
          picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }
          picture div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .player {
            padding: 30px;
            background: rgba(0, 0, 0, 0.3);
            border-top: 1px solid #000000;
            text-align: center;
          }
          h3 {
            margin: 0;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
          }
          audio {
            margin-top: 2em;
            width: 100%;
            opacity: 0.8;
            outline: none;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
          .circleIcon {
            width: 25px;
            height: 25px;
            background-color: #000000;
            border-radius: 50%;
            margin: 10px;
            font-size: 1.5rem;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            text-align: center;
            opacity: 0.65;
            transition: opacity .1s ease-in-out;
            border: 1px solid #000000;
          }
          .circleIcon:hover {
            opacity: 1;
            transition: opacity .1s ease-in-out;
          }
        `}</style>
      </div>
    )
  }
}
