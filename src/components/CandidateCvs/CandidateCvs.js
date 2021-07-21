// import React, { useEffect, useState } from 'react'
// import CandidateCvsService from '../../services/CandidateCvsService'
// import CandidateCv from '../CandidateCv/CandidateCv';

// function CandidateCvs() {
//   const [cvs, setCvs] = useState([]);
//   useEffect(() => {
//     const candidateCvService = new CandidateCvsService();
//     candidateCvService.getAll().then(result => { setCvs(result.data.data) });
//   }, [])
//   console.log(cvs);
//   return (
//     <div>
//       {
//         cvs.length && cvs.map(cv => {
//           return <CandidateCv key={cv.id} cv={cv} />
//         })
//       }
//     </div>
//   )
// }

// export default CandidateCvs
