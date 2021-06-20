import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Temperatura e Consumo quarto A</span>
                <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">30C°</span>
                <span className="featuredTemperatureRate">
                -2 <ArrowDownward className="featuredIcon negative"/>
                </span>
             </div> 
                <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">100 Kwh</span>
                <span className="featuredTemperatureRate">
                -2 <ArrowDownward className="featuredIcon negative"/>
                </span>
             </div>                    
             <span className="FeaturedSub">Comparação mês anterior</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Temperatura e Consumo quarto B</span>
                <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">18C°</span>
                <span className="featuredTemperatureRate">
                -3 <ArrowDownward className="featuredIcon negative"/>
                </span>
             </div>   
             <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">200 Kwh</span>
                <span className="featuredTemperatureRate">
                +5 <ArrowUpward className="featuredIcon"/>
                </span>
             </div>                                      
             <span className="FeaturedSub">Comparação mês anterior</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Temperatura e Consumo Cozinha</span>
                <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">30C°</span>
                <span className="featuredTemperatureRate">
                +2 <ArrowUpward className="featuredIcon"/>
                </span>
             </div>   
             <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">80 Kwh</span>
                <span className="featuredTemperatureRate">
                -2 <ArrowDownward className="featuredIcon negative"/>
                </span>
             </div>                           
             <span className="FeaturedSub">Comparação mês anterior</span>
            </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Temperatura e Consumo Sala</span>
                    <div className="featuredTemperatureContainer">
                    <span className="featuredTemperature">29C°</span>
                    <span className="featuredTemperatureRate">
                    +2 <ArrowUpward className="featuredIcon"/>
                </span>
             </div> 
             <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">70 Kwh</span>
                <span className="featuredTemperatureRate">
                -2 <ArrowDownward className="featuredIcon negative"/>
                </span>
             </div>                    
             <span className="FeaturedSub">Comparação mês anterior</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Maior consumo de energia: Quarto B</span>
                <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">18C°</span>
                <span className="featuredTemperatureRate">
                -3 <ArrowDownward className="featuredIcon negative"/>
                </span>
             </div> 
                <div className="featuredTemperatureContainer">
                <span className="featuredTemperature">200 Kwh</span>
                <span className="featuredTemperatureRate">
                +5 <ArrowUpward className="featuredIcon"/>
                </span>
             </div>                    
            </div>
        </div>
        
    );
}