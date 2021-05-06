import axios from "axios"

const getDog =  async () => {
    const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    return data.message
}

const getMultipleDogs = async (num) => {
    const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
    return data.map((dogObj) => dogObj.message)
}

const dogsAPI = {
    getDog,
    getMultipleDogs,
}

export default dogsAPI