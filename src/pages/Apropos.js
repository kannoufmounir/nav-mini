import React from 'react';
// eslint-disable-next-line no-unused-expressions
import Menu from '../Menu';
import '../nav.css'

function Galerie(props) {
    return (
     
             
        <div className='GZZZ'>
             
                <Menu/>

                <h1>FQA</h1>
                <section>
    <div class="container">
      <div class="accordion">
        <div class="accordion-item" id="question1">
          <a class="accordion-link" href="#question1">
            <div class="flex">
              <h3>Quel est l’objectif d’une FAQ sur votre site ?</h3>
              <ul>
                <li>Une FAQ vous fait gagner du temps.</li>
                <li>#Sketch</li>
                
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p> Une FAQ vous fait gagner du temps. Si vous passez beaucoup de temps à répondre aux mêmes questions par e-mail ou sur les réseaux sociaux, une FAQ peut vous faire économiser du temps. Les clients se dirigeront naturellement vers votre FAQ pour trouver les réponses à leurs interrogations.</p>
          </div>
          <hr/>
      </div>
        <div class="accordion-item" id="question2">
          <a class="accordion-link" href="#question2">
            <div class="flex">
              <h3>Une FAQ booste le trafic sur votre site et vous apporte de nouveaux</h3>
              <ul>
                <li>#clients.</li>
                <li>#Sketch</li>
               
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Une FAQ booste le trafic sur votre site et vous apporte de nouveaux clients. L’objectif premier de Google est de fournir une réponse à des questions. Si vous structurez vos textes au format questions/réponses, vous lui mâchez déjà une bonne partie du travail. Mieux encore, si vous répondez pertinemment à la question posée sur cette page, vous êtes susceptible d’apparaître dans les réponses recommandées ou les extraits optimisés des résultats de recherche de Google, une vraie aubaine pour votre site !</p>
          </div>
          <hr/>
      </div>
        <div class="accordion-item" id="question3">
          <a class="accordion-link" href="#question3">
            <div class="flex">
              <h3>Une FAQ instaure la confiance et démontre votre sérieux </h3>
              <ul>
                <li>#Figma</li>
                <li>#Sketch</li>
                
                <li>#Protopie</li>
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr/>
      </div>
        <div class="accordion-item" id="question4">
          <a class="accordion-link" href="#question4">
            <div>
              <h3>BQuelles questions inclure dans une FAQ ?</h3>
              <ul>
                <li>#Figma</li>
                <li>#Sketch</li>
              
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Inspirez-vous des questions de vos clients
Demandez-vous quelles questions vos clients vous posent. Jetez un œil à vos e-mails et à vos pages sur les réseaux sociaux pour recueillir les questions qui reviennent le plus souvent. En général, demandez-vous : pourquoi les visiteurs hésitent-ils avant d’acheter sur votre site ? Quels doutes ont-ils ? En répondant à toutes leurs interrogations, vos clients seront plus enclins à acheter en toute confiance. De plus, vous gagnerez du temps.</p>
          </div>
          <hr/>
      </div>
     </div>
    </div>
  </section>     
  
  </div>
       
    );
}

export default Galerie;