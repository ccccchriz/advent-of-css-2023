export async function loader() {
    const sessionData = window.sessionStorage.getItem('santa_data')
    if(sessionData) return JSON.parse(sessionData)
    const data = await fetch('data.json').then(data => data.json())
    if(data){
        window.sessionStorage.setItem('santa_data', JSON.stringify(data))
        return data
    }
    return null
}