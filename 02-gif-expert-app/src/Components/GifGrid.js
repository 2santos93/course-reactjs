
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}) => {

    const {gifs, loading} = useFetchGifs(category);
    
    return (
        <div className="animate__animated animate__fadeIn">
        <h1>{category}</h1>

            {loading && <h2 className="animate__animated animate__heartBeat">Loading</h2>}

            <div className="card-container">
            {
                gifs.map((gif) => <GifGridItem key={gif.id} {...gif}/>)
            }
            </div>
        </div>

    );
}

export default GifGrid;