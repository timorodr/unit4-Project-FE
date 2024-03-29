// Base Url
const URL = import.meta.env.VITE_BASE_URL
console.log(URL)
// Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allTransactions = await response.json()
    return allTransactions
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}${params.id}/`)
    const aTransaction = await response.json()
    return aTransaction
}