import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


// for this restaurantMenu we are going to use custom hook to optimize the code.

const RestaurantMenu = () => {
    // const [restaurantMenu, setRestaurantMenu] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId)
        
    //     const json = await data.json();
    //     setRestaurantMenu(json.data);

    // };

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards[2]?.card?.card;
    
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