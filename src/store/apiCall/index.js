import JobAdvertisementsService from "../../services/jobAdvertisementsService";
import { getJobAdvertisements } from "../actions/jobAdvertisementActions";

const jobAdvertisementService = new JobAdvertisementsService();

export function loadAllJobAdvertisements() {
    return async (dispatch) =>{
      await jobAdvertisementService.getActiveJobAdvertisements().then(res =>{
        return dispatch(getJobAdvertisements(res.data.data))
      })
    }
  } 