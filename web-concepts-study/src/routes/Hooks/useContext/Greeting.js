import { useContext } from "react";
import { ThemeContext } from "./theme-context";

const Greeting = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div
            style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: theme === "light" ? "#eee" : "#333",
            color: theme === "light" ? "#333" : "#eee",
            marginTop: 20
        }}>
            <h1>Hello World</h1>
        </div>
    )
}

export default Greeting;