export async function getDataHome() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/684827888531003a6e47e0a4?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)
    
        if (!res.ok) {
            ('Failed to fetch data')
        }
        return res.json()
    
    }catch(err) {
        throw new Error('Failed to fetch data')
    }
}