// Platform URL configuration
const isDev = import.meta.env.DEV
export const PLATFORM_URL = isDev 
  ? 'http://localhost:5173' 
  : 'https://ob1-wan-kenobi.github.io/Internal-Tools'
