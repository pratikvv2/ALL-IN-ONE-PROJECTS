import './Main.scss';
import { PageWrapper } from "@/components"
// import StaticChart from "./StaticChart"
// import PieChartEg from "./PieChartEg"
import ExelSample from "./ExelSample"


const Main = () => {
    return (
        <PageWrapper>
            <h1 className="heading-text">Dashboard</h1>
            {/* <StaticChart /> */}
            {/* <PieChartEg /> */}
            <ExelSample />
        </PageWrapper>
    )
}

export default Main