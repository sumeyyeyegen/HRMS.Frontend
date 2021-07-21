import { useField } from 'formik';
import React from 'react'

function KodlamaIoDropdown({ onChange, value, states, label, name, ...props }) {
  const [field, meta] = useField(name);
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <select name={name} onChange={onChange} {...field} className={`form-select ${meta.error && meta.touched ? "border-red-500" : ""} shodow appearance-none border w-full form-control py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} value={value} {...props}>
        <option value="0">{label} Seç..</option>
        {states.length && states.map(s => {
          return <option key={s.id} value={s.id}> {s.title || s.name} </option>
        })}
      </select>
      {meta.touched && meta.error ? (
        <span className="custom-input-error">{meta.error.value}</span>
      ) : null}
    </div>
  )
}

export default KodlamaIoDropdown
