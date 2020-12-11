import React, { useContext} from 'react';

import {InstallmentDataContext} from '../../context/InstallmentDataContext'
import UserPhoto from '../../assets/images/Profile.jpg'

const Profile = () =>{
    const [installmentData] = useContext(InstallmentDataContext);
    return (

        <div className='aside-profile d-flex flex-column align-items-center justify-content-center'>
        <img src={UserPhoto} alt='avatar' className='avatar' />
        <h5>Joana Alves Dias</h5>
        <p className='p-user-id' key={installmentData.userId}>Seu id: {installmentData.userId}</p>
        <article>
            <h6>CPF</h6>
            <p>123.456.789-10</p>
        </article>
        <article>
            <h6>Data de Nascimento</h6>
            <p>28/08/1993</p>
        </article>
        <article>
            <h6>Telefone</h6>
            <p>(61) 98525-3238</p>
        </article>
        <article>
            <h6>Email</h6>
            <p>joana_a@gmail.com</p>
        </article>
        <p className='p-alert-profile'>Se algum dado estiver incorreto, 
por favor entre em contato conosco!</p>
        <span>
            <hr/>
        </span> 
        <a className="chat-button mt-3 d-flex align-items-center justify-content-center">
            Abrir chat
        </a>
     </div>
    )
}

export default Profile;