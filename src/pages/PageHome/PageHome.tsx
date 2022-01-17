import React from "react";
import { showSignIn } from "../../modal/showModal";

export default function PageHome() {
  const handleSignIn = () => {
    showSignIn()
  };

  return (
    <div>
      <span onClick={handleSignIn}>Sign In</span>
    </div>
  );
}
