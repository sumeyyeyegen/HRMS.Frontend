import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import KodlamaIoTextInput from '../../utilities/customFormControls/KodlamaIoTextInput'
import { useToasts } from 'react-toast-notifications';
import CandidatesService from '../../services/CandidatesService';
import { useDispatch } from 'react-redux';
import { addCandidate } from '../../store/actions/candidateActions';

function CandidateRegister() {

  const dispatch = useDispatch();
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

  const handleSubmit = (values) => {
    let candidatesService = new CandidatesService();
    dispatch(addCandidate(values))
    candidatesService.registerCandidate(values).then(result => {
      addToast(result.data.message, { appearance: result.data.success ? "success" : "error" });
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
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <KodlamaIoTextInput name="firstName" label="İsim" />
                <KodlamaIoTextInput name="lastName" label="Soyisim" />
                <KodlamaIoTextInput name="identityNumber" label="TC Kimlik Numarası" />
                <KodlamaIoTextInput name="email" label="Email" />
                <KodlamaIoTextInput name="birthYear" label="Doğum Yılı" />
                <KodlamaIoTextInput name="password" label="Şifre" />
                <KodlamaIoTextInput name="passwordRepeat" label="Şifre Tekrar" />
                <button type="submit" className="btn btn-success">Submit</button>
              </Form>
            )}
          </Formik>
        </div></div>
    </div >
  )
}

export default CandidateRegister
