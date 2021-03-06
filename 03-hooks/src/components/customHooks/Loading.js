import { useTest } from "./hooks/useTest"

export const Loading = () => {
    console.log('loading 1');
    useTest(1);

    return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
