import { FC } from "react";
import { Title, MainContainer, Description, TextInput, LinkDescription, Button } from "@/components";

const SignUp: FC = () => {
    return (
        <MainContainer minHeight="530px">
            <Title>Welcome !</Title>
            <Description>Sign up to start using Simpledo today.</Description>
            <TextInput placeholder="Full Name" />
            <TextInput placeholder="Email" type="email" />
            <TextInput placeholder="Password" type="password" />
            <LinkDescription>Do have an account? Sign in.</LinkDescription>
            <Button title="Sign Up" />
        </MainContainer>
    )
};

export default SignUp;