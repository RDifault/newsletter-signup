import { useState, useRef } from "react";
import IllustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import Checklist from "./assets/images/icon-list.svg";
import BigChecklist from "./assets/images/icon-success.svg";
// import "./App.css";

function App() {
  const emailInputRef = useRef(null);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  function SuccessMessage() {
    return (
      <>
        <div className="bg-white md:h-full h-[100vh] p-6 px-10 grid grid-rows-4 rounded-none md:rounded-3xl items-center max-w-[500px] flex-wrap">
          <img className="" src={BigChecklist} alt="" />
          <p className="text-left text-5xl lg:text-6xl text-cgrey-300 font-bold">Thanks for subscribing!</p>
          <p className="text-left text-cgrey-300">A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
          <button
                onClick={clearEmail}
                className="transition ease-in-out bg-cgrey-300 p-4 mt-2 rounded-lg w-full font-bold hover:bg-gradient-to-l hover:from-tomato hover:to-pink-500 hover:shadow-lg hover:shadow-tomato"
              >
                Dismiss Message
              </button>
        </div>
      </>
    );
  }

  const clearEmail = () => {
    setEmail("");
    // console.log(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (email === "" || !emailReg.test(email)) {
      setError(true);
      console.log("error");
    } else {
      emailInputRef.current.value = "";
      // console.log(email);
      setError(false);
      setEmail(email);
      // return SuccessMessage();
    }
  };

  return (
    <div>
      {email != "" ? (
        <SuccessMessage />
      ) : (
        <div className="bg-white h-full lg:p-6 grid grid-row-5 lg:flex lg:flex-row-reverse lg:justify-between md:rounded-3xl lg:items-center max-w-[980px] flex-wrap pb-4">
          <img className="w-full object-cover -translate-y-12 lg:translate-y-0 lg:w-fit md:rounded-t-3xl"
            src={
              window.innerWidth < 1024
                ? IllustrationMobile
                : IllustrationDesktop
            }
            alt=""
          />
          <div className="grid grid-row-4 items-start mx-8 mt-4 mb-10 lg:ml-10 lg:mr-16 text-left max-w-[380px]">
            <p className="text-5xl lg:text-6xl text-cgrey-300 font-bold mb-8 lg:mb-4">
              Stay Updated!
            </p>
            <p className="text-cgrey-300 mb-8 lg:mb-4">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div>
              <div className="flex mb-4 lg:mb-2 items-start">
                <img src={Checklist} alt="" />
                <p className="text-cgrey-300 ml-4">
                  Product discovery and building what matters
                </p>
              </div>
              <div className="flex mb-4 lg:mb-2 items-start">
                <img src={Checklist} alt="" />
                <p className="text-cgrey-300 ml-4">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="flex mb-4 lg:mb-2 items-start">
                <img src={Checklist} alt="" />
                <p className="text-cgrey-300 ml-4">And much more!</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full mx-auto mt-8">
              <div className="mb-8 lg:mb-5">
                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-cgrey-300"
                  >
                    Email address:
                  </label>
                  {error ? (
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-tomato"
                    >
                      Valid email required
                    </label>
                  ) : (
                    ""
                  )}
                </div>

                <input
                  ref={emailInputRef}
                  type="text"
                  id="email"
                  className={
                    error
                      ? "bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-4"
                      : "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg accent-cgrey-300 block w-full p-4"
                  }
                  placeholder="email@company.com"
                />
              </div>
              <button
                type="submit"
                className="transition ease-in-out bg-cgrey-300 p-4 mt-2 rounded-lg w-full font-bold hover:bg-gradient-to-l hover:from-tomato hover:to-pink-500 hover:shadow-lg hover:shadow-tomato"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
