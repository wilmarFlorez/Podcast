export default class Player extends React.Component {
  render() {
    const { audioClip } = this.props
    return (
      <div className="player">
        <img
          className="img-podcast"
          src={audioClip.urls.image}
          alt=""
        />
        <audio src={audioClip.urls.high_mp3} controls></audio>

        <style jsx>
          {`
            .player {
              background-color: #0e8056;
              padding: 1rem;
              display: inline-block;
              max-width: 40%;
            }
            .player .img-podcast {
              max-width: 100%;
              margin-bottom: 1rem;
            }
            .player audio {
              width: 100%;
              color: #430ee8;
              display: block;
              opacity: 0.7;
              outline: none;
            }
          `}
        </style>
      </div>
    )
  }
}
