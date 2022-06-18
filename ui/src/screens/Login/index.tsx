import { FC } from "react";
// @ts-ignore
import { Title, MainContainer, Description, TextInput, LinkDescription, Button } from "@/components";

const SignUp: FC = () => {
    return (
        <MainContainer minHeight="471px">
            <Title>Welcome Back!</Title>
            <Description>Log in to continue.</Description>
            <TextInput placeholder="Email" type="email" />
            <TextInput placeholder="Password" type="password" />
            <LinkDescription>Don't have an account? Sign up.</LinkDescription>
            <Button title="Log In" />
        </MainContainer>
    )
};

export default SignUp;