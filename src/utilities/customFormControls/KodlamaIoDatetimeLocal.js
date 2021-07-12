import { useField } from 'formik';
import React from 'react'

function KodlamaIoDatetimeLocal({ name, label, ...props }) {
  const [field, meta] = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...field} {...props} type="datetime-local" className={`${meta.error && meta.touched ? "border-red-500" : ""} shodow appearance-none border w-full form-control py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} />
    </div>
  )
}

export default KodlamaIoDatetimeLocal
