export const SignUp = () => {
  return <>This is SIgnup Module</>;
};

const Login = ({ color, display, extraIcon }) => {
  return (
    <div>
      <p>This is Login page</p>
      <p>The color is {color}</p>
      <p>Display {display}</p>
      <p>ExtraIcon {extraIcon}</p>
    </div>
  );
};

export default Login;
