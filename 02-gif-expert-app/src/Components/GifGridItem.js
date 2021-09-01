const GifGridItem = ({id, url, title}) => {

    return (
        <div className="card">
            <img src={url} alt={title} className="card-image" />
            <p key={id}>{title}</p>
        </div>
        );

}

export default GifGridItem;