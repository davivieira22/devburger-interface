import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup'
import { api } from '../../services/api';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
} from './styles';
import { Button } from '../../components/button';
import Logo from '../../assets/logo.svg';
import { nominalTypeHack } from 'prop-types';




export const Cadastro = () => {

  const schema = yup
    .object({
      name: yup
        .string()
        .required('O nome e obrigatorio '),
      email: yup
        .string()
        .email('digite um e-mail valido ')
        .required('o email e obrigatorio'),

      password: yup
        .string()
        .min(6, 'A senha e no minimo 6 caracteres')
        .required('digite uma senha  '),

      comfirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais ')
        .required('confirme a senha '),

    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try
    {
      const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
        {

          ValidityState: () => true
        });
      if (status === 200 || status === 201) {
        toast.success('conta criada com sucesso!')

      } else if (status === 409) {
        toast.error('email ja cadastrado!faça o login para continuar ');
      }
      else {
        throw new Error();
      }
         } catch (error) {
      toast.error("email ja cadastrado!faça o login para continuar ");

    }
console.log(status)
  };
 

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title> criar conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>nome</label>
            <input type="name" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>confimar senha</label>
            <input type="password" {...register('comfirmPassword')} />
            <p>{errors?.comfirmPassword?.message}</p>
          </InputContainer>


          <Button type="submit">Confirmar cadastro</Button>
        </Form>
        <p>
          ja possui conta?<a>clique aqui</a>
        </p>
      </RightContainer>
    </Container>
  );
};
