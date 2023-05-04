import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormWrap, Formlabel ,Form,FormH1,Text,Icon} from './SigninElements';

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Astric</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Signin To Your Account</FormH1>
                    <Formlabel htmlFor='for'>Email</Formlabel>
                    <FormInput type="email" required/>
                    <Formlabel htmlFor='for'>Password</Formlabel>
                    <FormInput type="password" required/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forget password?</Text>

                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn;