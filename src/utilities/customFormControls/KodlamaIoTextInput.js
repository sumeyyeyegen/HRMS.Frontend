import React from 'react'
import { useField } from 'formik'

function KodlamaIoTextInput({ name, label, ...props }) {
  //reflect api
  const [field, meta] = useField(name);

  console.log(field);
  console.log(meta);
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <input {...field} {...props} className={`${meta.error && meta.touched ? "border-red-500" : ""} shodow appearance-none border rounded w-full form-control py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} />
    </div>
  )
}

export default KodlamaIoTextInput
