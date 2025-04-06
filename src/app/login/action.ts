'use server'
export const myPromise = async ()=>new Promise<string>((resolve,reject)=>{
    setTimeout(() => {
        resolve("Hello World")
    }, 3000)
})