import Home from './PageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Usuarios"
}
export default function UserPage() {
  return <Home />
}
