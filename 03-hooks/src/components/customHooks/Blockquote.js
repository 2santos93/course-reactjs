export const Blockquote = ({quote, author}) => {
    return (
        <blockquote className="blockquote">
            <p>{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    )
}
