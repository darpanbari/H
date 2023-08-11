import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Col, Row } from "react-bootstrap";
import { PiCubeFocusDuotone, PiDownloadSimpleBold } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PayslipModal = ({ showModal, onClose, selectedPayslip }) => {
  const data = [
    {
      earnings: "Basic + DA",
      rateOfPay: 30000,
      earnedAmount: 30000,
      deductions: "Provident Fund",
      deductionAmount: 1800,
    },
    {
      earnings: "H R A",
      rateOfPay: 15000,
      earnedAmount: 15000,
      deductions: "ESIC",
      deductionAmount: "-",
    },
    {
      earnings: "Other Allowance",
      rateOfPay: 15000,
      earnedAmount: 15000,
      deductions: "Professional Tax",
      deductionAmount: 300,
    },
    {
      earnings: "Conv",
      rateOfPay: "-",
      earnedAmount: "-",
      deductions: "Advance",
      deductionAmount: "-",
    },
    {
      earnings: "Dra. AL",
      rateOfPay: "-",
      earnedAmount: "-",
      deductions: "MLWF",
      deductionAmount: "-",
    },
    {
      earnings: "Books & Others",
      rateOfPay: "-",
      earnedAmount: 10000,
      deductions: "TDS",
      deductionAmount: "-",
    },
    {
      earnings: "Medical",
      rateOfPay: "-",
      earnedAmount: "-",
      deductions: "F/RECOVERY",
      deductionAmount: "-",
    },
    {
      earnings: "Bonus",
      rateOfPay: "-",
      earnedAmount: "-",
      deductions: "OTHERS",
      deductionAmount: "-",
    },
  ];

  const pdfRef = useRef();

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        const pdfWidth = 595;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("payslip.pdf");
      });
    }
  };

  return (
    <Modal
    show={showModal}
    onHide={onClose}
    //   centered
    backdropClassName="modal-backdrop-payslip"
    size="lg"
    className=""
  >
    <Modal.Header closeButton>
      <Modal.Title className="fs-6 fw-600">Employee Payslip</Modal.Title>
    </Modal.Header>
    <div ref={pdfRef}>
    
        <Modal.Body className="px-4 pt-2 pb-4">

        <div className="d-flex justify-content-between align-items-end px-3 pt-2 pb-2 border-bottom">
          <h2 className="fw-bold green-1 ">H A A J R I</h2>
          <div className="mx-2 d-flex justify-content-end">
            <span
              type="button"
              className="custom-tooltip-btn green-3 text-white custom-border-radius me-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Download"
              onClick={handleDownloadPDF}
            >
              <PiDownloadSimpleBold />
            </span>
            <span
              type="button"
              className="custom-tooltip-btn custom-border-radius text-white orange-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send"
            >
              <BsFillSendFill />
            </span>
          </div>
        </div>
        <div className="border border-2 ">
          <div className="text-center border-bottom">
            <h5 className="fw-bold pt-4 mb-0">SWATI INTERIORS</h5>
            <p className="mb-1">
              305, Sun Ind. Estate, Sun Mill Compound, Lower Parel (W), Mumbai-
              400 013.
            </p>
          </div>
          <div className="border-bottom pt-1 pb-5 px-1">
            <Row>
              <Col sm={6} className="mb-4">
                <Row>
                  <Col xxs={6}>
                    <h6 className="fw-normal d-inline">Emp ID: </h6>
                    <br />
                    <h6 className="fw-normal d-inline">Name: </h6>
                    <br />
                  </Col>
                  <Col xxs={6}>
                    <span className="fw-600">
                      {selectedPayslip?.employeeId}
                    </span>
                    <br />
                    <span className="fw-600">{selectedPayslip?.name}</span>
                    <br />
                  </Col>
                </Row>
              </Col>
              <Col sm={6} className="mb-4">
                <Row>
                  <Col xxs={6}>
                    <h6 className="fw-normal d-inline">Aadhar No: </h6>
                    <br />
                    <h6 className="fw-normal d-inline"> UAN No : </h6>
                    <br />
                  </Col>
                  <Col xxs={6}>
                    <span className="fw-600">707115505009</span>
                    <br />

                    <span className="fw-600"> 101709885707</span>
                    <br />
                  </Col>
                </Row>
              </Col>
              <Col sm={6} className="mb-4">
                <Row>
                  <Col xxs={6}>
                    <h6 className="fw-normal d-inline">Department : </h6>
                    <br />
                    <h6 className="fw-normal d-inline">Designation : </h6>
                    <br />
                  </Col>
                  <Col xxs={6}>
                    <span className="fw-600">COMMERCIAL</span>
                    <br />
                    <span className="fw-600">PROJECT MANAGER</span>
                    <br />
                  </Col>
                </Row>
              </Col>
              <Col sm={6} className="mb-4">
                <Row>
                  <Col xxs={6}>
                    <h6 className="fw-normal d-inline">Month : </h6>
                    <br />
                    <h6 className="fw-normal d-inline">Present Day : </h6>
                    <br />
                  </Col>
                  <Col xxs={6}>
                    <span className="fw-600">Feb-23</span>
                    <br />
                    <span className="fw-600">28</span>
                    <br />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="scroller-div">
            <Table className="mb-0">
              <thead>
                <tr className=" border-bottom">
                  <th className="fw-600">Earnings</th>
                  <th className="fw-600">Rate of Pay</th>
                  <th className="fw-600 text-end">Earnd Amount</th>
                  <th className="fw-600">Deductions</th>
                  <th className="fw-600">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((modaldata, i) => (
                  <tr key={i}>
                    <td className="border-0 py-0">{modaldata.earnings}</td>
                    <td className="border-0 py-0 text-end">
                      {modaldata.rateOfPay}
                    </td>
                    <td className="border-0 py-0 text-end">
                      {modaldata.earnedAmount}
                    </td>
                    <td className="border-0 py-0">{modaldata.deductions}</td>
                    <td className="border-0 py-0 text-center">
                      {modaldata.deductionAmount}
                    </td>
                  </tr>
                ))}

                <tr className=" border-top">
                  <td className="fw-600">Gross Earning</td>
                  <td className="fw-600 text-end">60000</td>
                  <td className="fw-600 text-end">70,000</td>
                  <td className="fw-600">Gross Deductions</td>
                  <td className="fw-600 text-center">2021</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <Row className="">
              <Col md={4}>
                <Table bordered className="mt-3 mb-4">
                  <thead>
                    <tr>
                      <th className="fw-600 font-size-14 py-0">Net Amount</th>
                      <th className="fw-600 font-size-14 text-end border-bottom py-0">
                        67,900
                      </th>
                    </tr>
                  </thead>
                </Table>
                <Table bordered className="mb-0">
                  <thead className="payslip-modal-table-td">
                    <tr>
                      <th className="py-0">Leave Details ==</th>
                      <th className="py-0">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="payslip-modal-table-td">
                    <tr>
                      <td className="py-0">Taken Amount</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                    <tr>
                      <td className="py-0">Opening Bal</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                    <tr>
                      <td className="py-0">EMI ( Deduct)</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                    <tr>
                      <td className="py-0">Closing Bal</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={5} className="mt-auto px-5 payslip-col-padding">
                <Table bordered className="mb-0">
                  <thead className="payslip-modal-table-td">
                    <tr>
                      <th className="py-0">Loan Details ==</th>
                      <th className="py-0">No of Days</th>
                    </tr>
                  </thead>
                  <tbody className="payslip-modal-table-td">
                    <tr>
                      <td className="py-0">Op Balance</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                    <tr>
                      <td className="py-0">Credit</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                    <tr>
                      <td className="py-0">Availed</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                    <tr>
                      <td className="py-0">Closing Bal</td>
                      <td className="text-end py-0">0</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={3}>
                <div className="border pt-3">
                  <p className="mb-0">
                    For <span className="fw-600">Swati Interiors</span>
                  </p>
                </div>
                <div className="border pt-2 text-center h-75">
                  <img src="/sign.PNG" height={100} width={100} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Modal.Body>
      </div>

    </Modal>
  );
};

export default PayslipModal;
