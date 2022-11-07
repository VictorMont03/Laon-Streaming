import Link from "next/link";

const Footer = () => {
  return (
    <footer className="tw-flex tw-w-full tw-justify-between tw-border-t-[1px] tw-border-t-lightPurple  tw-px-[5%] tw-py-[25px] tw-fixed tw-bottom-0">
      <div>
        <img src="/images/logo.svg" />
      </div>
      <div className="tw-w-[60%] tw-flex tw-justify-between tw-items-center tw-text-lightPink">
        <Link href="/">Ínicio</Link>
        <Link href="/login">Entrar ou Cadastrar</Link>
        <Link href="/termos-e-condicoes">Termos e Condições</Link>
        <Link href="/politicas de privacidade">Política de Privacidade</Link>
        <Link href="/ajuda">Ajuda</Link>
      </div>
      <div className="tw-flex">
        <a
          href="https://www.facebook.com/laonlabs/"
          target="_blank"
          className="tw-flex tw-items-center tw-justify-center tw-border-[1px] tw-border-lightPink tw-rounded-[50%] tw-w-[30px] tw-h-[30px] tw-mr-[20px]"
        >
          <img src="/icons/facebook.svg" />
        </a>
        <a
          href="https://www.facebook.com/laonlabs/"
          target="_blank"
          className="tw-flex tw-items-center tw-justify-center tw-border-[1px] tw-border-lightPink tw-rounded-[50%] tw-w-[30px] tw-h-[30px] tw-mr-[20px]"
        >
          <img src="/icons/twitter.svg" />
        </a>
        <a
          href="https://www.facebook.com/laonlabs/"
          target="_blank"
          className="tw-flex tw-items-center tw-justify-center tw-border-[1px] tw-border-lightPink tw-rounded-[50%] tw-w-[30px] tw-h-[30px] tw-mr-[20px]"
        >
          <img src="/icons/youtube.svg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
