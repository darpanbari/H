import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import {
  AiOutlineBug,
  AiOutlineCheckSquare,
  AiOutlinePayCircle,
} from "react-icons/ai";
import {
  BiCalendarCheck,
  BiHomeSmile,
  BiSupport,
  BiTimer,
} from "react-icons/bi";
import { PiCirclesThreePlus, PiHandshake, PiHeadphones } from "react-icons/pi";
import { RiQuestionLine, RiRadio2Line } from "react-icons/ri";
import { TbTicket, TbSettings, TbProgress, TbCalculator, TbGridDots } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/SideNavbar.css";
import {
  HiOutlineCubeTransparent,
  HiOutlineDocumentReport,
} from "react-icons/hi";

const SideNavbar = () => {
  const location = useLocation();
  useEffect(() => {
    setDashboardExpanded(location.pathname.includes("/dashboard"));
    setAccountingExpanded(location.pathname.includes("/accounting"));
    setSupportTicketExpanded(location.pathname.includes("/support-ticket"));
    setHrAdminExpanded(location.pathname.includes("/hr-admin"));
    setReportExpanded(location.pathname.includes("/report"));
    setRegistrationsExpanded(location.pathname.includes("/registrations"));
  }, [location]);

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [dashboardExpanded, setDashboardExpanded] = useState(false);
  const [accountingExpanded, setAccountingExpanded] = useState(false);
  const [supportTicketExpanded, setSupportTicketExpanded] = useState(false);
  const [HrAdminExpanded, setHrAdminExpanded] = useState(false);
  const [reportExpanded, setReportExpanded] = useState(false);
  const [registrationsExpanded, setRegistrationsExpanded] = useState(false);


  const toggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const toggleDashboardExpand = () => {
    setDashboardExpanded((prevDashboardExpanded) => !prevDashboardExpanded);
  };

  const toggleAccountingExpand = () => {
    setAccountingExpanded((prevAccountingExpanded) => !prevAccountingExpanded);
  };

  const toggleSupportTicketExpand = () => {
    setSupportTicketExpanded(
      (prevSupportTicketExpanded) => !prevSupportTicketExpanded
    );
  };

  const toggleHrAdminExpand = () => {
    setHrAdminExpanded((prevHrAdminExpanded) => !prevHrAdminExpanded);
  };

  const toggleReportExpand = () => {
    setReportExpanded((prevReportExpanded) => !prevReportExpanded);
  };

  const toggleRegistrationsExpand = () => {
    setRegistrationsExpanded((prevRegistrationsExpanded) => !prevRegistrationsExpanded);
  };

  const navLinks = (
    <Nav className="flex-column side-nav nav-width">
      <div className="nav-item" onClick={toggleDashboardExpand}>
        <BiHomeSmile className="nav-icon" />
        <span className="nav-name">Dashboard</span>
        {dashboardExpanded ? (
          <ExpandMoreIcon className="nav-expand-icon ms-auto" />
        ) : (
          <ChevronRightIcon className="nav-expand-icon ms-auto" />
        )}
      </div>
      {dashboardExpanded && (
        <>
          <NavLink
            to="/dashboard/sales-dashboard"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/dashboard/sales-dashboard"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Sales Dashboard</span>
          </NavLink>
          <NavLink
            to="/dashboard/support-dashboard"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/dashboard/support-dashboard"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Support Dashboard</span>
          </NavLink>
        </>
      )}
      <NavLink to="/users" activeclassname="active" className="nav-item">
        <FiUsers className="nav-icon" />
        <span className="nav-name">Users</span>
      </NavLink>
      <NavLink to="/tickets" activeclassname="active" className="nav-item">
        <TbTicket className="nav-icon" />
        <span className="nav-name">Tickets</span>
      </NavLink>
      <NavLink
        exact="true"
        to="/projects/project"
        activeclassname="active"
        className="nav-item"
      >
        <AiOutlineCheckSquare className="nav-icon" />
        <span className="nav-name">Projects</span>
      </NavLink>

      <div className="nav-item" onClick={toggleAccountingExpand}>
        <PiCirclesThreePlus className="nav-icon" />
        <span className="nav-name">Accounting</span>
        {accountingExpanded ? (
          <ExpandMoreIcon className="nav-expand-icon ms-auto" />
        ) : (
          <ChevronRightIcon className="nav-expand-icon ms-auto" />
        )}
      </div>
      {accountingExpanded && (
        <>
          <NavLink
            to="/accounting/customer"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/accounting/customer"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Customer</span>
          </NavLink>
          <NavLink
            to="/accounting/vendor"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/accounting/vendor" ? "active-custom" : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Vendor</span>
          </NavLink>
        </>
      )}

      <div className="nav-item" onClick={toggleHrAdminExpand}>
        <HiOutlineCubeTransparent className="nav-icon" />
        <span className="nav-name">HR Admin</span>
        {HrAdminExpanded ? (
          <ExpandMoreIcon className="nav-expand-icon ms-auto" />
        ) : (
          <ChevronRightIcon className="nav-expand-icon ms-auto" />
        )}
      </div>
      {HrAdminExpanded && (
        <>
          <NavLink
            to="/hr-admin/award"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/hr-admin/award" ? "active-custom" : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Award</span>
          </NavLink>
          <NavLink
            to="/hr-admin/complaints"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/hr-admin/complaints"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Complaints</span>
          </NavLink>
          <NavLink
            to="/hr-admin/announcement"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/hr-admin/announcement"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Announcement</span>
          </NavLink>
          <NavLink
            to="/hr-admin/holidays"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/hr-admin/holidays" ? "active-custom" : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Holidays</span>
          </NavLink>
          <NavLink
            to="/hr-admin/document"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/hr-admin/document" ? "active-custom" : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Document</span>
          </NavLink>
          <NavLink
            to="/hr-admin/company-policy"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/hr-admin/company-policy"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Company Policy</span>
          </NavLink>
        </>
      )}

      <div className="nav-item" onClick={toggleSupportTicketExpand}>
        <PiHeadphones className="nav-icon" />
        <span className="nav-name">Support Ticket</span>
        {supportTicketExpanded ? (
          <ExpandMoreIcon className="nav-expand-icon ms-auto" />
        ) : (
          <ChevronRightIcon className="nav-expand-icon ms-auto" />
        )}
      </div>
      {supportTicketExpanded && (
        <>
          <NavLink
            to="/support-ticket/tickets"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/support-ticket/tickets"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Tickets</span>
          </NavLink>
          <NavLink
            to="/support-ticket/knowledgebase"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/support-ticket/knowledgebase"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Knowledge Base</span>
          </NavLink>
          <NavLink
            to="/support-ticket/faq"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/support-ticket/faq" ? "active-custom" : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">FAQ</span>
          </NavLink>
        </>
      )}

      <NavLink
        to="/payroll/payslip"
        activeclassname="active"
        className="nav-item"
      >
        <AiOutlinePayCircle className="nav-icon" />
        <span className="nav-name">Payslip</span>
      </NavLink>
      <NavLink
        to="/leave-management/manage-leave"
        activeclassname="active"
        className="nav-item"
      >
        <BiCalendarCheck className="nav-icon" />
        <span className="nav-name">Manage Leave</span>
      </NavLink>
      <NavLink
        to="/performance/indicator"
        activeclassname="active"
        className="nav-item"
      >
        <BiTimer className="nav-icon" />
        <span className="nav-name">Indicator</span>
      </NavLink>

      <div className="nav-item" onClick={toggleReportExpand}>
        <TbGridDots className="nav-icon" />
        <span className="nav-name">Report</span>
        {reportExpanded ? (
          <ExpandMoreIcon className="nav-expand-icon ms-auto" />
        ) : (
          <ChevronRightIcon className="nav-expand-icon ms-auto" />
        )}
      </div>
      {reportExpanded && (
        <>
          <NavLink
            to="/report/monthly-report"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/report/monthly-report"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Monthly Attendance</span>
          </NavLink>
          <NavLink
            to="/report/daily-attendance"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/report/daily-attendance" ? "active-custom" : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Daily Attendance</span>
          </NavLink>
          <NavLink
            to="/report/usercustom-attendance"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/report/usercustom-attendance"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">User Custom Attendance</span>
          </NavLink>
        </>
      )}
      

      <div className="nav-item" onClick={toggleRegistrationsExpand}>
        <TbGridDots className="nav-icon" />
        <span className="nav-name">Registrations</span>
        {registrationsExpanded ? (
          <ExpandMoreIcon className="nav-expand-icon ms-auto" />
        ) : (
          <ChevronRightIcon className="nav-expand-icon ms-auto" />
        )}
      </div>
      {registrationsExpanded && (
        <>
          <NavLink
            to="/registrations/register-locations"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/registrations/register-locations"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Register Locations</span>
          </NavLink>
          <NavLink
            to="/registrations/all-locations"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/registrations/all-locations"
                ? "active-custom"
                : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Locations</span>
          </NavLink>
          <NavLink
            to="/registrations/register-photo"
            activeclassname="active-custom"
            className={`nav-item2 ${
              location.pathname === "/registrations/register-photo" ? "active-custom" : ""
            }`}
            onClick={closeOffcanvas}
          >
            <TbProgress className="nested-nav-icon ms-4 me-3" />
            <span className="nav-name2">Register Photo</span>
          </NavLink>
        </>
      )}
      
      
      <NavLink
        to="/depart-design"
        activeclassname="active"
        className="nav-item"
      >
        <HiOutlineDocumentReport className="nav-icon" />
        <span className="nav-name">Depart/Design</span>
      </NavLink>


      <NavLink
        to="/support-system"
        activeclassname="active"
        className="nav-item"
      >
        <BiSupport className="nav-icon" />
        <span className="nav-name">Support System</span>
      </NavLink>
      <NavLink
        to="/project-system/bugs"
        activeclassname="active"
        className="nav-item"
      >
        <AiOutlineBug className="nav-icon" />
        <span className="nav-name">Bugs</span>
      </NavLink>

      <NavLink
        to="/setting/setup-subscription-plan"
        activeclassname="active"
        className="nav-item"
      >
        <PiHandshake className="nav-icon" />
        <span className="nav-name">Setup Subscription Plan</span>
      </NavLink>

      <NavLink to="/assets" activeclassname="active" className="nav-item">
        <TbCalculator className="nav-icon" />
        <span className="nav-name">Assets</span>
      </NavLink>
      <NavLink to="/notes" activeclassname="active" className="nav-item">
        <RiRadio2Line className="nav-icon" />
        <span className="nav-name">Notes</span>
      </NavLink>

      <NavLink to="/faq" activeclassname="active" className="nav-item">
        <RiQuestionLine className="nav-icon" />
        <span className="nav-name">FAQ</span>
      </NavLink>
      <NavLink to="/settings" activeclassname="active" className="nav-item">
        <TbSettings className="nav-icon" />
        <span className="nav-name">Settings</span>
      </NavLink>
    </Nav>
  );

  return (
    <>
      <div class="sidebar">
        <div className="green-1 fs-2 mb-3 fw-bold ps-4 logo">H A A J R I</div>
        <Navbar expand="lg" className="flex-column1">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav rounded-4"
            className=""
            onClick={toggleOffcanvas}
          />
          {!showOffcanvas && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="nav-links-scrollY">{navLinks}</div>
            </Navbar.Collapse>
          )}
        </Navbar>
      </div>

      <Offcanvas
        show={showOffcanvas}
        onHide={closeOffcanvas}
        className="offcanvas-container"
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="green-1 fs-4 text-center fw-bold ps-1">
            H A A J A R I
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar className="offcanvas-navbar">{navLinks}</Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideNavbar;
