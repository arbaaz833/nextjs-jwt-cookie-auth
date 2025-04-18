'use server'
export const myPromise = async ()=>new Promise<string>((resolve)=>{
    setTimeout(() => {
        resolve("Hello World")
    }, 3000)
})