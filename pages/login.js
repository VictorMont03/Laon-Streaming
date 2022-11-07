//Components
import LoginHeader from "../components/ui/LoginHeader";
import { Input } from "../components/forms/Input";
import { Button } from "../components/forms/Button";

//auth context
import { useAuth } from "../context/auth";

//Form logic
import { useForm } from "react-hook-form";

//yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Form schema
const schema = yup
  .object({
    email: yup.string().required("Campo email é obrigatório"),
    password: yup.string().required("Campo senha é obrigatório"),
  })
  .required();

export default function Login() {
  //Form declarations
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const { signIn } = useAuth();

  const onSubmit = async ({ email, password }) => {
    try {
      signIn({ email, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="tw-bg-darkPurple tw-h-[100vh]">
      <LoginHeader />
      <section className="tw-w-full tw-flex tw-justify-center tw-items-center tw-h-[90vh]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autocomplete="off"
          className="tw-bg-mediumPurple tw-w-[50%] tw-px-[10%] tw-py-[50px]"
        >
          <h1 className="tw-text-white tw-text-[24px]">Entrar</h1>
          <p className="tw-text-lightPink tw-mb-[30px]">
            Bem vindo(a) de volta!
          </p>
          <Input
            placeholder="Email"
            name="email"
            type="email"
            required
            isErrored={!!errors.email}
            errorMessage={errors.email?.message}
            register={register}
          />
          <Input.Password
            placeholder="Senha"
            name="password"
            required
            isErrored={!!errors.password}
            errorMessage={errors.password?.message}
            register={register}
          />
          <Button content="ENTRAR" type="submit" />
        </form>
      </section>
    </main>
  );
}
