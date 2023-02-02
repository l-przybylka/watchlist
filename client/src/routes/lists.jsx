import { width } from '@mui/system'
import React from 'react'
import MovieTable from 'src/components/MovieTable'

const lists = () => {
  return (
    <div style={{ height: 600, width: 900 }}>
      <div style={{ display: 'flex', height: '100%', width: '100%'}}>
        <div style={{ flexGrow: 1 }}>
          <MovieTable />
        </div>
      </div>
    </div>
  )
}

export default lists