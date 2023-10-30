import React, { useState } from 'react';
import styled , { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 50px auto 0 auto;
  border: 1px solid #2196F3;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

const colorChange = keyframes`
  0% {
    color: #000;
  }
  50% {
    color: #ff5733;
  }
  100% {
    color: #000;
  }
`;
const Heading = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #000;
  animation: ${colorChange} 3s infinite;
`;

const Emoji = styled.span`
  margin-right: 10px;
  font-size: 28px;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: calc(100% - 40px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #2196F3;
  border-radius: 5px;
  margin-bottom: 10px; /* Adjusted margin */
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #2196F3;
  cursor: pointer;
  margin-top:20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #2196F3;
  font-size: 14px;
  cursor: pointer;
  margin-left: auto; /* Align to the right */
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CheckboxLabel = styled.label`
  margin-left: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
   &:hover {
    background-color: #45a049; 
  }
`;

const RegistrationLink = styled(Link)`
  margin-top: 10px; 
  margin-right:100px;
`;
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Heading>
        Aimed Labs Login Page<br />
        <Emoji>🙏</Emoji>
      </Heading>
      
      <InputContainer>
      <Input type="text" placeholder="Username" />
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
        />
        <ToggleButton type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'View'}
        </ToggleButton>
      </InputContainer>
      <Link href="#">Change Password ?</Link>
      <CheckboxContainer>
        <input type="checkbox" id="rememberMe" />
        <CheckboxLabel htmlFor="rememberMe">Remember me</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <input type="checkbox" id="termsAndConditions" />
        <CheckboxLabel htmlFor="termsAndConditions">I agree to the terms and conditions</CheckboxLabel>
      </CheckboxContainer>
      <Button>Login</Button>
      Don't have an account ?<RegistrationLink href="#"> Register now</RegistrationLink>
    </Container>
  );
};

export default Login;
