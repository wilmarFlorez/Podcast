import 'isomorphic-fetch'

import Layout from '../components/Layout'
import Player from '../components/Player'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const idPodcast = query.id

    let reqPodcast = await fetch(
      `https://api.audioboom.com/audio_clips/${idPodcast}.mp3`
    )
    let { body: audioClip } = await reqPodcast.json()
    return { audioClip }
  }

  render() {
    const { audioClip } = this.props
    console.log(audioClip)
    return (
      <Layout title={audioClip.audio_clip.title}>
        <div className="container">
          <div className="user">
            <img src={audioClip.audio_clip.user.urls.image} alt="" />
            <h3>{audioClip.audio_clip.user.username}</h3>
          </div>
          <div className="info-podcast">
            <h1>{audioClip.audio_clip.title}</h1>
            <p>{audioClip.audio_clip.description}</p>
          </div>   
          <Player audioClip={audioClip.audio_clip}/>     
        </div>
        <style jsx>{`
          .container {
            background-color: #ffffff;
            padding: 1rem;
            max-width: 1140px;
            margin: auto;
          }
          .info-podcast {
            max-width: 70%;
            margin-bottom: 2rem;
          }
          .info-podcast p {
            max-height: 185px;
            overflow: auto;
            padding: 0.5em;
          }
          .user img {
            max-width: 60px;
            height: auto;
            border-radius: 50%;
            vertical-align: middle;
            border: 1.5px solid gray;
          }
          .user h3 {
            display: inline-block;
            vertical-align: middle;
            padding: 10px;
            margin: 0;
          }
        `}</style>
      </Layout>
    )
  }
}
