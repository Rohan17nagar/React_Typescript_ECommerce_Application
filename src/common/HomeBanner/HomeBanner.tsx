import { allImages } from "../../assets/images/allImages";
import "./HomeBanner.scss";

const HomeBanner = () => {
  return (
    <div className="home-banner-container">
      <div className="home-banner-text">
        <div className="home-banner-heading">Shop now</div>
        <img
          className="home-banner-img"
          src={allImages.banner}
          alt="home-banner"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
