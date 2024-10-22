import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

export default function CoupanModal() {
  const [isCoupan, setIsCoupan] = useState(false);
  const [searchParams] = useSearchParams();
  const coupanvalue = searchParams.get("coupan");

  useEffect(() => {
    if (coupanvalue === "GU-50%off") {
      setIsCoupan(true);
    } else {
      setIsCoupan(false);
    }
  }, [coupanvalue]);
  return (
    <Modal show={isCoupan} onHide={setIsCoupan} centered>
      <Modal.Body className="text-center py-4">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <img
                src="/Coupan.png"
                alt="Coupon Popup"
                style={{ height: "64px", margin: "0 auto" }}
              />
              <h5 className="font-weight-bolder py-3">
                50%-OFF Discount Applied
              </h5>
              <p className="text-muted">
                Your coupon has been applied successfully
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 ">
            <Button
              onClick={() => setIsCoupan(false)}
              variant="primary"
              style={{
                backgroundColor: "#0F203D",
                borderColor: "#0F203D",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Ok
            </Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
