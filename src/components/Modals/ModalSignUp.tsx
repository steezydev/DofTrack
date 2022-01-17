import { useState, useEffect } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

//Components
import Button from "../Buttons/Button";

//Schema
import { SignUpSchema } from "../../schemas/authSchema";

interface SignUpData {
  name: string;
  email: string;
  password: string;
  repass: string;
}

type FieldType = "name" | "email" | "password" | "repass";

export default NiceModal.create(({ goalId }: { goalId: string }) => {
  const modal = useModal();

  const [singUpData, setSingUpData] = useState<SignUpData>({} as SignUpData);
  const [isWrongPass, setIsWrongPass] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSignUp = () => {
    if (!buttonLoading) {
      setButtonLoading(true);
      const authData = SignUpSchema.safeParse(singUpData);

      console.log(singUpData);
      //TODO: Sign up user with firebase

      if (authData.success) {
      } else {
        console.log(authData.error);
        setButtonLoading(false);
      }
    }
  };

  const handleChangeField = (type: FieldType, value: string) => {
    setSingUpData((prevState) => ({ ...prevState, [type]: value }));
  };

  useEffect(() => {
    if (singUpData.password != singUpData.repass) {
      setIsWrongPass(true);
    } else {
      setIsWrongPass(false);
    }
  }, [singUpData.password, singUpData.repass]);

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
              <span className="text-grey-darker">Name</span>
              <input
                type="text"
                className="outline-dashed outline-2 outline-grey-darker rounded-md p-1"
                onChange={(e) => handleChangeField("name", e.target.value)}
              ></input>
            </div>
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
            <div className="flex flex-col gap-1">
              <span className="text-grey-darker">Repeat password</span>
              <input
                type="password"
                className={`${
                  isWrongPass ? "text-red outline-red" : "outline-grey-darker"
                } outline-dashed outline-2  rounded-md p-1`}
                onChange={(e) => handleChangeField("repass", e.target.value)}
              ></input>
              <span
                className={`${
                  isWrongPass ? "visible" : "hidden"
                } text-red text-sm`}
              >
                Passwords don't match
              </span>
            </div>
            <div className="flex flex-row gap-3">
              <input type="checkbox" />
              <span className="text-grey-darker">I accept the rules</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full justify-center items-center">
            <Button
              type="register"
              loading={buttonLoading}
              action={handleSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
