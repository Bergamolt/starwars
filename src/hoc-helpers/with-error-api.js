import { useState } from 'react'

import { ErrorMessage } from 'components/error-message'

export const WithErrorApi = View => {
  const Error = props => {
    const [ error, setError ] = useState(false)

    const content = error ? <ErrorMessage/> : <View setError={ setError } { ...props }/>

    return (
      <>
        { content }
      </>
    )
  }

  return Error
}
