import { useTest } from "./hooks/useTest"

export const Loading2 = () => {
    console.log('loading 2');

    useTest(2);

    return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
