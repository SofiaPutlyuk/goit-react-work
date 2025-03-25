function SayWeather(text) {
    alert(text)
}
const Button = (props) => (
    <button onClick={() => SayWeather(props.newText)}>Click me</button>
)
export default Button;