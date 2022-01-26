import ReactDOM from "react-dom";
import App from "./App";
import './index.css'; // index.css에 적힌 내용이 html파일에 style태그가 생성되고 그 내용으로 들어간다.

ReactDOM.render(
    <App />,
    document.getElementById("root")
);