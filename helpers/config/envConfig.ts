export const getBaseUrl = ():string => {
    
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://home-crafters-mikatsyed.vercel.app/api/v1"
}