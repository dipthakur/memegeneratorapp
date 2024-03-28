import React, { useEffect, useState } from "react";
import MemeCard from "../Card";
import { getAllMeme } from "../../api/meme";

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMeme().then(Meme => setData(Meme.data.memes));
    }, []);

    return (
        <div className="row">
            {data.map((el) => (
                <MemeCard key={el.id} img={el.url} title={el.name} />
            ))}
        </div>
    );
};

export default HomePage;
