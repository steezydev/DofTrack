import React from "react";
import { useNavigate } from "react-router-dom";
import { showSignIn } from "../../modal/showModal";

export default function PageHome() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    showSignIn();
  };

  return (
    <main className="h-full">
      <header className="p-4 mb-3">
        <h1 className="text-center text-4xl font-bold text-black">Home</h1>
      </header>
      <div className="flex justify-evenly">
        <div onClick={() => navigate(`/dreams`)} className="flex flex-col items-center gap-2 outline-2 rounded-md p-5 px-16 cursor-pointer">
          <img width={160} src="/images/goblet.png"></img>
          <span className="text-3xl text-black">Dreams</span>
        </div>

        <div onClick={() => navigate(`/goals`)} className="flex flex-col items-center gap-2 outline-2 rounded-md p-5 px-16 cursor-pointer">
          <img width={160} src="/images/quality.png"></img>
          <span className="text-3xl text-black">Goals</span>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <span className="text-grey-light">Some statistics should be there. Work in progress...</span>
      </div>

      {/*<span onClick={handleSignIn}>Sign In</span>*/}
    </main>
  );
}
