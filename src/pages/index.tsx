import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail obrigatorio').required('E-mail invalido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState
  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {

  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" onSubmit={handleSubmit(handleSignIn)} width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" {...register('email')} error={errors.email} />
          <Input name="password" type="password" label="Senha" {...register('password')} error={errors.password} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
