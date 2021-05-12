import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../shared/button';
import Container from '../../shared/container';
import TextBox from '../../shared/textbox';

import './login.css';

const passwordCheck = "42(3UPpl}S&6r-x1IRQ{";
const nameCheck = "Möbius";
const codeUSA = "Lincoln";
const codeUDSSR = "Stalin";



function Login() {

    const history = useHistory();

    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [passwordWrongCounter, setPasswordWrongCounter] = useState<number>(42);

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {

        setPassword(e.target.value);

    };

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {

        setName(e.target.value);

    };

    const onCodeChange = (e: ChangeEvent<HTMLInputElement>) => {

        setCode(e.target.value);

    };

    const confirm = () => {
        if(passwordCheck === password && nameCheck === name) {
            switch(code) {
                case codeUDSSR:
                    history.push("/dashboard/einstein");
                    break;
                case codeUSA:
                    history.push("/dashboard/newton");
                    break;
                default:
                    history.push("/dashboard/möbius");
                    break;
            }
            return;
        }
        setPasswordWrongCounter(passwordWrongCounter - 1);
        console.log(passwordWrongCounter);
    }

    return (
        <div className="Login">
            <div className="ContainerWrapper">
                <Container>
                    <h2>Anmelden</h2>
                    <form>
                        <TextBox placeholder="Deinen Namen hier eingeben" onChange={onNameChange} value={name} title="Name" />
                        <div className="spacer"/>
                        <TextBox placeholder="Deinen Passwort hier eingeben" onChange={onPasswordChange} value={password} title="Password" isPassword={true}/>
                        <div className="spacer"/>
                        <TextBox placeholder="Deinen Geheim-Code hier eingeben" onChange={onCodeChange} value={code} title="Geheim-Code" hidden={true} isPassword={true}/>
                    </form>
                    <div className="spacer"/>
                    <Button text="Bestätigen" onClick={confirm} />
                    <p hidden={0!==passwordWrongCounter}>Dᔑᓭ pᔑᓭᓭ∴𝙹∷↸ ╎ᓭℸ ̣  ⍑╎ᒷ∷ ↸⚍ i↸╎𝙹ℸ ̣ : /リ𝙹.!¡↸⎓</p>
                </Container>
            </div>
        </div>
    );


}

export default Login;