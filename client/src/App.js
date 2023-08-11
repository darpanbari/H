import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Tickets from "./pages/Tickets";
import FAQ from "./pages/FAQ";
import LoginForm from "./pages/LoginForm";
import Settings from "./pages/Settings";
import CreateTicket from "./pages/CreateTicket";
import AdminProfile from "./pages/AdminProfile";
import SupportDashboard from "./pages/Dashboard/SupportDashboard";
import SalesDashboard from "./pages/Dashboard/SalesDashboard";
import Project from "./pages/Projects/Project";
import Customer from "./pages/Accounting/Customer";
import Vendor from "./pages/Accounting/Vendor";
import Tickets1 from "./pages/SupportTicket/Tickets1";
import KnowledgeBase from "./pages/SupportTicket/KnowledgeBase";
import FAQ1 from "./pages/SupportTicket/FAQ1";
import Assets from "./pages/Assets";
import Notes from "./pages/Notes";
import Award from "./pages/HRAdmin.js/Award";
import Complaints from "./pages/HRAdmin.js/Complaints";
import Holidays from "./pages/HRAdmin.js/Holidays";
import Document from "./pages/HRAdmin.js/Document";
import Announcement from "./pages/HRAdmin.js/Announcement";
import CompanyPolicy from "./pages/HRAdmin.js/CompanyPolicy";
import Payslip from "./pages/Payroll/Payslip";
import ManageLeave from "./pages/LeaveManagement/ManageLeave";
import Indicator from "./pages/Performance/Indicator";
import MonthlyAttendance from "./pages/Report/MonthlyAttendance";
import SupportSystem from "./pages/SupportSystem";
import Bugs from "./pages/ProjectSystem/Bugs";
import SetupSubscriptionPlan from "./pages/Setting/SetupSubscriptionPlan";
import DepartAndDesign from "./pages/DepartAndDesign";
import RegisterLocation from "./pages/Registrations/RegisterLocation";
import RegisterPhoto from "./pages/Registrations/RegisterPhoto";
import UserCustomAttendance from "./pages/Report/UserCustomAttendance";
import AllLocations from "./pages/Registrations/AllLocations";
import DailyAttendance from "./pages/Report/DailyAttendance";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/dashboard/support-dashboard"
            element={<SupportDashboard />}
          />
          <Route
            path="/dashboard/sales-dashboard"
            element={<SalesDashboard />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/profile" element={<AdminProfile />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/create" element={<CreateTicket />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/projects/project" element={<Project />} />
          <Route path="/accounting/customer" element={<Customer />} />
          <Route path="/accounting/vendor" element={<Vendor />} />
          <Route path="/support-ticket/tickets" element={<Tickets1 />} />
          <Route
            path="/support-ticket/knowledgebase"
            element={<KnowledgeBase />}
          />
          <Route path="/support-ticket/faq" element={<FAQ1 />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/notes" element={<Notes />} />

          {/* hr admin */}
          <Route path="/hr-admin/award" element={<Award />} />
          <Route path="/hr-admin/complaints" element={<Complaints />} />
          <Route path="/hr-admin/announcement" element={<Announcement />} />
          <Route path="/hr-admin/holidays" element={<Holidays />} />
          <Route path="/hr-admin/document" element={<Document />} />
          <Route path="/hr-admin/company-policy" element={<CompanyPolicy />} />

          <Route path="/payroll/payslip" element={<Payslip />} />
          <Route path="/leave-management/manage-leave" element={<ManageLeave />} />
          <Route path="/performance/indicator" element={<Indicator />} />
          
          <Route path="/support-system" element={<SupportSystem />} />
          <Route path="/project-system/bugs" element={<Bugs />} /> 
          <Route path="/setting/setup-subscription-plan" element={<SetupSubscriptionPlan />} /> 

          <Route path="/depart-design" element={<DepartAndDesign />} /> 
          <Route path="/registrations/register-locations" element={<RegisterLocation />} />
          <Route path="/registrations/all-locations" element={<AllLocations />} />
          <Route path="/registrations/register-photo" element={<RegisterPhoto />} />       

          <Route path="/report/monthly-report" element={<MonthlyAttendance />} />  
          <Route path="/report/usercustom-attendance" element={<UserCustomAttendance/>} />   
          <Route path="/report/daily-attendance" element={<DailyAttendance/>} />   
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
