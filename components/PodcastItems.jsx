import Link from 'next/link'

import PodcastItem from '../components/PodcastItem'

export default class PodcastItems extends React.Component {
  render() {
    const { audioClips } = this.props

    return (
      <React.Fragment>
        <div className="items">
          {audioClips.map(clip => (
            <Link href={`/podcast?id=${clip.id}`}>
              <a href="" className="item">
                <PodcastItem clip={clip} />
              </a>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .items {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .item {
            display: block;
            border-radius: 3px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5em;
          }
        `}</style>
      </React.Fragment>
    )
  }
}
