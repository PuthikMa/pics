import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID eJDmsQUryzEH9vkd3tRkxOOx4Z0eBGzF9Gtev1zGUp4'
    }
});