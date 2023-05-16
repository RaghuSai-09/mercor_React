import "./App.css";
import React from "react";
// import Chronicle from "./images/Chronicle.svg";
import TextAnimation from "./components/Animate";
import Page from "./components/Page";
// import NewSlider from "./components/NewSlider";
function App() {
  return (
    <div className=" font-customised1">
      <div className=" fixed top-0 left-0 text-white w-11 h-11 rounded-full m-5 bg-[#101010] flex items-center justify-center z-50">
        <svg
          width="30"
          height="30"
          viewBox="0 0 450 450"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M243.261 154.303C257.775 131.446 268.924 106.739 276.445 80.8153C306.945 146.238 373.275 191.685 450 191.685V258.315C449.785 258.315 449.571 258.315 449.357 258.314C343.816 258.314 257.946 344.309 257.945 450H191.411L191.411 449.958C191.411 353.446 244.537 269.134 323.056 224.807C291.833 207.054 264.649 182.967 243.261 154.303Z"
            fill="#fff"
          />
          <path
            d="M173.245 368.177C143.784 305.61 81.496 261.468 8.76703 258.168C5.85282 258.265 2.93017 258.314 0 258.315L0.000113279 191.34C2.9414 191.34 5.87136 191.39 8.7892 191.488C56.5987 189.336 101.259 169.656 135.356 135.55C171.534 99.3615 191.369 51.1799 191.369 0L257.904 2.91221e-06C257.904 69.0034 231.082 133.842 182.346 182.649C165.639 199.379 147.052 213.53 127.061 224.905C158.158 242.604 185.244 266.589 206.582 295.123C192.266 317.554 180.96 342.097 173.245 368.177Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className=" w-32 fixed top-0 right-0 m-5 z-50">
        <button className=" w-[100%] px-5 py-3 bg-white rounded-xl font-bold text-lg">
          Join Beta
        </button>
      </div>
      <TextAnimation />
      <Page />
      {/* <NewSlider /> */}
    </div>
  );
}

export default App;
