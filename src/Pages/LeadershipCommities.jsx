import ScrollToTop from "../Components/HelperComponent/ScrollToTop"
import Visionaries from "../Components/PageComponents/LeadershipBODComponents/Visionaries"
import AuditCommittoes from "../Components/PageComponents/LeaderShipCommittiesComponents/AuditCommittoes"
import CSRCommitties from "../Components/PageComponents/LeaderShipCommittiesComponents/CSRCommitties"
import ESGCommitties from "../Components/PageComponents/LeaderShipCommittiesComponents/ESGCommittee"
import NominationCommitties from "../Components/PageComponents/LeaderShipCommittiesComponents/NominationCommittes"
import RealationshipCommitties from "../Components/PageComponents/LeaderShipCommittiesComponents/RealationShipCommitties"
import RiskManageMentCommitties from "../Components/PageComponents/LeaderShipCommittiesComponents/RiskManageMentCommitties"

function LeadershipCommities() {
  return (
    <>
     <ScrollToTop/>
    <Visionaries/>
    <AuditCommittoes/>
    <NominationCommitties/>
    <CSRCommitties/>
    <RiskManageMentCommitties/>
    <RealationshipCommitties/>
    <ESGCommitties/>
    </>
  )
}

export default LeadershipCommities