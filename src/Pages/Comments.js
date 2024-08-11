import React, { useContext } from 'react'
import comContext from '../Context/comContext'

export default function Comments() {

    const a = useContext(comContext)

  return (
    <div>Comments{a.name}</div>
  )
}
