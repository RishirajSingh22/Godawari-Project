import ScrollToTop from "../Components/HelperComponent/ScrollToTop"
import Corousel from "../Components/PageComponents/OverviewComponents/Corousel"
import Employee from "../Components/PageComponents/OverviewComponents/Employee"
import Godavari from "../Components/PageComponents/OverviewComponents/Godavari"
import Imagecomp from "../Components/PageComponents/OverviewComponents/Imagecomp"
import Lastcomp from "../Components/PageComponents/OverviewComponents/Lastcomp"

function PeopleOverview() {
  return (
    <>
     <ScrollToTop/>
      <Imagecomp/>
      <Godavari />
      <Employee />
      {/* <Corousel /> */}
      <Lastcomp />
    </>
  )
}

export default PeopleOverview