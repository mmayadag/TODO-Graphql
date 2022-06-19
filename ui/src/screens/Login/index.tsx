import { FC, useState, useEffect, useContext } from "react";
import { Title, MainContainer, Description, TextInput, LinkDescription, Button } from "@/components";
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '@/graphql/login';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from "react-router-dom";

const SignUp: FC = () => {
    const [login, { data, error, reset }] = useMutation(LOGIN_MUTATION);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { Login } = useContext(AuthContext);

    useEffect(() => {
        if (data?.login) {
            Login(data.login);
            navigate("/todolist", { replace: true });
        }
    }, [data])
    return (
        <MainContainer minHeight="471px">
            <Title>Welcome Back!</Title>
            <Description>Log in to continue.</Description>
            <TextInput placeholder="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
            <TextInput placeholder="Password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
            <LinkDescription to="/signup">Don't have an account? Sign up.</LinkDescription>
            {
                error &&
                <div onClick={() => reset()}>{error.message}</div>
            }
            <Button title="Log In" onClick={() => { login({ variables: { email, password } }) }} />
        </MainContainer>
    )
};
// disable={!(email.length > 0 && password.length > 0)} ;

export default SignUp;