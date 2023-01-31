import { width } from '@mui/system'
import React from 'react'
import MovieTable from 'src/components/MovieTable'

const lists = () => {
  return (
    <div 
        style={{ 
          height: 1000, 
          width: 1000
          }}>
      <MovieTable />
    </div>
  )
}

export default lists