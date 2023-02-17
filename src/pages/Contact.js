import React from 'react';
import Menu from '../Menu';
import '../nav.css'

function Contact(props) {
    return (

        

        <div className='GA'>
            
            <Menu/>
           
            <h2 class="title1">
   Contacter Nous</h2>
  <div class="content1">
    <div class="card1">
      <div class="icon1"> 
      </div> 
      <div class="info">
        <h3> Tu as une question ou besoin d’aide ?</h3>
        <p> Tu trouveras déjà une première réponse aux quelques questions ci-dessous. Sinon, avec plus de 60 agences dans toute la Belgique, nous sommes toujours à proximité ! </p>
        <p> Besoin d’aide dans la recherche de ton nouveau job ? </p>
        <h3>Travailler chez nous ? </h3>
        <p>Sous la devise "Aimer.Oser.Ensemble !", nous recherchons pour les demandeurs d’emploi le job de leur rêve. Tu as un don pour matcher les personnes ? Viens donc travailler chez MK! </p>
        <h3>Une question ? </h3>
        <p>Pose-la toujours ! Mais peut-être que tu trouveras déjà la réponse parmi les nombreuses questions qui ont déjà été posées, consulte-les ici, ta question s’y retrouve peut-être déjà. Tu as une autre question ou tu préfères parler à l'un-e de nos collègues ? Tu peux contacter ton conseiller MK habituel ou une agence dans ta région.
             Tu peux retrouver les coordonnées de nos agences ici. </p>
      </div>
     
    </div>
  

  <div class="card">
    <div class="icon"> 
    </div> 
    <div class="info">
      <h3> Nos Formation </h3>
      <p>  Tel N° +32(0)485987654</p>
      <p> Email : MK-info@Cunsult.fr </p>
      <p> Adresser : aloste Rue BV de loine3 N°677</p>
      <button type='button'><a href='#'>Inscription</a></button> <br/>
      <button type='button'><a href='#'>Contact Nos </a></button> 
    </div>
  </div>
     </div>     </div>

     

    );
}

export default Contact;