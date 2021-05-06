import axios from "axios"

const getDog =  async() => {
    const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    return data[0].url
}

const dogsAPI = {
    getDog,
}

export default dogsAPI