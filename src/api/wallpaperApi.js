import axios from "axios";
export const WallpaperApi = axios.create({
    baseURL:"https://my-app-eta-steel-94.vercel.app/api/wallpapers",
    withCredentials:true
})
export default WallpaperApi