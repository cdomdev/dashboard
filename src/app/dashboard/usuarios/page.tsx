import Home from './pageCliUser'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Administradores"
}
export default function AdminPage() {
  return <Home />
}
