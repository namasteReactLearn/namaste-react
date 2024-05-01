import { useEffect, useState } from "react";
import { LIST_API } from "./constants";
import { json } from "react-router-dom";

const [listData, setListData] = useState([]);
const [filteredRes, setFilteredRes] = useState([]);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch(LIST_API);
    json = await data.json();
    setListData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const useRestaurantList = () => {};

export default useRestaurantList;
