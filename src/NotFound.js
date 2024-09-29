import "./App.css";
import logo from "./assets/logo.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/");
        }, 10000);
        return () => clearTimeout(timeout);
    }, [navigate]);
  return (
    <div className="not-found">
      <img src={logo} alt="logo" />
      <section className="not-found">
        <lottie-player
          src="https://lottie.host/c72805e3-1f82-4a70-b6ed-b328407c74ae/4GoKIoFWkv.json"
          background="##FFFFFF"
          speed="1"
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <h1>Not Found!</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
      </section>
      <p>You will be redirected to the home page in a few moments.</p>
    </div>
  );
}
