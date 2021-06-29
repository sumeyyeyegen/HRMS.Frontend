import { Form, Formik } from 'formik';
import React from 'react'
import JobAdvertisementsService from '../../services/JobAdvertisementsService'
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';


function JobAdvertisementAdd() {

  //const dispatch = useDispatch();

  // const candidates = useSelector(state => state.candidates)

  const { addToast } = useToasts();

  const initialValues = {
    jobId: 0,
    jobDescription: "",
    maxSalary: 0,
    minSalary: 0,
    active: true,
    cityId: 0,
    workPlaceId: 0,
    workTimeId: 0,
    employerId: 0,
    openPositions: 0,
    releaseDate: "",
    applicationDeadline: ""
  }

  const schema = Yup.object({
    jobId: Yup.number().required("Lütfen iş kategorisini giriniz"),
    jobDescription: Yup.string().required("Lütfen iş tanımını giriniz"),
    maxSalary: Yup.number().min(0, "Değer 0 dan büyük olmalı").required("Lütfen maksimum maaş değerini giriniz"),
    minSalary: Yup.number().min(0, "Değer 0 dan büyük olmalı").required("Lütfen minimum maaş değerini giriniz"),
    active: Yup.boolean().required("Lütfen iş ilanınızın durumunu girin"),
    cityId: Yup.number().required("Lütfen şehir bilgisini giriniz"),
    employerId: Yup.number().required("Lütfen iş veren bilgisini giriniz"),
    openPositions: Yup.number().required("Lütfen açık pozisyon sayısını giriniz"),
    releaseDate: Yup.date().nullable().required(""),
    applicationDeadline: Yup.date().nullable().required(""),
    workPlaceId: Yup.number().required("İş yeri bilgisini giriniz"),
    workTimeId: Yup.number().required("İş zaman bilgisini giriniz")
  })

  const handleSubmit = (values) => {
    let jobAdvertService = new JobAdvertisementsService();
    dispatch(addCandidate(values))
    jobAdvertService.addJobAdvert(values).then(result => {
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
                <KodlamaIoTextInput name="jobId" label="İş" />
                <KodlamaIoTextInput name="jobDescription" label="Açıklama" />
                <KodlamaIoTextInput name="minSalary" label="Minimum Tutar" />
                <KodlamaIoTextInput name="maxSalary" label="Maksimum Tutar" />
                <KodlamaIoTextInput name="active" label="Durum" />
                <KodlamaIoTextInput name="cityId" label="Şehir" />
                <KodlamaIoTextInput name="workPlaceId" label="İş Yeri" />
                <KodlamaIoTextInput name="workTimeId" label="İş zamanı" />
                <KodlamaIoTextInput name="employerId" label="İşveren" />
                <KodlamaIoTextInput name="openPositions" label="Açık pozisyon" />
                <KodlamaIoTextInput name="releaseDate" label="Yayın tarihi" />
                <KodlamaIoTextInput name="releaseDate" label="Bitiş tarihi" />
                <button type="submit" className="btn btn-success">Submit</button>
              </Form>
            )}
          </Formik>
        </div></div>
    </div >
  )
}

export default JobAdvertisementAdd
