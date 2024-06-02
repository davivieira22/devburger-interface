import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api";
import {toast} from "react-toastify";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required()


import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
} from './styles'
import { Button } from '../../components/button'
import Logo from '../../assets/logo.svg'



export const Login = () => {
  const schema = yup
    .object({
      email: yup.string().email('digite um e-mail valido ')
        .required('o email e obrigatorio'),

      password: yup.string()
        .min(6, 'A senha e no minimo 6 caracteres')
        .required('digite uma senha  '),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  console.log(errors)

  const onSubmit = async (data) => {
    const respose = await toast.promise( 
       api.post('/session', {
      email: data.email,
      password: data.password,

    }),
    { 
      pending: 'verificando dados ',
      success: 'seja bem-vindo(a) ao devburger 👌',
      error: 'Email ou senha incorreto🤯'
    

    }
  
  );
    
    
    
    
   ;
    console.log(respose)
  }




  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='logo-devburger' />
      </LeftContainer>

      <RightContainer>
        <Title>Olá, seja bem vindo ao<span> Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span></Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password"{...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit" >Entrar</Button>
        </Form>
        <p>nao tem conta?<a>clique aqui</a></p>

      </RightContainer>

    </Container>
  );
}
