import Form, {
  ButtonItem,
  CompareRule,
  GroupItem,
  Label,
  RequiredRule,
  SimpleItem,
} from "devextreme-react/form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setRootPassword } from "../../features/rootPassword/rootPasswordSlice";
import "./init-page.css";

function InitPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const rootPasswordFormData = {
    rootPassword: "",
  };
  const buttonOptions = {
    text: "Save",
    type: "success",
    useSubmitBehavior: true,
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setRootPassword(rootPasswordFormData.rootPassword));
    navigate("/");
  };

  const passwordComparison = () => {
    return rootPasswordFormData.rootPassword;
  };
  return (
    <div className="init-page">
      <h1>Welkom</h1>
      <p>
        We know that we cannot make a browser application 100% secure. But we
        try to make it as secure as possible. Therefor we use a root password.
      </p>
      <form onSubmit={handleSubmit}>
        <Form
          formData={rootPasswordFormData}
          readOnly={false}
          showColonAfterLabel={true}
          showValidationSummary={true}
          validationGroup="rootPasswordData"
          className="root-password-form"
        >
          <GroupItem caption="Set Root Password">
            <SimpleItem
              dataField="rootPassword"
              editorType="dxTextBox"
              editorOptions={{ mode: "password" }}
            >
              <RequiredRule message="Password is required" />
            </SimpleItem>
            <SimpleItem
              editorType="dxTextBox"
              editorOptions={{ mode: "password" }}
            >
              <Label text="Confirm Password" />
              <RequiredRule message="Confirm Password is required" />
              <CompareRule
                message="Password and Confirm Password do not match"
                comparisonTarget={passwordComparison}
              />
            </SimpleItem>
          </GroupItem>
          <ButtonItem
            horizontalAlignment="right"
            buttonOptions={buttonOptions}
          />
        </Form>
      </form>
      <p className="warning">
        <strong>NB:</strong> don't forget this password, we cannot restore it!
      </p>
    </div>
  );
}

export default InitPage;
