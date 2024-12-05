import { AppDispatch } from "../store/store"

export async function respAsync(dispath : AppDispatch) {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {})
    const data = await resp.json()

    dispath({ type: "loading", value: data})
    return data
}