const { useState, useEffect } = require("react")

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mohaymenrafi.github.io/JSONs/Data/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return [services, setServices]
}

export default useService;