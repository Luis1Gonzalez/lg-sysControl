import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const ControlContext = createContext()

const ControlProvider = ({ children }) => {

    const router = useRouter();
    const prisma = new PrismaClient();

    const [password, setPassword] = useState('')
    const [access, setAccess] = useState(false)
    const [datosSeries, setDatosSeries] = useState([])
    const [dataSeries, setDataSeries] = useState([])
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const [finder, setFinder] = useState(false);
    const [result, setResult] = useState([]);
    const [byNumber, setByNumber] = useState("");
    const [byClient, setByClient] = useState("");
    const [findResult, setFindResult] = useState([])
    const [modalAddSerie, setModalAddSerie] = useState(false)
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState('')
    const [filterSerieControl, setFilterSerieControl] = useState([])
    // const [storageFilterSerieControl, setStorageFilterSerieControl] = useState()


    // ---------------------State del form addSeries Modal----------------------
    const [primalSerie, setPrimalSerie] = useState("");
    const [numSerie, setNumSerie] = useState("");
    const [day, setDay] = useState("");
    const [hour, setHour] = useState("");
    const [client, setClient] = useState("");
    const [status, setStatus] = useState("Abierta");
    const [comment, setComment] = useState("");
    const [guillotina, setGuillotina] = useState(false)
    const [devanado, setDevanado] = useState(false)
    const [marcos, setMarcos] = useState(false)
    const [plegado, setPlegado] = useState(false)
    const [pladur, setPladur] = useState(false)
    const [rockbulk, setRockbulk] = useState(false)
    const [punzonado, setPunzonado] = useState(false)
    const [pegamento, setPegamento] = useState(false)
    const [priority, setPriority] = useState("");

    const [editingSerie, setEditingSerie] = useState('')
    const [modalEditSerie, setModalEditSerie] = useState(false)
    const [data, setData] = useState(null);
    const [idSerieControl, setIdSerieControl] = useState(null)

    const [modalAlertDeleteSerie, setModalAlertDeleteSerie] = useState(false)
    const [previewDeletingSerie, setPreviewDeletingSerie] = useState({})

    const [seleArea, setSeleArea] = useState("");
    const [selectionShowSerie, setSelectionShowSerie] = useState([]);
    const [upSelectionShowSerie, setUpSelectionShowSerie] = useState([]);
    const [previewChangeId, setPreviewChangeId] = useState(null);
    const [modalAlert, setModalAlert] = useState(false)
    const [previewChangeSerie, setPreviewChangeSerie] = useState({})
    const [guillotinaZona, setGuillotinaZona] = useState(false)
    const [devanadoZona, setDevanadoZona] = useState(false)
    const [marcosZona, setMarcosZona] = useState(false)
    const [plegadoZona, setPlegadoZona] = useState(false)
    const [pladurZona, setPladurZona] = useState(false)
    const [rockbulkZona, setRockbulkZona] = useState(false)
    const [punzonadoZona, setPunzonadoZona] = useState(false)
    const [pegamentoZona, setPegamentoZona] = useState(false)

    const [clavex, setClavex] = useState([])
    // ------------------------------------------------------------------------------



//     useEffect(() => {
//         const obtainClave = async () => {
//             try {
//                 const { data } = await axios('api/accessPasswords')
//                 setClavex(data)
//                 console.log(data)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         obtainClave()
//     }, [])

// console.log(clavex)
    const verifyAccess = async () => {

        try {
            const { data } = await axios('api/accessPasswords')
            setClavex(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

        const verifyPasswords = clavex.filter((vpass) => vpass.clave === password);
        if (verifyPasswords.length > 0) {
            setAccess(true)
            router.push('/lobby')
        } else {
            setAccess(false)
            router.push('/')
            setAlert(true)
            setMsg("Contraseña Incorrecta")
            setTimeout(() => {
                setAlert(false)
            }, 5000);
        }
    }

    useEffect(() => {
        const obtainSeries = async () => {
            try {
                const { data } = await axios('api/series')
                setDatosSeries(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtainSeries()
    }, [])

    useEffect(() => {
        const InsertSerie = () => {
            const verify = datosSeries.filter((seriex) => seriex.numSerie === numSerie);

            if (verify.length > 0) {
                setMsg("Numero de Serie ya Existe")
                setPrimalSerie("")
                setNumSerie("")
                setAlert(true)

                setTimeout(() => {
                    setAlert(false)
                }, 5000);

                return
            } else {
                setNumSerie(primalSerie);
            }
        };
        InsertSerie();
    }, [datosSeries, numSerie, primalSerie])

    const obtainSeriesx = async () => {
        try {
            const { data } = await axios('api/series')
            setDatosSeries(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setDataSeries(datosSeries)
    }, [datosSeries]);

    const handleOpen = () => {

        const resultFilter = dataSeries.filter(
            (filtered) => filtered.status === "Abierta"
        );
        setResult(resultFilter);
        obtainSeriesx()
        setOpen(true);
        setClosed(false);
        setFinder(false)
        setByNumber('')
        setByClient('')
    };

    const handleClosed = () => {
        const resultFilter = dataSeries.filter(
            (filtered) => filtered.status === "Cerrada"
        );
        setResult(resultFilter);
        setClosed(true);
        setOpen(false);
        setFinder(false)
        setByNumber('')
        setByClient('')
    };

    const handleFinder = () => {
        setFinder(true);
        setClosed(false);
        setOpen(false);
    }

    useEffect(() => {
        const searchingSeries = (e) => {
            const resultFilter = datosSeries.filter(
                (filtered) => filtered.numSerie === byNumber
            );
            setFindResult(resultFilter)
            setByClient('')
        }
        searchingSeries()
    }, [byNumber, datosSeries])


    useEffect(() => {
        const searchingClient = () => {
            const resultFilter = datosSeries.filter(
                (filtered) => filtered.client === byClient
            );
            setFindResult(resultFilter)
            setByNumber('')
        }
        searchingClient()
    }, [byClient, datosSeries])

    // useEffect(() => {
    //     const creationDay = setInterval(() => {

    //         const dateToday = new Date();
    //         const currentTime = dateToday.toLocaleTimeString()
    //         const currentDate = dateToday.toLocaleDateString()
    //         setHour(currentTime)
    //         setDay(currentDate)
    //     }, 1000)
    //     return () => clearTimeout(creationDay);
    // }, [datosSeries])

    const newSerie = async (e) => {
        e.preventDefault()

        if ([numSerie, client, priority].includes('')) {
            setAlert(true)
            setMsg("Los Campos Serie, Cliente y Prioridad son Obligatorios")

            setTimeout(() => {
                setAlert(false)
            }, 5000);
            return
        } else {


            try {
                const { data } = await axios.post('/api/series', { numSerie, day, hour, client, status, comment, guillotina, devanado, marcos, plegado, pladur, rockbulk, punzonado, pegamento, priority })
                setDatosSeries([...datosSeries, data])

            } catch (error) {
                console.log(error)
            }

            obtainSeriesx()
            setModalAddSerie(false)
            setOpen(false)
            setClosed(false)
            setFinder(true)
            setNumSerie("")
            setClient("")
            setComment("")
            setPriority("")
            setGuillotina(false)
            setDevanado(false)
            setPunzonado(false)
            setMarcos(false)
            setPlegado(false)
            setPladur(false)
            setRockbulk(false)
            setPegamento(false)
            setDatosSeries([])
        }
    }

    // ------------------------Editando---------------------------------

    const editSerieControl = (id) => {
        const updateSerie = datosSeries.filter(update => update.id === id)
        const preview = updateSerie[0]

        setEditingSerie(preview)
        setModalEditSerie(true)
        setGuillotina(false)
        setDevanado(false)
        setPunzonado(false)
        setMarcos(false)
        setPlegado(false)
        setPladur(false)
        setRockbulk(false)
        setPegamento(false)
        setPriority("")
        setStatus("")
        setComment("")
    }


    const editSerie = async (e) => {
        e.preventDefault()

        if ([client, priority, status].includes('')) {
            setAlert(true)
            setMsg("Los Campos Cliente, Status y Prioridad son Obligatorios al realizar una modificación")

            setTimeout(() => {
                setAlert(false)
            }, 5000);
            return
        } else {

            const response = await fetch('/api/series', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: idSerieControl,
                    numSerie: numSerie,
                    day: day,
                    hour: hour,
                    client: client,
                    status: status,
                    comment: comment,
                    guillotina: guillotina,
                    devanado: devanado,
                    marcos: marcos,
                    pegamento: pegamento,
                    plegado: plegado,
                    pladur: pladur,
                    rockbulk: rockbulk,
                    punzonado: punzonado,
                    pegamento: pegamento,
                    priority: priority
                })
            })
            const updatedData = await response.json();
            setData(updatedData);
        }



        router.push('/series')

        obtainSeriesx()
        setModalEditSerie(false)
        setOpen(false)
        setClosed(false)
        setFinder(true)
        setNumSerie("")
        setClient("")
        setComment("")
        setPriority("")
        setDatosSeries([])
    }

    // ------------------------Eliminar-----------------------

    const identifierDeleteSereieControl = async (filterSerieControl, idFilterSerieControlId) => {
        setModalAlertDeleteSerie(true)
        setPreviewDeletingSerie(filterSerieControl[0])
        try {
            await axios.delete(`/api/series/${idFilterSerieControlId}`);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSerieControl = async () => {
        setResult([])
        obtainSeriesx()
        setModalAlertDeleteSerie(false)
        setOpen(false)
        setClosed(false)
        setFinder(true)
        setNumSerie("")
        setClient("")
        setComment("")
        setPriority("")
        setDatosSeries([])
    };



    // --------------------------Changing Status Zona------------------------

    const preChangingSerie = (id) => {
        const changing = selectionShowSerie.filter(change => change.id === id)
        setPreviewChangeSerie(changing[0])
        setModalAlert(true)
    }

    const takingIdStatusArea = async (id) => {
        setPreviewChangeId(id)
    }



    useEffect(() => {
        if (previewChangeSerie.guillotina === true && seleArea === "guillotina") {
            setGuillotinaZona(false)
        } else if (previewChangeSerie.guillotina !== true || seleArea !== "guillotina") {
            setGuillotinaZona(previewChangeSerie.guillotina)
        } else {
            setGuillotinaZona(false)
        }

        if (previewChangeSerie.devanado === true && seleArea === "devanado") {
            setDevanadoZona(false)
        } else if (previewChangeSerie.devanado !== true || seleArea !== "devanado") {
            setDevanadoZona(previewChangeSerie.devanado)
        } else {
            setDevanadoZona(false)
        }

        if (previewChangeSerie.punzonado === true && seleArea === "punzonado") {
            setPunzonadoZona(false)
        } else if (previewChangeSerie.punzonado !== true || seleArea !== "punzonado") {
            setPunzonadoZona(previewChangeSerie.punzonado)
        } else {
            setPunzonadoZona(false)
        }

        if (previewChangeSerie.marcos === true && seleArea === "marcos") {
            setMarcosZona(false)
        } else if (previewChangeSerie.marcos !== true || seleArea !== "marcos") {
            setMarcosZona(previewChangeSerie.marcos)
        } else {
            setMarcosZona(false)
        }

        if (previewChangeSerie.plegado === true && seleArea === "plegado") {
            setPlegadoZona(false)
        } else if (previewChangeSerie.plegado !== true || seleArea !== "plegado") {
            setPlegadoZona(previewChangeSerie.plegado)
        } else {
            setPlegadoZona(false)
        }

        if (previewChangeSerie.pladur === true && seleArea === "pladur") {
            setPladurZona(false)
        } else if (previewChangeSerie.pladur !== true || seleArea !== "pladur") {
            setPladurZona(previewChangeSerie.pladur)
        } else {
            setPladurZona(false)
        }

        if (previewChangeSerie.rockbulk === true && seleArea === "rockbulk") {
            setRockbulkZona(false)
        } else if (previewChangeSerie.rockbulk !== true || seleArea !== "rockbulk") {
            setRockbulkZona(previewChangeSerie.rockbulk)
        } else {
            setRockbulkZona(false)
        }

        if (previewChangeSerie.pegamento === true && seleArea === "pegamento") {
            setPegamentoZona(false)
        } else if (previewChangeSerie.pegamento !== true || seleArea !== "pegamento") {
            setPegamentoZona(previewChangeSerie.pegamento)
        } else {
            setPegamentoZona(false)
        }
    }, [previewChangeSerie])


    const changingStatusArea = async () => {

        const response = await fetch('/api/series', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: previewChangeId,
                day: day,
                hour: hour,
                guillotina: guillotinaZona,
                devanado: devanadoZona,
                marcos: marcosZona,
                pegamento: pegamentoZona,
                plegado: plegadoZona,
                pladur: pladurZona,
                rockbulk: rockbulkZona,
                punzonado: punzonadoZona,
                pegamento: pegamentoZona,
            })
        })
        const updatedData = await response.json();
        setData(updatedData);
        setDatosSeries(updatedData);
        setUpSelectionShowSerie(updatedData);
        setSelectionShowSerie([]);
        setDatosSeries([]);
        setModalAlert(false);
        obtainSeriesx()
    }

    return (
        <ControlContext.Provider
            value={{
                setPassword, password,
                access, setAccess,
                verifyAccess,
                setDatosSeries,
                datosSeries,
                handleOpen,
                handleClosed,
                handleFinder,
                open,
                setOpen,
                closed,
                setResult,
                result,
                finder,
                setByNumber, byNumber,
                setByClient, byClient,
                findResult,
                modalAddSerie, setModalAddSerie,
                setNumSerie, numSerie,
                setDay, day,
                setHour, hour,
                setClient, client,
                setStatus, status,
                setComment, comment,
                guillotina, setGuillotina,
                devanado, setDevanado,
                marcos, setMarcos,
                plegado, setPlegado,
                pladur, setPladur,
                rockbulk, setRockbulk,
                punzonado, setPunzonado,
                pegamento, setPegamento,
                setPriority, priority,
                newSerie,
                alert,
                primalSerie,
                setPrimalSerie,
                setMsg,
                msg,
                setFilterSerieControl,
                filterSerieControl,
                editSerie,
                editSerieControl,
                setEditingSerie,
                setModalEditSerie,
                modalEditSerie,
                editingSerie,
                deleteSerieControl,
                setIdSerieControl,
                seleArea, setSeleArea,
                selectionShowSerie, setSelectionShowSerie,
                takingIdStatusArea,
                changingStatusArea,
                modalAlert, setModalAlert,
                previewChangeSerie, setPreviewChangeSerie,
                identifierDeleteSereieControl,
                modalAlertDeleteSerie, setModalAlertDeleteSerie,
                previewDeletingSerie,
                dataSeries,
                setDataSeries,
                guillotinaZona,
                devanadoZona,
                marcosZona,
                plegadoZona,
                pladurZona,
                rockbulkZona,
                punzonadoZona,
                pegamentoZona,
                preChangingSerie,
                upSelectionShowSerie

            }}
        >
            {children}
        </ControlContext.Provider>
    )
}
export { ControlProvider }
export default ControlContext