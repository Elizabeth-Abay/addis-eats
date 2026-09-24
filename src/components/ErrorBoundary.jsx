import { useNavigate } from "react-router-dom";

export default function MyErrorFallback({ error }) {
    let navigate = useNavigate();
    let  resetErrorBoundary = () => {
        navigate('/')
    }
    return (
        <div role="alert" style={{ padding: "20px", color: "red" }}>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}