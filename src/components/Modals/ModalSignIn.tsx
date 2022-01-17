import { useState, useEffect } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

//Components
import Button from "../Buttons/Button";

//Schema
import { SignInSchema } from "../../schemas/authSchema";

//Modal
import { showSignUp } from "../../modal/showModal";

interface SignInData {
  email: string;
  password: string;
}

type FieldType = "email" | "password";

export default NiceModal.create(({ goalId }: { goalId: string }) => {
  const modal = useModal();

  const [singInData, setSingInData] = useState<SignInData>({} as SignInData);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSignUp = () => {
    showSignUp();
    modal.remove();
  };

  const handleChangeField = (type: FieldType, value: string) => {
    setSingInData((prevState) => ({ ...prevState, [type]: value }));
  };

  const handleSignIn = () => {
    if (!buttonLoading) {
      setButtonLoading(true);
      const authData = SignInSchema.safeParse(singInData);

      console.log(singInData);
      //TODO: Sign in user with firebase

      if (authData.success) {
      } else {
        console.log(authData.error);
        setButtonLoading(false);
      }
    }
  };

  return (
    <div
      className={`min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 animate-fade-in`}
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0 "
        onClick={modal.remove}
      ></div>
      <div className="p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white animate-fade-in-up">
        <div className="flex flex-col justify-center items-center gap-9 p-3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-grey-darker">Email</span>
              <input
                type="email"
                className="outline-dashed outline-2 outline-grey-darker rounded-md p-1"
                onChange={(e) => handleChangeField("email", e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-grey-darker">Password</span>
              <input
                type="password"
                className="outline-dashed outline-2 outline-grey-darker rounded-md p-1"
                onChange={(e) => handleChangeField("password", e.target.value)}
              ></input>
            </div>
            <div className="flex flex-row gap-3">
              <input type="checkbox" />
              <span className="text-grey-darker">Remember me</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full justify-center items-center">
            <Button
              loading={buttonLoading}
              type="signin"
              action={handleSignIn}
            />
            <Button type="register" action={handleSignUp} />
          </div>
        </div>
      </div>
    </div>
  );
});
