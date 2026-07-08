import DashboardHome from "./Dashboard/DashboardHome";
import SavedProperties from "./Dashboard/SavedProperties";
import InquiriesList from "./Dashboard/InquiriesList";
import BookingList from "./Dashboard/BookingList";
import ProfileEdit from "./Dashboard/ProfileEdit";
import NotificationList from "./Dashboard/NotificationList";

function App() {
  return (

    <>
  <DashboardHome />
  <SavedProperties/>
  <InquiriesList/>
  <BookingList/>
  <ProfileEdit/>
  <NotificationList/>

  </>
  )
}

export default App;
