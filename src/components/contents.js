import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Contents = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Closed");

  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("Opened");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("Closed");

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="contents">
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        자세히보기
      </Button>
      <h5>{status}</h5>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>{props.txt}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Contents;
