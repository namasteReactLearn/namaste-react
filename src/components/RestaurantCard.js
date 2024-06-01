import { useContext } from "react";
import { CARD_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {loggedInUser} = useContext(UserContext);


  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[300px] bg-gray-100 rounded-lg transform hover:scale-110 hover:ease-out duration-300">
      <img
        alt="Img"
        className="rounded-lg h-48 w-80"
        src={CARD_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg text-wrap">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>

    </div>
  );
};

// Higher Order Component
// Input  -RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
