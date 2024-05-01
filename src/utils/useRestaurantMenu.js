import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();

    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);

        json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
};

export default useRestaurantMenu;

// this i have created custom hook for fetching the data for restaurantMenu and this custom hook I am using inside my RestaurantMenu component is that nice it is very nice i loved it.
// bcoz using this hook I have optimize my code.let suppose if I have any error in displaying RestaurantMenu i will check restaurantMenu component and I have
// any problem in fetching data I will check useRestaurantMenu hook isn't it cool.