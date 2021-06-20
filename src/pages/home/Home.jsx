import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";


export default function Home(){
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="Tempo de Atividade dos Sensores" grid dataKey="Horas de Atividade"/>
            <div className="homeWidgets"></div>
        </div>
    );
}