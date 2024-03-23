import React from 'react'
import { Placeholder } from 'react-bootstrap'

const TablePlaceHolder = ({row, col}: any) => {
  return (
    <>
                {Array.from({ length: row })?.map((_) => (
                  <tr>
                   { Array.from({ length: col })?.map((_) => (
                       
                       <td>
                      <Placeholder animation='glow'>
                        <Placeholder xs={12} bg='secondary' />
                      </Placeholder>
                    </td>
                        ))}
                  </tr>
                ))}
              </>
  )
}

export default TablePlaceHolder
