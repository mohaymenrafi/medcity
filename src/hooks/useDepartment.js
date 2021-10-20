import { useEffect, useState } from "react"

const useDepartment = () => {
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('https://mohaymenrafi.github.io/JSONs/Data/departments.json')
        .then(res=> res.json())
        .then(data => setDepartments(data))
    }, [])
    return [departments, setDepartments]
}

export default useDepartment;