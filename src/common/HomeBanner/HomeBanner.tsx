import { allImages } from "../../assets/images/allImages";
import Button from "../Button/Button";
import "./HomeBanner.scss";

const HomeBanner = () => {
  const handleButtonClick = () => {
    console.log("button click.");
  };

  return (
    <div className="home-banner-container">
      <div className="home-banner-text">
        <div className="home-banner-heading">
          <div className="home-banner-heading-text">
            Fresh and Nutritious Vegetables
          </div>
          <div className="home-banner-sub-text">
            Discover a world of fresh, locally sourced vegetables for a healthy
            lifestyle.
          </div>
          <Button
            buttonName="Shop Now"
            buttonClick={() => handleButtonClick()}
          />
        </div>
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
