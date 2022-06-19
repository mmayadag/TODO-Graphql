import { FC, useState } from "react";
import { Title, MainContainer, Description, TextInput, LinkDescription, Button } from "@/components";
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '@/graphql/signUp';

const SignUp: FC = () => {

    const [signup, { error, reset }] = useMutation(SIGNUP_MUTATION);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <MainContainer minHeight="530px">
            <Title>Welcome !</Title>
            <Description>Sign up to start using Simpledo today.</Description>
            <TextInput placeholder="Full Name" value={name} onChange={(e: any) => setName(e.target.value)} />
            <TextInput placeholder="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
            <TextInput placeholder="Password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
            <LinkDescription to="/login">Do have an account? Sign in.</LinkDescription>
            {
                error &&
                <div onClick={() => reset()}>{error.message}</div>
            }
            <Button title="Sign Up" onClick={() => signup({ variables: { name, email, password } })} />
        </MainContainer>
    )
};

export default SignUp;