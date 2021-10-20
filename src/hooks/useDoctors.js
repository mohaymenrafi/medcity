const { useState, useEffect } = require("react")

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://mohaymenrafi.github.io/JSONs/Data/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return [doctors, setDoctors]
}

export default useDoctors;