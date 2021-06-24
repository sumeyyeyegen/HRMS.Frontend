import React from 'react'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import KodlamaIoTextInput from '../../utilities/customFormControls/KodlamaIoTextInput'

function CandidateRegister() {
  const initialValues = {
    firstName: "",
    lastName: "",
    identityNumber: "",
    email: "",
    birthYear: "",
    password: ""
  }

  const schema = Yup.object({
    firstName: Yup.string().required("Lütfen isminizi giriniz"),
    lastName: Yup.string().required("Lütfen sayadınızı giriniz"),
    identityNumber: Yup.string().required("Lütfen Tc kimlik numaranızı giriniz"),
    email: Yup.string().required("Lütfen email adresinizi giriniz"),
    birthYear: Yup.number().required("Lütfen doğum yılınızı giriniz"),
    password: Yup.string().required("Lütfen şifrenizi giriniz"),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref("password"), null], "Girilen şifreler farklı.")
      .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$", "En az sekiz karakter, en az bir büyük harf, bir küçük harf ve bir sayı içermelidir.")
      .required("Lütfen Şifrenizi Doğrulayın."),
  })

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <Formik
            initialValues={initialValues}
            //yup ile gelen özellik. zorunlu alanları girmemizi sağlar
            validationSchema={schema}
            onSubmit={(values) => { console.log(values); }}
          >
            <Form>
              <label htmlFor="firstName"></label>
              <KodlamaIoTextInput id="firstName" name="firstName" placeholder="First name" />
              <KodlamaIoTextInput name="lastName" placeholder="Last name" />
              <KodlamaIoTextInput name="identityNumber" placeholder="Identity number" />
              <KodlamaIoTextInput name="email" placeholder="Email" />
              <KodlamaIoTextInput name="birthYear" placeholder="Birth year" />
              <KodlamaIoTextInput name="password" placeholder="Password" />
              <KodlamaIoTextInput name="passwordRepeat" placeholder="Password repeat" />
              <button type="submit" className="btn btn-success">Submit</button>
            </Form>
          </Formik>
        </div></div>
    </div>
  )
}

export default CandidateRegister
