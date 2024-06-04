import { ThemeContext } from "./theme-context";

const Message = () => {
    return (
        <>
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div
                            style={{
                                padding: 20,
                                borderRadius: 10,
                                backgroundColor: value.theme === "light" ? "#eee" : "#333",
                                color: value.theme === "light" ? "#333" : "#eee"
                        }}>
                            <h1> Current Theme: {value.theme} </h1>    
                            <button onClick={()=> value.toggleTheme()}>Toggle Theme</button>
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        </>
    )
}
export default Message;