import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";


const Home = () => {
    const navigate = useNavigate()
    const [photosIds, setPhotosIds] = useState([]);

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = async () => {
        const { data } = await api.get(`/list?limit=5`);
        if (data && data.length > 0) {
            setPhotosIds(data.map((el: any) => el.id))
        }
    }

    return (
        <></>
    );
};

export default Home;