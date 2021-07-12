import React from 'react'
import { useField } from 'formik'

function KodlamaIoTextInput({ name, label, ...props }) {
  //reflect api
  const [field, meta] = useField(name);
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <textarea {...field} {...props} cols="30" rows="3" className={`${meta.error && meta.touched ? "border-red-500" : ""} shodow appearance-none border w-full form-control py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}></textarea>
    </div>
  )
}

export default KodlamaIoTextInput