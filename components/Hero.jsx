export default class Hero extends React.Component {
  render() {
    const {channel} = this.props
    return (
      <div className="hero">
        <div className="banner">
          <img src={channel.urls.banner_image.original} alt="" />
        </div>
        <div className="main-item">
          <img src={channel.urls.logo_image.original} alt="" />
          <h1>{channel.title}</h1>
        </div>

        <style jsx>
          {`
            .hero {
              margin-bottom: 10rem;             

            }
            .banner {
              text-align: center;
              background-color: #000000;
              overflow: hidden;
            }
            .banner img {
             
              max-width: 100%;
            }
            .main-item {
              width: 200px;
              height: auto;
              border-radius: 3px;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
              position: absolute;
              transform: translateY(-50%);
              left: 45px;
              border: 1px solid #ffffff;
              background-color: #fafafa;
            }
            .main-item img {
              max-width: 100%;
            }
          `}
        </style>
      </div>
    )
  }
}
