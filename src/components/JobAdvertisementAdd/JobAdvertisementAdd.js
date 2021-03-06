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
import './scss/JobAdvertAdd.scss'
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
              jobId: Yup.number().required("???? kategorisini giriniz"),
              jobDescription: Yup.string().required("L??tfen i?? tan??m??n?? giriniz"),
              maxSalary: Yup.number().min(0, "De??er 0 dan b??y??k olmal??").required("L??tfen maksimum maa?? de??erini giriniz"),
              minSalary: Yup.number().min(0, "De??er 0 dan b??y??k olmal??").required("L??tfen minimum maa?? de??erini giriniz"),
              cityId: Yup.number().required("???? kategorisini giriniz"),
              openPositions: Yup.number().required("L??tfen a????k pozisyon say??s??n?? giriniz"),
              releaseDate: Yup.date(new Date(Date.now())).nullable().required(""),
              applicationDeadline: Yup.date().min(new Date(Date.now()), "Ge??ersiz tarih").nullable().required(""),
              workPlaceId: Yup.number().required("???? kategorisini giriniz"),
              workTimeId: Yup.number().required("???? kategorisini giriniz")
            })}
            onSubmit={(values) => {
              values.employerId = authItem[0].user.id;
              const jobAdvertService = new JobAdvertisementsService();
              jobAdvertService.addJobAdvert(values)
                .then(res => console.log("Ba??ar??l??" + res))
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
                    <label htmlFor="jobId">???? Pozisyonu</label>
                    <select id="jobId" name="jobId" onChange={handleChange} className="form-select" value={values.jobId}>
                      <option value="0">???? Pozisyonu Se??..</option>
                      {jobs.length && jobs.map(job => {
                        return <option key={job.id} label={job.title} value={job.id} />
                      })}
                    </select>
                  </div>
                  <div className="col-12 col-sm">
                    <KodlamaIoDropdown name="cityId" states={cities} onChange={handleChange} label="??ehir" value={values.cityId} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-sm">
                    <KodlamaIoDropdown name="workPlaceId" states={workPlaces} onChange={handleChange} label="???? Yeri" value={values.workPlaceId} />
                  </div>
                  <div className="col-12 col-sm">
                    <KodlamaIoDropdown name="workTimeId" states={workTimes} onChange={handleChange} label="???? Zaman??" value={values.workTimeId} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm">
                    <KodlamaIoTextInput name="minSalary" label="Minimum Maa?? Tutar??" value={values.minSalary} onChange={handleChange} />
                  </div>
                  <div className="col-12 col-sm">
                    <KodlamaIoTextInput name="maxSalary" label="Maksimum Maa?? Tutar??" value={values.maxSalary} onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-sm">
                    <KodlamaIoDatetimeLocal name="releaseDate" label="Yay??n Tarihi" value={values.releaseDate} />
                  </div>
                  <div className="col-12 col-sm mt-3 mt-lg-0">
                    <KodlamaIoDatetimeLocal name="applicationDeadline" label="Son Ba??vuru Tarihi" value={values.applicationDeadline} />
                  </div>
                </div>
                <KodlamaIoTextInput name="openPositions" label="A????k Pozisyon Say??s??" value={values.openPositions} onChange={handleChange} />
                <KodlamaIoTextArea name="jobDescription" label="A????klama" value={values.jobDescription} />
                <button className="btn btn-primary w-100 mt-2" type="submit" onClick={() => {
                  console.log(errors);
                }}>
                  Olu??tur
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
