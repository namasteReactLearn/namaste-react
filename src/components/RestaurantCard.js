import { CARD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
      resData?.info;
    return (
      <div className="res-card">
        <img
          alt="megna-img"
          className="card-image"
          src={CARD_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;