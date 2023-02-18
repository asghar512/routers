import React from 'react'
import { useLocation } from 'react-router-dom'
function GalleryChildOne() {
  const location = useLocation()
  console.log(location)
  return (
    <div>GalleryChildOne</div>
  )
}

export default GalleryChildOne