import React from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";

function Role1popover() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    console.log("button clicked")
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div>
      <div ref={ref}>
        <Button onClick={handleClick} className="bg-dark rounded-0">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/17/05/20/info-2150938_960_720.png"
            style={{
              height: "25px",
              width: "25px",
              marginTop: "10px",
              marginBottom: "10px",
              borderRadius: "none",
            }}
          />
        </Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">
              News Reporter / Fact Checker
            </Popover.Header>
            <Popover.Body>
              Providing the latest Crypto news from verified sources and
              fact-checkers that will ensure the validity of the information
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </div>
  );
}

export default Role1popover;
