import React from 'react'
import { useField } from 'formik'

function KodlamaIoTextInput({ ...props }) {
  //reflect api
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);
  return (
    <div className="mb-3">
      <input {...field} {...props} className="form-control" />
    </div>
  )
}

export default KodlamaIoTextInput
