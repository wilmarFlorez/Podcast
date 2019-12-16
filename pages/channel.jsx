import 'isomorphic-fetch'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PodcastListWithClick from '../components/PodcastListWithClick'
import Error from './_error'
import PodcastPlayer from '../components/PodcastPlayer'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { openPodcast: null }
  }

  static async getInitialProps({ query, res }) {
    let idChannel = query.id
    try {
      let [reqChannel, reqSeries, reqAudios] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      ])

      if (reqChannel.status >= 404) {
        res.statusCode = reqChannel.statusCode
        return {
          channels: null,
          audioClips: null,
          series: null,
          statusCode: reqChannel.status,
        }
      }

      let dataChannel = await reqChannel.json()
      let channel = dataChannel.body.channel

      let dataAudios = await reqAudios.json()
      let audioClips = dataAudios.body.audio_clips

      let dataSeries = await reqSeries.json()
      let series = dataSeries.body.channels

      return { channel, audioClips, series, statusCode: 200 }
    } catch (error) {
      return { channels: null, audioClips: null, series: null, statusCode: 503 }
    }
  }

  openPodcast = (event, podcast) => {
    event.preventDefault()
    this.setState({
      openPodcast: podcast,
    })
  }

  closePodcast = (event) => {
    event.preventDefault()
    this.setState({
      openPodcast: null
    })
  }

  render() {
    const { channel, audioClips, series, statusCode } = this.props
    const { openPodcast } = this.state

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout>
        <Hero channel={channel} />

        {/* <h2 className="title-section">Series</h2>
        <div className="items">
          {series.map(serie => (
            <div className="item" key={serie.id}>
              <img src={serie.urls.logo_image.original} alt="" />
              <h2>{serie.title}</h2>
            </div>
          ))}
        </div> */}
        {openPodcast && <div className="modal">
            <PodcastPlayer clip={openPodcast} onClose={this.closePodcast}/>
        </div>}

        <h2 className="title-section">Últimos Podcasts</h2>
        <PodcastListWithClick
          podcasts={audioClips}
          onClickPodcast={this.openPodcast}
        />

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
          .item img {
            width: 100%;
          }
          h1 {
            padding: 5px;
            font-size: 1.5rem;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
            background-color: rgba(0, 0, 0, 0.85);
          }
          .title-section {
            font-size: 1.8rem;
          }
        `}</style>
      </Layout>
    )
  }
}
