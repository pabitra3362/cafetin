const config={
    authDomain:String(import.meta.env.VITE_AUTH0_DOMAIN),
    authClientId:String(import.meta.env.VITE_AUTH0_CLIENT_ID),
    razorpay_key:String(import.meta.env.VITE_RAZORPAY_KEY_ID),
}

export default config;