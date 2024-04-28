import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        
        const json = await data.json();
        setRestaurantMenu(json.data);

    };

    if(restaurantMenu === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage
    } = restaurantMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);


    
    return(
        <div>
            <h2>{name}</h2>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
           <h2>Menu</h2>
        <ul>
            {itemCards.map(item => 
            <li key = {item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
        </ul>
        </div>
    );
}

export default RestaurantMenu;