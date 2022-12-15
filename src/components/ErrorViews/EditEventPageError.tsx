import { Result, Button } from "antd";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export const EditEventPageError: FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/");
  };

  return (
    <Result
      status="500"
      title="Error"
      subTitle="Sorry, we can't find that event."
      extra={
        <Button type="primary" onClick={navigateToCreate}>
          Make another?
        </Button>
      }
    />
  );
};

export default EditEventPageError;
