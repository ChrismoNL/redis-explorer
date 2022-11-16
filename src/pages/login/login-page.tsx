import { Button } from "devextreme-react";
import Form, {
  ButtonItem,
  GroupItem,
  RequiredRule,
  SimpleItem,
} from "devextreme-react/form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setRootPassword } from "../../features/rootPassword/rootPasswordSlice";
import "./login-page.css";

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    <div className="init-page">
      <form onSubmit={handleSubmit}>
        <Form
          formData={rootPasswordFormData}
          readOnly={false}
          showColonAfterLabel={true}
          showValidationSummary={true}
          validationGroup="rootPasswordData"
          className="root-password-form"
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
