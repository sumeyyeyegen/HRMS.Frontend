import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import JobAdvertisementsService from '../../services/JobAdvertisementsService'
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import WorkTimesService from '../../services/WorkTimesService'
import WorkPlacesService from '../../services/WorkPlacesService'
import CitiesService from '../../services/CitiesService'
import JobsService from '../../services/JobsService'
import { addJobAdvertisement } from '../../store/actions/jobAdvertisementActions';
import KodlamaIoDropdown from '../../utilities/customFormControls/KodlamaIoDropdown';
import './scss/JobAdvertAdd.scss'


function JobAdvertisementAdd() {

  const dispatch = useDispatch();

  const [workTimes, setWorkTimes] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);

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
    releaseDate: Yup.date(new Date(Date.now())).nullable().required(""),
    applicationDeadline: Yup.date().min(new Date(Date.now()), "Geçersiz tarih").nullable().required(""),
    workPlaceId: Yup.number().required("İş yeri bilgisini giriniz"),
    workTimeId: Yup.number().required("İş zaman bilgisini giriniz")
  })

  const handleSubmit = (values, { resetForm }) => {
    let jobAdvertService = new JobAdvertisementsService();
    dispatch(addJobAdvertisement(values))
    jobAdvertService.addJobAdvert(values).then(result => {
      addToast(result.data.message, { appearance: result.data.success ? "success" : "error" });
    })
    resetForm();
  }

  useEffect(() => {
    let workTimeService = new WorkTimesService();
    let workPlaceService = new WorkPlacesService();
    let jobService = new JobsService();
    let cityService = new CitiesService();

    cityService.getAllCities().then(result => setCities(result.data.data))
    jobService.getAllJobs().then(result => setJobs(result.data.data))
    workPlaceService.getAllPlaces().then(result => setWorkPlaces(result.data.data))
    workTimeService.getAllWorkTimes().then(result => setWorkTimes(result.data.data))
  }, [])

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-9 col-lg-6">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >{({
            values,
            touched,
            errors,
            handleSubmit,
            handleChange
          }) => (
            <Form onSubmit={handleSubmit}>
              <KodlamaIoDropdown errors={errors} touched={touched} id="cityId" states={cities} value={values.cityId} handleChange={handleChange} label="Şehir seç.." description="Şehir" />
              <KodlamaIoDropdown errors={errors} touched={touched} id="jobId" states={jobs} value={values.jobId} handleChange={handleChange} label="İş tanımı seç.." description="İş Tanımı" />
              <KodlamaIoDropdown errors={errors} touched={touched} id="workPlaceId" states={workPlaces} value={values.workPlaceId} handleChange={handleChange} label="İş yeri seç.." description="İş Yeri" />
              <KodlamaIoDropdown errors={errors} touched={touched} id="workTimeId" states={workTimes} value={values.workTimeId} handleChange={handleChange} label="İş zamanı seç.." description="İş Zamanı" />

            </Form>
          )}
          </Formik>
        </div></div>
    </div >
  )
}

export default JobAdvertisementAdd
