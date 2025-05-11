import { query } from "@/lib/request";

export async function getAdmin() {
    const res = await query("/api/users/list-admins", "GET")
    return res
}

export async function getUsers() {
    const res = await query("/api/users/list-users", "GET")
    return res
}

export async function updateStateOfUser(id: string) {
    const res = await query(`/api/users/modifed-state-user/${id}`, "PUT")
    return res
}

export async function deleteUser(id: string) {
    const res = await query(`/api/users/delete-user/${id}`, "DELETE")
    return res
}