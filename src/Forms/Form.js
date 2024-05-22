export const Form = ({ children, ...props }) => {
  return (
    <form className="App-step" {...props} noValidate>
      {children}
    </form>
  );
};
