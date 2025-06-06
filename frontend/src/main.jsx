import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import ReactDOM from "react-dom/client";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
