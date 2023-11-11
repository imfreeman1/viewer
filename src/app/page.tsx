'use client'
import Button from '@/components/Button'
import React, { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState<number>(0)
  const increase = () => {
    setCount((s) => s + 1)
  }

  return (
    <div>
      <div>{count}</div>
      <Button onClick={increase}>add</Button>
    </div>
  )
}
