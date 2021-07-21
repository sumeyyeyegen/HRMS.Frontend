import React from 'react'
import './scss/Aside.scss'
import userImage2 from '../../assets/images/userImages2.jpg'

function Aside() {
  return (
    <aside className="h-100">

      {/* İş arayan adaylar */}
      <ul className="list p-3">
        <img className="card-img-top" src={userImage2} alt="userImage" />
        <h5 className="card-text mt-2 fw-bold">Sümeyye Yeğen</h5>
        <li className="list-item">İş İlanı ekle +</li>
        <li className="list-item">Firmaya Ait Tüm İş İlanları</li>
        <li className="list-item">Aktif İş İlanları</li>
        <li className="list-item">Süresi Dolmuş İş İlanları</li>
      </ul>
      {/* İş veren */}
      <ul className="list p-3">
        <li className="list-item">İş İlanı ekle +</li>
        <li className="list-item">Firmaya Ait Tüm İş İlanları</li>
        <li className="list-item">Aktif İş İlanları</li>
        <li className="list-item">Süresi Dolmuş İş İlanları</li>
      </ul>

      {/* Sistem Personeli */}
      <ul className="list p-3">
        <li className="list-item">Onaylanan İş İlanları</li>
        <li className="list-item">Onay Bekleyen İş İlanları</li>
        <li className="list-item">Onaylanan İş Verenler</li>
        <li className="list-item">Onay Bekleyen İş Verenler</li>
      </ul>




    </aside>
  )
}

export default Aside
