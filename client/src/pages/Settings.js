import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineDownload } from "react-icons/ai";
import { CgSoftwareUpload } from "react-icons/cg";
import { LuCreditCard } from "react-icons/lu";
import { FiLayout } from "react-icons/fi";
import { HiOutlineSun } from "react-icons/hi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import LabTabs from "../components/SettingsTabs.js";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import "../styles/Settings.css";
import { Link } from "react-scroll";
import UseTooltip from "../components/useTooltip";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";

const Settings = () => {
  // first component
  const [appName, setAppName] = useState("");
  const [footerText, setFooterText] = useState("");
  const [defaultLanguage, setDefaultLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppName("");
    setFooterText("");
    setDefaultLanguage("");

    console.log(appName, footerText, defaultLanguage);
  };

  const initiallySelectedFile = new File([], "user.jpg");
  initiallySelectedFile.path = "/client/public/user.png";

  const [selectedFile1, setSelectedFile1] = useState(initiallySelectedFile);
  const [selectedFile2, setSelectedFile2] = useState(initiallySelectedFile);
  const [selectedFile3, setSelectedFile3] = useState(initiallySelectedFile);
  const [selectedFile4, setSelectedFile4] = useState(initiallySelectedFile);

  const handleFileInputChange1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  const handleFileInputChange2 = (event) => {
    const file = event.target.files[0];
    setSelectedFile2(file);
  };

  const handleFileInputChange3 = (event) => {
    const file = event.target.files[0];
    setSelectedFile3(file);
  };



  UseTooltip();
  //   second component

  const [mailDriver, setMailDriver] = useState("********************");
  const [mailHost, setMailHost] = useState("********************");
  const [mailPort, setMailPort] = useState("********************");
  const [mailUsername, setMailUsername] = useState("********************");
  const [mailPassword, setMailPassword] = useState("********************");
  const [mailEncryption, setMailEncryption] = useState("********************");
  const [mailFromAddress, setMailFromAddress] = useState(
    "********************"
  );
  const [mailFromName, setMailFromName] = useState("********************");

  //   fourth component

  const [pusherAppId, setPusherAppId] = useState("********************");
  const [pusherAppKey, setPusherAppKey] = useState("********************");
  const [pusherAppSecret, setPusherAppSecret] = useState(
    "********************"
  );
  const [pusherAppCluster, setPusherAppCluster] = useState(
    "********************"
  );

  //   fifth component

  const [recaptchaKey, setRecaptchaKey] = useState("********************");
  const [recaptchaSecret, setRecaptchaSecret] = useState(
    "********************"
  );

  //   seventh component

  const [companyName, setCompanyName] = useState("Global Exports");
  const [address, setAddress] = useState("114 New Mexico 371");
  const [city, setCity] = useState("Wilmington");
  const [state, setState] = useState("New Yorkd");
  const [zipCode, setZipCode] = useState("87323");
  const [country, setCountry] = useState("United States");
  const [telephone, setTelephone] = useState("(505) 862-711");
  const [systemEmail, setSystemEmail] = useState("ticketgo@system.com");
  const [emailFromName, setEmailFromName] = useState("TicketGo");
  const [timezone, setTimezone] = useState("");

  //   Eigth component
  const [slackWebhookURL, setSlackWebhookURL] = useState(
    "********************"
  );

  //   Nineth component
  const [telegramAccessToken, setTelegramAccessToken] = useState(
    "********************"
  );
  const [telegramChatID, setTelegramChatID] = useState("********************");

  // 11th container
  const handleFileInputChange4 = (event) => {
    const file = event.target.files[0];
    setSelectedFile4(file);
  };

  // 12th container

  const [cookieTitle, setCookieTitle] = useState("We use cookies!");
  const [strictlyCookieTitle, setStrictlyCookieTitle] = useState(
    "Strictly necessary cookies"
  );
  const [cookieDescription, setCookieDescription] = useState("");
  const [strictlyCookieDescription, setStrictlyCookieDescription] =
    useState("");
  const [contactUsDescription, setContactUsDescription] = useState("");
  const [contactUsURL, setContactUsURL] = useState("#");

  return (
    <>
      <div className="display-side d-flex">
      <div style={{width:"0px"}}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header Start */}
          <div className="d-flex justify-content-between">
            <div className="my-auto ms-4 p-1 d-flex">
              <AdminProfileLogout />
            </div>
            <div className="my-3 me-4 d-flex header-4btn-width">
              <div>
                <HeaderMessageBox />
              </div>
              <div className="ms-3">
                <TopHeaderModal/>
              </div>
              <div className="mx-3">
                <AdminSelectBtn/>
              </div>
              <div className=" my-auto bg-white shadow-sm custom-radius d-flex">
                <LanguageBtn />
              </div>
            </div>
          </div>
          {/* Top Header End*/}

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mt-4 mb-2 ms-4">
              <h5 className="mb-0">Manage Settings</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="/dashboard"
                      className="text-decoration-none green-1"
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Settings
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5">
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Create"
              >
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div>
            <Row className="my-2 mx-2">
              {/* 2nd Navbar */}
              <Col lg={3} md={12} className="mb-4">
                <div
                  className="card sticky-top custom-shadow custom-border-radius border-0"
                  style={{ top: "30px" }}
                >
                  <div
                    className="list-group list-group-flush custom-border-radius"
                    id="useradd-sidenav"
                  >
                    <Link
                      to="brand-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Brand Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>
                    <Link
                      to="email-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Email Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>
                    <Link
                      to="email-notification-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Email Notification Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="pusher-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Pusher Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="recaptcha-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      ReCaptcha Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="ticket-fields-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Ticket Fields Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="company-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Company Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="slack-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Slack Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="telegram-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Telegram Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="storage-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Storage Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="seo-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      SEO Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="cookie-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Cookie Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="cache-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Cache Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="chatgpt-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Chat Gpt Key Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>

                    <Link
                      to="webhook-settings"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="list-group-item list-group-item-action border-0"
                      activeClass="active"
                    >
                      Webhook Settings
                      <div className="float-end">
                        <BiChevronRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={9} md={12} style={{marginBottom:"35%"}}>
                {/* first container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="brand-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Brand Settings</h5>
                    <p>Edit your brand details</p>
                  </div>
                  <Row className="mx-2 mt-2 mb-5">
                    <Col sm={12} md={4} className="p-0 mb-4">
                      <div className="m-3 custom-shadow setting-fcont custom-border-radius">
                        <h6 className="card-head p-4 border-bottom">
                          Dark Logo
                        </h6>
                        <div className="text-center">
                          <div className="img">
                            {selectedFile1 && (
                              <img
                                src={URL.createObjectURL(selectedFile1)}
                                alt="Selected file"
                                className="my-4"
                                style={{ width: "60px", height: "60px" }}
                              />
                            )}
                          </div>
                          <label
                            htmlFor="fileInput1"
                            className="btn green-2 mt-3 justify-content-center setting-fcont-btn text-white d-flex align-items-center font-size-12 mx-auto mb-1 border-0"
                          >
                            <CgSoftwareUpload className="me-1 fs-6 text-white" />
                            Choose file here
                          </label>
                          <input
                            type="file"
                            id="fileInput1"
                            style={{ display: "none" }}
                            onChange={handleFileInputChange1}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} className="p-0 mb-4">
                      <div className="m-3 custom-shadow setting-fcont custom-border-radius">
                        <h6 className="card-head p-4 border-bottom">
                          Light Logo
                        </h6>
                        <div className="text-center">
                          <div className="img">
                            {selectedFile2 && (
                              <img
                                src={URL.createObjectURL(selectedFile2)}
                                alt="Selected file"
                                className="my-4"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  boxShadow: "0px 0px 25px -4px",
                                }}
                              />
                            )}
                          </div>

                          <label
                            htmlFor="fileInput2"
                            className="btn green-2 mt-3 justify-content-center setting-fcont-btn text-white d-flex align-items-center font-size-12 mx-auto mb-1 border-0"
                          >
                            <CgSoftwareUpload className="me-1 fs-6 text-white" />
                            Choose file here
                          </label>
                          <input
                            type="file"
                            id="fileInput2"
                            style={{ display: "none" }}
                            onChange={handleFileInputChange2}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} className="p-0 mb-4">
                      <div className="m-3 custom-shadow setting-fcont custom-border-radius">
                        <h6 className="card-head p-4 border-bottom">Favicon</h6>
                        <div className="text-center">
                          <div className="img">
                            {selectedFile3 && (
                              <img
                                src={URL.createObjectURL(selectedFile3)}
                                alt="Selected file"
                                className="my-4"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  boxShadow: "0px 0px 15px 0px",
                                }}
                              />
                            )}
                          </div>
                          <label
                            htmlFor="fileInput3"
                            className="btn green-2 mt-3 justify-content-center setting-fcont-btn text-white d-flex align-items-center font-size-12 mx-auto mb-1 border-0"
                          >
                            <CgSoftwareUpload className="me-1 fs-6 text-white" />
                            Choose file here
                          </label>
                          <input
                            type="file"
                            id="fileInput3"
                            style={{ display: "none" }}
                            onChange={handleFileInputChange3}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Form className="mx-4  form-input-width">
                    <div className="d-flex mb-3">
                      <div className="mb-3 w-50">
                        <Form.Label>App Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter app name"
                          value={appName}
                          onChange={(e) => setAppName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3 w-50 mx-3">
                        <Form.Label>Footer Text</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter footer text"
                          value={footerText}
                          onChange={(e) => setFooterText(e.target.value)}
                        />
                      </div>

                      <div className="mb-3 w-50 mx-3">
                        <Form.Label>Default Language</Form.Label>
                        <Form.Select
                          value={defaultLanguage}
                          onChange={(e) => setDefaultLanguage(e.target.value)}
                        >
                          <option value="">Select default language</option>
                          <option value="language1">Language 1</option>
                          <option value="language2">Language 2</option>
                          <option value="category3">Category 3</option>
                        </Form.Select>
                      </div>
                    </div>
                  </Form>

                  <Row className="mx-4 my-3 flex-col2">
                    <Col>
                      <div>
                        <Form.Label>Enable RTL</Form.Label>
                        <Form.Check
                          type="switch"
                          id=""
                          className="w-100 fs-1 custom-switch1"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Form.Label>FAQ</Form.Label>
                        <Form.Check
                          type="switch"
                          id=""
                          className="w-100 fs-1 custom-switch1"
                          defaultChecked
                        />
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Form.Label>Knowledge Base</Form.Label>
                        <Form.Check
                          type="switch"
                          id=""
                          className="w-100 fs-1 custom-switch1"
                          defaultChecked
                        />
                      </div>
                    </Col>
                  </Row>

                  {/* Theme Customizer */}
                  <Row className="mx-4 pb-5">
                    <h5>Theme Customizer</h5>
                    <Col md={4} sm={12}>
                      <h6 className="border-bottom py-3 d-flex align-items-center">
                        <LuCreditCard className="mx-1" />
                        Primary color settings
                      </h6>
                      <div className="d-flex flex-column">
                        <div>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 green-3"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 navy-2"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 green-2"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 navy-2"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 bg-danger"></button>
                        </div>
                        <div>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 bg-info"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 bg-danger"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 bg-warning"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 black-2"></button>
                          <button className="px-4 py-3 me-1 mb-1 border-0 rounded-1 bg-success"></button>
                        </div>
                      </div>
                    </Col>

                    <Col md={4} sm={12}>
                      <h6 className="border-bottom py-3 d-flex align-items-center">
                        <FiLayout className="mx-1" />
                        Sidebar settings
                      </h6>
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch33"
                          label="Transparent layout"
                          defaultChecked
                        />
                      </Form>
                    </Col>

                    <Col md={4} sm={12}>
                      <h6 className="border-bottom py-3 d-flex align-items-center">
                        <HiOutlineSun className="mx-1" />
                        Layout settings
                      </h6>
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch44"
                          label="Dark Layout"
                        />
                      </Form>
                    </Col>
                  </Row>
                  <div className="text-end border-top">
                    <button className="btn green-2 me-4 my-4 px-3 text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* second container */}
                <div
                  className=" border-4 pb-3 form-input-width mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="email-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Email Settings</h5>
                  </div>
                  <div className="pt-3">
                    <Form className="mx-4">
                      <div className="d-flex">
                        <div className="mb-3 w-50">
                          <Form.Label>Mail Driver</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={mailDriver}
                            onChange={(e) => setMailDriver(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 mx-3">
                          <Form.Label>Mail Host</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={mailHost}
                            onChange={(e) => setMailHost(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 mx-3">
                          <Form.Label>Mail Port</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={mailPort}
                            onChange={(e) => setMailPort(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="mb-3 w-50">
                          <Form.Label>Mail Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={mailUsername}
                            onChange={(e) => setMailUsername(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 mx-3">
                          <Form.Label>Mail Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder=""
                            value={mailPassword}
                            onChange={(e) => setMailPassword(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 mx-3">
                          <Form.Label>Mail Encryption</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={mailEncryption}
                            onChange={(e) => setMailEncryption(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="mb-3 w-50 me-3">
                          <Form.Label>Mail From Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder=""
                            value={mailFromAddress}
                            onChange={(e) => setMailFromAddress(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50">
                          <Form.Label>Mail From Name</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder=""
                            value={mailFromName}
                            onChange={(e) => setMailFromName(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 mx-3"></div>
                      </div>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3 mb-4">
                    <button className="btn green-2 me-2 my-4  text-white">
                      Send Test Mail
                    </button>
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* thired container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="email-notification-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Email Notification Settings</h5>
                  </div>
                  <div>
                    <Form className="my-4 mx-2">
                      <Row className="">
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New User</Form.Label>
                          <Form.Check
                            type="switch"
                            id="custom-switch1"
                            defaultChecked
                          />
                        </Col>
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New Ticket</Form.Label>
                          <Form.Check
                            type="switch"
                            id="custom-switch2"
                            defaultChecked
                          />
                        </Col>
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New Ticket Reply</Form.Label>
                          <Form.Check
                            type="switch"
                            id="custom-switch10"
                            defaultChecked
                          />
                        </Col>
                      </Row>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3 my-2">
                    <button className="btn green-2 me-4 my-4 text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* fourth container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="pusher-settings"
                >
                  <div className="card-head align-items-center d-flex justify-content-between border-bottom setting-card-header2">
                    <div>
                      <h5 className="mb-0">Pusher Settings</h5>
                      <p>Edit your pusher details</p>
                    </div>

                    <div>
                      <Form.Check
                        type="switch"
                        id=""
                        className="w-100 fs-1 custom-switch1"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="pt-3 mt-3 mb-5">
                    <Form className="mx-4 form-input-width">
                      <div className="d-flex">
                        <div className="mb-3 w-50 me-2">
                          <Form.Label>Pusher App Id</Form.Label>
                          <Form.Control
                            type="text"
                            value={pusherAppId}
                            onChange={(e) => setPusherAppId(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 ms-2">
                          <Form.Label>Pusher App Key</Form.Label>
                          <Form.Control
                            type="text"
                            value={pusherAppKey}
                            onChange={(e) => setPusherAppKey(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="mb-3 w-50 me-2">
                          <Form.Label>Pusher App Secret</Form.Label>
                          <Form.Control
                            type="text"
                            value={pusherAppSecret}
                            onChange={(e) => setPusherAppSecret(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 ms-2">
                          <Form.Label>Pusher App Cluster</Form.Label>
                          <Form.Control
                            type="text"
                            value={pusherAppCluster}
                            onChange={(e) =>
                              setPusherAppCluster(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Fifth container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="recaptcha-settings"
                >
                  <div className="card-head align-items-center d-flex justify-content-between border-bottom setting-card-header2">
                    <div>
                      <h5 className="mb-0">ReCaptcha Settings</h5>
                      <p>
                        <a href="">
                          (How to Get Google reCaptcha Site and Secret key)
                        </a>
                      </p>
                    </div>
                    <div>
                      <Form.Check
                        type="switch"
                        id=""
                        className="w-100 fs-1 custom-switch1"
                      />
                    </div>
                  </div>
                  <div className="pt-3 mt-3 mb-5">
                    <Form className="mx-4 form-input-width">
                      <div className="d-flex">
                        <div className="mb-3 w-50 me-2">
                          <Form.Label>Google Recaptcha Key</Form.Label>
                          <Form.Control
                            type="text"
                            value={recaptchaKey}
                            onChange={(e) => setRecaptchaKey(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 ms-2">
                          <Form.Label>Google Recaptcha Secret</Form.Label>
                          <Form.Control
                            type="text"
                            value={recaptchaSecret}
                            onChange={(e) => setRecaptchaSecret(e.target.value)}
                          />
                        </div>
                      </div>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Sixth container */}
                <div className="">
                  <div
                    className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white scroller-div "
                    id="ticket-fields-settings"
                  >
                    <div className="">
                      {" "}
                      {/* table-responsive1 */}
                      <div className="card-head align-items-center d-flex justify-content-between border-bottom setting-card-header ">
                        <div>
                          <h5 className="mb-0">Ticket Fields Settings</h5>
                          <p>
                            You can easily change order of fields using drag &
                            drop.
                          </p>
                        </div>
                        <div>
                          <span
                            type="button"
                            className="px-2 pt-2 pb-1 fs-6 green-2 text-white rounded-2 ms-2 me-1"
                          >
                            <AiOutlinePlus />
                          </span>
                        </div>
                      </div>
                      <div className="pt-3 px-4 cont-6 w-100">
                        <Table responsive className="w-100">
                          <thead>
                            <tr className="table-head">
                              <th></th>
                              <th>LABELS</th>
                              <th>PLACEHOLDER</th>
                              <th>TYPE</th>
                              <th>REQUIRE</th>
                              <th>WIDTH</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody className="y-center">
                            <tr>
                              <td>
                                <BsArrowsFullscreen className="fw-bold fs-6 mx-3" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <select disabled>
                                  <option>Text</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select disabled>
                                  <option>Yes</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select>
                                  <option>50%</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <BsArrowsFullscreen className="fw-bold fs-6 mx-3" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <select disabled>
                                  <option>Text</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select disabled>
                                  <option>Yes</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select>
                                  <option>50%</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <BsArrowsFullscreen className="fw-bold fs-6 mx-3" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <select disabled>
                                  <option>Text</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select disabled>
                                  <option>Yes</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select>
                                  <option>50%</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <BsArrowsFullscreen className="fw-bold fs-6 mx-3" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <select disabled>
                                  <option>Text</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select disabled>
                                  <option>Yes</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select>
                                  <option>50%</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <BsArrowsFullscreen className="fw-bold fs-6 mx-3" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <select disabled>
                                  <option>Text</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select disabled>
                                  <option>Yes</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select>
                                  <option>50%</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <BsArrowsFullscreen className="fw-bold fs-6 mx-3" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <input type="text" value="Name" />
                              </td>
                              <td>
                                <select disabled>
                                  <option>Text</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select disabled>
                                  <option>Yes</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                              <td>
                                <select>
                                  <option>50%</option>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <div className="text-end border-top px-3">
                        <button className="btn green-2 me-4 my-4  text-white">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seventh container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="company-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Company Settings</h5>
                    <p>Edit your company details</p>
                  </div>
                  <div className="py-5">
                    <Form className="mx-4">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <Form.Label>Company Name *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <Form.Label>Zip/Post Code</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <Form.Label>Country</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <Form.Label>Telephone</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <Form.Label>System Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder=""
                            value={systemEmail}
                            onChange={(e) => setSystemEmail(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <Form.Label>Email (From Name)</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            value={emailFromName}
                            onChange={(e) => setEmailFromName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className=" mb-3">
                          <Form.Label>Timezone</Form.Label>
                          <select
                            name="timezone"
                            className="form-control custom-select"
                            id="timezone"
                            value={timezone}
                            onChange={(e) => setTimezone(e.target.value)}
                          >
                            <option value="">Select Timezone</option>
                            <option value="America/Adak">
                              (GMT-10:00) America/Adak (Hawaii-Aleutian Standard
                              Time)
                            </option>
                            <option value="America/Atka">
                              (GMT-10:00) America/Atka (Hawaii-Aleutian Standard
                              Time)
                            </option>
                            <option value="America/Anchorage">
                              (GMT-9:00) America/Anchorage (Alaska Standard
                              Time)
                            </option>
                            <option value="America/Juneau">
                              (GMT-9:00) America/Juneau (Alaska Standard Time)
                            </option>
                          </select>
                        </div>
                      </div>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Eighth container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="slack-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Slack Settings</h5>
                  </div>
                  <div className="pt-3">
                    <Form className="mx-4">
                      <div className="d-flex">
                        <div className="mb-3 w-75 me-2">
                          <Form.Label className="fs-4 fw-100">
                            Slack Webhook URL
                          </Form.Label>
                          <Form.Control
                            type="text"
                            value={slackWebhookURL}
                            onChange={(e) => setSlackWebhookURL(e.target.value)}
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                  <div>
                    <Form className="my-4 mx-2 form-row-col">
                      <Row className="row-flex">
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New User</Form.Label>
                          <Form.Check
                            className="fs-5"
                            type="switch"
                            id="custom-switch4"
                          />
                        </Col>
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New Ticket</Form.Label>
                          <Form.Check
                            className="fs-5"
                            type="switch"
                            id="custom-switch5"
                          />
                        </Col>
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New Ticket Reply</Form.Label>
                          <Form.Check
                            className="fs-5"
                            type="switch"
                            id="custom-switch6"
                          />
                        </Col>
                      </Row>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* 9th container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="telegram-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Telegram Settings</h5>
                  </div>
                  <div className="pt-3">
                    <Form className="mx-4 form-input-width">
                      <div className="d-flex">
                        <div className="mb-3 w-50 me-2">
                          <Form.Label>Telegram Access Token</Form.Label>
                          <Form.Control
                            type="text"
                            value={telegramAccessToken}
                            onChange={(e) =>
                              setTelegramAccessToken(e.target.value)
                            }
                          />
                        </div>

                        <div className="mb-3 w-50 ms-2">
                          <Form.Label>Telegram Chat ID</Form.Label>
                          <Form.Control
                            type="text"
                            value={telegramChatID}
                            onChange={(e) => setTelegramChatID(e.target.value)}
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                  <div>
                    <Form className="my-4 mx-2">
                      <Row className="row-flex">
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New User</Form.Label>
                          <Form.Check
                            className="fs-5"
                            type="switch"
                            id="custom-switch7"
                          />
                        </Col>
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New Ticket</Form.Label>
                          <Form.Check
                            className="fs-5"
                            type="switch"
                            id="custom-switch8"
                          />
                        </Col>
                        <Col md={4} xs={10} className="d-flex mb-2 col-width border border-1 align-items-center rounded-3 justify-content-between px-3 py-4 mx-4">
                          <Form.Label>New Ticket Reply</Form.Label>
                          <Form.Check
                            className="fs-5"
                            type="switch"
                            id="custom-switch9"
                          />
                        </Col>
                      </Row>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* 10th container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="storage-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Storage Settings</h5>
                  </div>
                  <div className="pt-3">
                    <LabTabs />
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* 11th container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="seo-settings"
                >
                  <div className="card-head flex-col2 d-flex justify-content-between border-bottom setting-card-header">
                    <h5 className="mb-0">SEO Settings</h5>
                    <div>
                      <button
                        className="btn btn-success d-flex align-items-center mt-1 border-0 fw-bold"
                        style={{ backgroundColor: "#6FD943" }}
                        type="submit"
                        onClick={handleSubmit}
                      >
                        <GiArtificialIntelligence className="fw-bold me-1 fs-5 text-white" />
                        Generate With AI
                      </button>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 mb-5">
                    <Container>
                      <Row>
                        <Col lg={6} md={12}>
                          <Form className="mx-4">
                            <div>
                              <div className="mb-3 w-100">
                                <Form.Label>Meta Keywords</Form.Label>
                                <Form.Control
                                  type="text"
                                  value="TicketGo"
                                  // onChange={(e) => setMetaKeywords(e.target.value)}
                                />
                              </div>

                              <div className="mb-3 w-100">
                                <Form.Label>Meta Description</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={4}
                                  value="TicketGo – The Support Ticket System is an adequately designed ticket-managing PHP system that facilitates a great user experience for your Clients / Customers / End-User."
                                  // onChange={(e) => setMetaDescription(e.target.value)}
                                />
                              </div>
                            </div>
                          </Form>
                        </Col>
                        <Col className="ms-4" lg={5} md={12}>
                          <div>
                            <h5>Meta Image</h5>
                            <div className="img">
                              {selectedFile4 && (
                                <img
                                  src={URL.createObjectURL(selectedFile4)}
                                  alt="Selected file"
                                  className="my-3"
                                  style={{ width: "280px", height: "160px" }}
                                />
                              )}
                            </div>
                            <label
                            htmlFor="fileInput4"
                            className="btn green-2 mt-3  setting-fcont-btn justify-content-center text-center text-white d-flex align-items-center font-size-12 mb-1 border-0"
                          >
                            <CgSoftwareUpload className="me-1 fs-6 text-white" />
                            Select Image
                          </label>
                          <input
                            type="file"
                            id="fileInput4"
                            style={{ display: "none" }}
                            onChange={handleFileInputChange4}
                          />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* 12th container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="cookie-settings"
                >
                  <div className="card-head flex-col2 d-flex justify-content-between border-bottom setting-card-header2">
                    <h5 className="mb-0">Cookie Settings</h5>
                    <div className="d-flex align-items-center">
                      <h6 className="me-2">Enable cookie</h6>
                      <Form.Check
                        type="switch"
                        id=""
                        className=" fs-1 custom-switch1"
                        defaultChecked
                      />
                    </div>
                  </div>

                  <div className="text-end m-3">
                    <button
                      className="btn btn-success d-flex align-items-center ms-auto border-0 fw-bold"
                      style={{ backgroundColor: "#6FD943" }}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      <GiArtificialIntelligence className="fw-bold me-1 fs-5 text-white" />
                      Generate With AI
                    </button>
                  </div>

                  <div className="pt-4 pb-5">
                    <Form className="mx-4 form-input-width">
                      <Container className="mb-3">
                        <Row className="flex-col2">
                          <Col className="p-0">
                            <Form.Check
                              type="switch"
                              id="custom-switch11"
                              label="Enable logging"
                              className="fs-6"
                              defaultChecked
                            />
                          </Col>
                          <Col className="p-0">
                            <Form.Check
                              type="switch"
                              id="custom-switch22"
                              label="Strictly necessary cookies"
                              className="fs-6"
                              defaultChecked
                            />
                          </Col>
                        </Row>
                      </Container>

                      <div className="d-flex">
                        <div className="mb-3 w-50 me-2">
                          <Form.Label>Cookie Title</Form.Label>
                          <Form.Control
                            type="text"
                            value={cookieTitle}
                            onChange={(e) => setCookieTitle(e.target.value)}
                          />
                        </div>

                        <div className="mb-3 w-50 ms-2">
                          <Form.Label>Strictly Cookie Title</Form.Label>
                          <Form.Control
                            type="text"
                            value={strictlyCookieTitle}
                            onChange={(e) =>
                              setStrictlyCookieTitle(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="mb-3 w-50 me-2">
                          <Form.Label>Cookie Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            value="Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact witvh it"
                            onChange={(e) =>
                              setCookieDescription(e.target.value)
                            }
                          />
                        </div>

                        <div className="mb-3 w-50 ms-2">
                          <Form.Label>Strictly Cookie Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            value="These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly"
                            onChange={(e) =>
                              setStrictlyCookieDescription(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <h5>More Information</h5>
                      <div className="d-flex">
                        <div className="mb-3 w-50 me-2">
                          <Form.Label>Contact Us Description</Form.Label>
                          <Form.Control
                            type="text"
                            value="For any queries in relation to our policy on cookies and your choices, please contact us"
                            onChange={(e) =>
                              setContactUsDescription(e.target.value)
                            }
                          />
                        </div>

                        <div className="mb-3 w-50 ms-2">
                          <Form.Label>Contact Us URL</Form.Label>
                          <Form.Control
                            type="text"
                            value={contactUsURL}
                            onChange={(e) => setContactUsURL(e.target.value)}
                          />
                        </div>
                      </div>
                    </Form>
                  </div>

                  <div className="d-flex flex-col pt-2 justify-content-between border-top px-3">
                    <div>
                      <sapan>Download cookie accepted data</sapan>
                      <button className="btn green-2 mx-2 my-4 fs-5 px-4 fw-bold text-white">
                        <AiOutlineDownload />
                      </button>
                    </div>
                    <button className="btn green-2 me-4 my-4 text-white" style={{width:"150px"}}>
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* 13th container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="cache-settings"
                >
                  <div className="card-head border-bottom setting-card-header">
                    <h5 className="mb-0">Cache Setting</h5>
                    <p>
                      This is a page meant for more advanced users, simply
                      ignore it if you don't understand what cache is.
                    </p>
                  </div>
                  <div className="pt-4 pb-5">
                    <Form className="mx-4">
                      <div className="d-flex align-items-center">
                        <div className="mb-3 w-100 me-2">
                          <Form.Label>Current cache size</Form.Label>
                          <Form.Control
                            type="text"
                            value="0.4185"
                            // onChange={(e) => setSlackWebhookURL(e.target.value)}
                          />
                        </div>
                        <button
                          className="h-50 rounded-2 border border-1"
                          style={{
                            margin: "15px 0px 0px -8px",
                            padding: "10px 12px 6px 10px",
                          }}
                        >
                          MB
                        </button>
                      </div>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Clear Cache
                    </button>
                  </div>
                </div>

                {/* 14th container */}
                <div
                  className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white"
                  id="chatgpt-settings"
                >
                  <div className="card-head d-flex justify-content-between align-items-center border-bottom setting-card-header2">
                    <h5 className="mb-0">Chat GPT Key Settings</h5>
                    <div>
                      <Form.Check
                        type="switch"
                        id=""
                        className="w-100 fs-1 custom-switch1"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="pt-4 pb-5">
                    <Form className="mx-4">
                      <div className="d-flex">
                        <div className="mb-3 w-100 me-2">
                          <Form.Control
                            type="text"
                            value="********************"
                            // onChange={(e) => setSlackWebhookURL(e.target.value)}
                          />
                        </div>
                      </div>
                    </Form>
                  </div>

                  <div className="text-end border-top px-3">
                    <button className="btn green-2 me-4 my-4  text-white">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* 15th container */}
                <div className="">
                  <div
                    className=" border-4 pb-3 mx-1 mb-4 custom-shadow custom-border-radius bg-custom-white "
                    id="webhook-settings"
                  >
                    <div className="card-head d-flex align-items-center justify-content-between border-bottom setting-card-header">
                      <div>
                        <h5 className="mb-0">Webhook Settings</h5>
                        <p>Edit your webhook details</p>
                      </div>
                      <div>
                        <span
                          type="button"
                          className="px-2 pt-2 pb-1 fs-6 green-2 text-white rounded-2 ms-2 me-1"
                        >
                          <AiOutlinePlus />
                        </span>
                      </div>
                    </div>
                    <div className="scroller-div">
                      <div className="pt-3 table-responsive1">
                        <Table hover className="">
                          <thead>
                            <tr className="table-head">
                              <th className="px-4 fw-bold">MODULE</th>
                              <th className="pe-5">URL</th>
                              <th>METHOD</th>
                              <th className="text-center">ACTION</th>
                            </tr>
                          </thead>
                          <tbody className="y-center">
                            <tr>
                              <td
                                className="ps-4"
                                style={{ minWidth: "150px" }}
                              >
                                New User
                              </td>
                              <td style={{ minWidth: "100px" }}>
                                https://demo.rajodiya.com/ticketgo/login
                              </td>
                              <td>POST</td>

                              <td className="text-center">
                                <div className="mx-2">
                                  <span
                                    type="button"
                                    className="px-2 pt-2 pb-1 fs-6 bg-info custom-border-radius text-white me-3"
                                  >
                                    <MdEditSquare />
                                  </span>
                                  <span
                                    type="button"
                                    className="px-2 pt-2 pb-1 fs-6 text-white custom-border-radius red-icon"
                                  >
                                    <MdDelete />
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="ps-4"
                                style={{ minWidth: "150px" }}
                              >
                                New Ticket
                              </td>
                              <td style={{ minWidth: "100px" }}>
                                https://demo.rajodiya.com/ticketgo/login
                              </td>
                              <td>POST</td>

                              <td className="text-center">
                                <div className="mx-2">
                                  <span
                                    type="button"
                                    className="px-2 pt-2 pb-1 fs-6 bg-info custom-border-radius text-white me-3"
                                  >
                                    <MdEditSquare />
                                  </span>
                                  <span
                                    type="button"
                                    className="px-2 pt-2 pb-1 fs-6 text-white custom-border-radius red-icon"
                                  >
                                    <MdDelete />
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="ps-4"
                                style={{ minWidth: "150px" }}
                              >
                                New Ticket Reply
                              </td>
                              <td style={{ minWidth: "100px" }}>
                                https://demo.rajodiya.com/ticketgo/login
                              </td>
                              <td>POST</td>

                              <td className="text-center">
                                <div className="mx-2">
                                  <span
                                    type="button"
                                    className="px-2 pt-2 pb-1 fs-6 bg-info custom-border-radius text-white me-3"
                                  >
                                    <MdEditSquare />
                                  </span>
                                  <span
                                    type="button"
                                    className="px-2 pt-2 pb-1 fs-6 text-white custom-border-radius red-icon"
                                  >
                                    <MdDelete />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
