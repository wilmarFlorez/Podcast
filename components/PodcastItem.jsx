export default class PodcastItem extends React.Component {
  render() {
    const { clip } = this.props
    return (
      <React.Fragment>
        <img src={clip.urls.image} alt="" />
        <h2>{clip.title}</h2>

        <style jsx>
          {`
            img {
              width: 100%;
            }
            h2 {
              padding: 5px;
              font-size: 0.9em;
              font-weight: 600;
              margin: 0;
              text-align: center;
            }
          `}
        </style>
      </React.Fragment>
    )
  }
}
