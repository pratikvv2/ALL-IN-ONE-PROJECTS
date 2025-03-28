import { readFile } from "xlsx"
import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';
import { useState } from "react";

const ExelSample = () => {
    // eslint-disable-next-line no-unused-vars
    const [excelFile, setExcelFile] = useState()
    const [excelInfo, setExcelInfo] = useState([])
    const [fileName, setFileName] = useState('')

    let arr = [], thead = [];
    const renderExcel = async (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        setExcelFile(file)
        setFileName(file.name)
        const data = await file.arrayBuffer()
        const workbook = readFile(data, { sheetRows: 50 })
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const resultData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" })

        for (let i = 0; i < resultData.length; i++) {
            arr.push(resultData[i]);
        }
        setExcelInfo(arr);

    }
    const tdNth = {
        width: "150px", height: "auto", display: "flex", justifyContent: "start", alignItems: "center", border: "1px solid gray"
    }
    {
        excelInfo.length > 0 && (
            excelInfo.map((vals, index) => (
                index === 0
                    ? (thead.push(<tr style={{ width: "100%", display: "flex" }}>{vals.map((data, i) => <th key={i} style={{ width: "150px", height: "auto", alignItems: "center", border: "2px solid gray" }} >{data}</th>)}</tr>))
                    : (arr.push(<tr style={{ width: "100%", display: "flex" }}>{vals.map((data, i) => <td key={i} style={tdNth}>{data}</td>)}</tr>))
            ))
        )
    }

    return (
        <div>
            <div className="excel__uploader" style={{ marginTop: "1rem" }}>
                <form>
                    <label htmlFor="excel">Upload Excel File</label>
                    <input accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" id='excel' type="file" onChange={renderExcel} />
                    <button>Submit</button>
                </form>
                <div className="excel__render">
                    <h4>{fileName}</h4>
                    <table style={{ width: "100%" }}>
                        <thead style={{ width: "100%" }}>
                            {
                                thead.map(data => data)
                            }
                        </thead>

                        <tbody style={{ width: "100%" }}>
                            {
                                arr.map(data => data)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExelSample