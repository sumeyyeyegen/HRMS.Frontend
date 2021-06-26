import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import KodlamaIoTextInput from '../../utilities/customFormControls/KodlamaIoTextInput'
import { useToasts } from 'react-toast-notifications';
import CandidatesService from '../../services/CandidatesService';

function CandidateRegister() {

  const { addToast } = useToasts();

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
    email: Yup.string().email("Geçersiz email formatı").required("Lütfen email adresinizi giriniz"),
    birthYear: Yup.number().required("Lütfen doğum yılınızı giriniz"),
    password: Yup.string().required("Lütfen şifrenizi giriniz"),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Girilen şifreler farklı.")
      .required("Lütfen Şifrenizi Doğrulayın."),
  })

  const onSubmit = (values) => {
    let candidatesService = new CandidatesService();
    candidatesService.registerCandidate(values).then(result => {
      addToast(result.data.message, { appearance: result.data.success ? "success" : "error", autoDismiss: true });
    })
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <Formik
            initialValues={initialValues}
            //yup ile gelen özellik. zorunlu alanları girmemizi sağlar
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            {formik => (
              <Form>
                <label htmlFor="firstName">İsim</label>
                <KodlamaIoTextInput name="firstName" id="firstName" placeholder="First name" value={formik.values.firstName} />
                <label htmlFor="lastName">Soyisim</label>
                <KodlamaIoTextInput name="lastName" id="lastName" placeholder="Last name" value={formik.values.lastName} />
                <label htmlFor="lastName">TC Kimlik Numarası</label>
                <KodlamaIoTextInput name="identityNumber" id="identityNumber" placeholder="Identity number" value={formik.values.identityNumber} />
                <label htmlFor="lastName">Email</label>
                <KodlamaIoTextInput name="email" id="email" placeholder="Email" value={formik.values.email} />
                <label htmlFor="lastName">Doğum Yılı</label>
                <KodlamaIoTextInput name="birthYear" id="birthYear" placeholder="Birth year" value={formik.values.birthYear} />
                <label htmlFor="lastName">Şifre</label>
                <KodlamaIoTextInput name="password" id="password" placeholder="Password" value={formik.values.password} />
                <label htmlFor="lastName">Şifre Tekrar</label>
                <KodlamaIoTextInput name="passwordRepeat" id="passwordRepeat" placeholder="Password repeat" />
                <button type="submit" className="btn btn-success">Submit</button>
              </Form>
            )}
          </Formik>
        </div></div>
    </div >
  )
}

export default CandidateRegister
