import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import JobAdvertisementsService from '../../services/JobAdvertisementsService'
// import { useDispatch } from 'react-redux';
// import { useToasts } from 'react-toast-notifications';
import WorkTimesService from '../../services/WorkTimesService'
import WorkPlacesService from '../../services/WorkPlacesService'
import CitiesService from '../../services/CitiesService'
import JobsService from '../../services/JobsService'
import KodlamaIoTextArea from '../../utilities/customFormControls/KodlamaIoTextArea';
import './scss/JobAdvertAdd.css'
import KodlamaIoTextInput from '../../utilities/customFormControls/KodlamaIoTextInput';
import KodlamaIoDatetimeLocal from '../../utilities/customFormControls/KodlamaIoDatetimeLocal';
import KodlamaIoDropdown from '../../utilities/customFormControls/KodlamaIoDropdown';
import { useSelector } from 'react-redux';

function JobAdvertisementAdd() {

  // const dispatch = useDispatch();
  const { authItem } = useSelector(state => state.auth)

  const [workTimes, setWorkTimes] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);

  // const { addToast } = useToasts();

  useEffect(() => {
    let workTimeService = new WorkTimesService();
    let workPlaceService = new WorkPlacesService();
    let jobService = new JobsService();
    let cityService = new CitiesService();

    jobService.getAllJobs().then(result => setJobs(result.data.data))
    cityService.getAllCities().then(result => setCities(result.data.data))
    workPlaceService.getAllPlaces().then(result => setWorkPlaces(result.data.data))
    workTimeService.getAllWorkTimes().then(result => setWorkTimes(result.data.data))
  }, [])

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-9 col-lg-6">
          <Formik
            initialValues={{
              jobId: 0,
              jobDescription: "",
              openPositions: "",
              applicationDeadline: "",
              releaseDate: "",
              minSalary: 0,
              maxSalary: 0,
              cityId: 0,
              workPlaceId: 0,
              workTimeId: 0,
            }}
            validationSchema={Yup.object({
              jobId: Yup.number().required("İş kategorisini giriniz"),
              jobDescription: Yup.string().required("Lütfen iş tanımını giriniz"),
              maxSalary: Yup.number().min(0, "Değer 0 dan büyük olmalı").required("Lütfen maksimum maaş değerini giriniz"),
              minSalary: Yup.number().min(0, "Değer 0 dan büyük olmalı").required("Lütfen minimum maaş değerini giriniz"),
              cityId: Yup.number().required("İş kategorisini giriniz"),
              openPositions: Yup.number().required("Lütfen açık pozisyon sayısını giriniz"),
              releaseDate: Yup.date(new Date(Date.now())).nullable().required(""),
              applicationDeadline: Yup.date().min(new Date(Date.now()), "Geçersiz tarih").nullable().required(""),
              workPlaceId: Yup.number().required("İş kategorisini giriniz"),
              workTimeId: Yup.number().required("İş kategorisini giriniz")
            })}
            onSubmit={(values) => {
              values.employerId = authItem[0].user.id;
              const jobAdvertService = new JobAdvertisementsService();
              jobAdvertService.addJobAdvert(values)
                .then(res => console.log("Başarılı" + res))
                .catch(err => console.log("Hata" + err))
              console.log(values);
            }}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              errors
            }) => (
              <form onSubmit={handleSubmit}  >
                <div className="row mb-3">
                  <div className="col-12 col-sm">
                    <label htmlFor="jobId">İş Pozisyonu</label>
                    <select id="jobId" name="jobId" onChange={handleChange} className="form-select" value={values.jobId}>
                      <option value="0">İş Pozisyonu Seç..</option>
                      {jobs.length && jobs.map(job => {
                        return <option key={job.id} label={job.title} value={job.id} />
                      })}
                    </select>
                  </div>
                  <div className="col-12 col-sm">
                    <KodlamaIoDropdown name="cityId" states={cities} onChange={handleChange} label="Şehir" value={values.cityId} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-sm">
                    <KodlamaIoDropdown name="workPlaceId" states={workPlaces} onChange={handleChange} label="İş Yeri" value={values.workPlaceId} />
                  </div>
                  <div className="col-12 col-sm">
                    <KodlamaIoDropdown name="workTimeId" states={workTimes} onChange={handleChange} label="İş Zamanı" value={values.workTimeId} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm">
                    <KodlamaIoTextInput name="minSalary" label="Minimum Maaş Tutarı" value={values.minSalary} onChange={handleChange} />
                  </div>
                  <div className="col-12 col-sm">
                    <KodlamaIoTextInput name="maxSalary" label="Maksimum Maaş Tutarı" value={values.maxSalary} onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-sm">
                    <KodlamaIoDatetimeLocal name="releaseDate" label="Yayın Tarihi" value={values.releaseDate} />
                  </div>
                  <div className="col-12 col-sm mt-3 mt-lg-0">
                    <KodlamaIoDatetimeLocal name="applicationDeadline" label="Son Başvuru Tarihi" value={values.applicationDeadline} />
                  </div>
                </div>
                <KodlamaIoTextInput name="openPositions" label="Açık Pozisyon Sayısı" value={values.openPositions} onChange={handleChange} />
                <KodlamaIoTextArea name="jobDescription" label="Açıklama" value={values.jobDescription} />
                <button className="btn btn-primary w-100 mt-2" type="submit" onClick={() => {
                  console.log(errors);
                }}>
                  Oluştur
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div >
  )
}

export default JobAdvertisementAdd
