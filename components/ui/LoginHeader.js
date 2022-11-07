import Link from "next/link";
import { useRouter } from "next/router";

const LoginHeader = () => {
  const router = useRouter();

  return (
    <header className="tw-w-full tw-flex tw-justify-between tw-items-center tw-py-[25px] tw-px-[5%] tw-border-b-[2px] tw-border-b-mediumPurple">
      <button
        onClick={() => router.back}
        className="tw-text-white tw-flex tw-items-center tw-cursor-pointer"
      >
        <div className="tw-border-[1px] tw-border-lightPurple tw-rounded-[50%] tw-p-[10px] tw-mr-[10px]">
          <img src="/icons/arrow.svg" className="tw-w-[14px]" />
        </div>
        VOLTAR
      </button>
      <Link href="/">
        <img src="/images/logo.svg" />
      </Link>
      <button
        onClick={() => router.push("register")}
        className="tw-text-white tw-flex tw-items-center tw-cursor-pointer"
      >
        CADASTRAR
      </button>
    </header>
  );
};

export default LoginHeader;
