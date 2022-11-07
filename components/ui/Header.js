//utis
import getFirstLetters from "../../utils/GetFirstLetters";

//auth context
import { useAuth } from "../../context/auth";
import { useState } from "react";

import { useRouter } from "next/router";

const Header = () => {
  const { user, signOut } = useAuth();

  const [showUser, setShowUser] = useState(false);

  const router = useRouter();
  return (
    <header className="tw-w-full tw-flex tw-items-center tw-justify-between tw-px-[5%] tw-py-[25px] tw-border-b-[1px] tw-border-b-lightPurple">
      <div>
        <img src="/images/logo.svg" />
      </div>
      <div className="tw-flex tw-items-center">
        <div className="tw-flex tw-items-center tw-justify-center tw-border-[1px] tw-border-lightPink tw-rounded-[50%] tw-w-[30px] tw-h-[30px] tw-mr-[20px]">
          <img src="/icons/search.svg" />
        </div>
        {user != null ? (
          <button
            className="tw-bg-lightPink tw-w-[30px] tw-h-[30px] tw-flex tw-justify-center tw-items-center tw-rounded-[50%] tw-cursor-pointer tw-relative"
            onClick={() => setShowUser(!showUser)}
          >
            <p className="tw-text-darkPurple tw-font-bold ">
              {getFirstLetters(user)}
            </p>
            {showUser ? (
              <div className="tw-absolute tw-top-[30px] tw-w-[140px] tw-bg-lightPurple tw-px-[20px] tw-py-[20px] tw-rounded-[10px]">
                <p className="tw-text-lightPink tw-text-start tw-w-full">
                  Olá {user}!
                </p>
                <button
                  className="tw-bg-lightPink tw-text-white tw-w-[100%] tw-mt-[10px] tw-rounded-[5px] hover:tw-text-darkPurple"
                  onClick={() => signOut()}
                >
                  Sair?
                </button>
              </div>
            ) : (
              ""
            )}
          </button>
        ) : (
          <button
            onClick={() => router.push("login")}
            className="tw-text-white"
          >
            LOGIN
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
