import React, { useContext, useEffect } from "react";
import { useState } from "react";
import AppContext from "../AppContext";
import axios from 'axios';

import "./styles.css";
import Definitions from "./Definitions";
import Sinonimos from "./Sinonimos";
import Antonimos from "./Antonimos";

const Body = () => {
    const context = useContext(AppContext);

    const [definitionResults, setDefinitionResults] = useState(null);
    const [sinonimosResults, setSinonimosResults] = useState(null);
    const [antonimosResults, setAntonimosResults] = useState(null);

    const definitionEndpoint = "http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/"
    const sinonimosEndpoint = "http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/";
    const antonimosEndpoint = "http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/"

    useEffect(() => {
        if (context.word.get){
            axios.get(definitionEndpoint + context.word.get).then(response => {
                setDefinitionResults(response.data.definiciones);
            })
    
            axios.get(sinonimosEndpoint + context.word.get).then(response => {
                setSinonimosResults(response.data.sinonimos);
            })
    
            axios.get(antonimosEndpoint + context.word.get).then(response => {
                setAntonimosResults(response.data.antonimos);
            })
        }

        return () => {}
    }, [context.word.get])

    let definitions = null;
    let sinonimos = null;
    let antonimos = null;

    if (definitionResults){
        definitions = definitionResults.map(obj => {
            return <Definitions definition={obj.definicion} key={obj.definicion}/>
        })
    }

    if (sinonimosResults){
        sinonimos = sinonimosResults.map(obj => {
            return <Sinonimos sinonimo={obj.sinonimo} key={obj.sinonimo}/>
        })
    }

    if (antonimosResults){
        antonimos = antonimosResults.map(obj => {
            return <Antonimos antonimo={obj.antonimo} key={obj.antonimo}/>
        })
    }
    
    return (
        <div className="Body">
            {definitions ? <div>Definiciones: {definitions}</div>  : null}
            {sinonimos ? <div>Sinonimos: {sinonimos}</div>  : null}
            {antonimos ? <div>Antonimos: {antonimos}</div>  : null}
        </div>
    )
}

export default Body;