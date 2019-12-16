import slug from '../helpers/slug'

export default class extends React.Component {
  render() {
    const { podcasts, onClickPodcast } = this.props

    return (
      <div className="container">
        {podcasts.map(podcast => (
          <a
            href={`/${slug(podcast.channel.title)}.${podcast.channel.id}/${slug(
              podcast.title
            )}.${podcast.id}`}
            className="podcast"
            key={podcast.id}
            onClick={event => onClickPodcast(event, podcast)}
          >
            <h3>
              <div className="playIcon"></div>
              {podcast.title}
            </h3>
            <div className="meta">
              {Math.ceil(podcast.duration / 60)} minutes
            </div>
          </a>
        ))}

        <style jsx>{`
          .container {
            max-width: 1140px;
            margin: auto;
          }
          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }
          .podcast:hover {
            color: #000;
            background-color: #ffffff;
          }
          .podcast h3 {
            margin: 0;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
          }
          .playIcon {
            width: 12px;
            height: 12px;
            background-color: #303030;
            display: inline-block;
            margin-right: 10px;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            transform: rotate(90deg);
            border: 1px solid #ee314c;
          }
        `}</style>
      </div>
    )
  }
}
