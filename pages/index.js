import Menu from '../components/drawer'
import { useState } from 'react'

export default function Home() {
  
  const getData = async () => {
    const response = await fetch('/api/users')
    const value = await response.json()
  }
  return (
    <Menu>

    </Menu>
  )
}
