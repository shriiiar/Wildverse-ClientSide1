import { useEffect, useState } from "react";
import jsonData from '../Components/Fake Data/fakeData.JSON';
import { addGame, getGames } from "../Components/Fake Data/FakeStorage";

const useData = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(jsonData)
            .then(res => res.json())
            .then(newData => setData(newData))
    }, []);

    return [data, setData];
}

export default useData