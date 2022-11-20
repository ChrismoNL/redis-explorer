import { Button } from "devextreme-react";
import Form, {
  ButtonItem,
  GroupItem,
  RequiredRule,
  SimpleItem,
} from "devextreme-react/form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  initializeRoot,
  setRootPassword,
} from "../../features/rootPassword/rootPasswordSlice";
import "./login-page.css";

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isInitialized = useAppSelector(
    (state) => state.rootPassword.isInitialized
  );
  const hasRootPassword = useAppSelector(
    (state) => state.rootPassword.hasRootPassword
  );

  useEffect(() => {
    dispatch(initializeRoot());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isInitialized === false) {
      navigate("/init");
    } else if (isInitialized === true) {
      if (hasRootPassword) {
        navigate("/");
      }
    }
  }, [isInitialized]); // eslint-disable-line react-hooks/exhaustive-deps

  const rootPasswordFormData = {
    rootPassword: "",
  };
  const loginButtonOptions = {
    text: "Login",
    type: "success",
    useSubmitBehavior: true,
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setRootPassword(rootPasswordFormData.rootPassword));
    navigate("/");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <Form
          formData={rootPasswordFormData}
          readOnly={false}
          showColonAfterLabel={true}
          showValidationSummary={true}
          validationGroup="rootPasswordData"
          className="login-form"
        >
          <GroupItem caption="Login">
            <SimpleItem
              dataField="rootPassword"
              editorType="dxTextBox"
              editorOptions={{ mode: "password" }}
            >
              <RequiredRule message="Password is required" />
            </SimpleItem>
          </GroupItem>
          <ButtonItem
            horizontalAlignment="right"
            buttonOptions={loginButtonOptions}
          />
        </Form>
      </form>
      <p className="warning">
        Did you forgot your root password? Then you can only delete all data and
        start from scratch.
      </p>
      <Button text="Delete all data" type="danger" />
    </div>
  );
}

export default LoginPage;
