import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Contents = (props) => {
  /*
   <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        자세히보기
      </Button>
      <h5>{status}</h5>
  onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}*/
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Closed");

  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("Opened");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("Closed");

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="contents">
      <Card>
        <CardBody>{props.txt}</CardBody>
      </Card>
    </div>
  );
};

export default Contents;
