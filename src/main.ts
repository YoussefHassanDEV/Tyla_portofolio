import './style.css'
let position = document.getElementById('about');
let homeID = document.getElementById('homeID');
let EducationID = document.getElementById('EducationID');
let CertificatesID = document.getElementById('CertificatesID');
let skillsID = document.getElementById('skillsID');
let projectID = document.getElementById('projectID');
let contactID = document.getElementById('contactID');
let footerID = document.getElementById('footer');
window.addEventListener("scroll", function () {

    let scroll_y = this.scrollY;
    console.log( scroll_y);
    if(scroll_y < 336){
      homeID?.classList.add('text-yellow-400');
      EducationID?.classList.remove('text-yellow-400');
      CertificatesID?.classList.remove('text-yellow-400');
      skillsID?.classList.remove('text-yellow-400');
      projectID?.classList.remove('text-yellow-400');
      contactID?.classList.remove('text-yellow-400');
      footerID?.classList.remove('text-yellow-400');


    }
    else if(scroll_y < 583){
      EducationID?.classList.add('text-yellow-400');
      homeID?.classList.remove('text-yellow-400');
      CertificatesID?.classList.remove('text-yellow-400');
      skillsID?.classList.remove('text-yellow-400');
      projectID?.classList.remove('text-yellow-400');
      contactID?.classList.remove('text-yellow-400');
      footerID?.classList.remove('text-yellow-400');

    }
    else if(scroll_y < 795){
      EducationID?.classList.remove('text-yellow-400');
      homeID?.classList.remove('text-yellow-400');
      CertificatesID?.classList.add('text-yellow-400');
      skillsID?.classList.remove('text-yellow-400');
      projectID?.classList.remove('text-yellow-400');
      contactID?.classList.remove('text-yellow-400');
      footerID?.classList.remove('text-yellow-400');

    }
    else if(scroll_y < 1008){
      skillsID?.classList.add('text-yellow-400');
      EducationID?.classList.remove('text-yellow-400');
      homeID?.classList.remove('text-yellow-400');
      CertificatesID?.classList.remove('text-yellow-400');
      projectID?.classList.remove('text-yellow-400');
      contactID?.classList.remove('text-yellow-400');
      footerID?.classList.remove('text-yellow-400');

    }
    else if(scroll_y < 1291){
      projectID?.classList.add('text-yellow-400');
      contactID?.classList.remove('text-yellow-400');
      EducationID?.classList.remove('text-yellow-400');
      homeID?.classList.remove('text-yellow-400');
      CertificatesID?.classList.remove('text-yellow-400');
      skillsID?.classList.remove('text-yellow-400');
      footerID?.classList.remove('text-yellow-400');

    }
    else if(scroll_y < 1550){
      contactID?.classList.add('text-yellow-400');
      projectID?.classList.remove('text-yellow-400');
      EducationID?.classList.remove('text-yellow-400');
      homeID?.classList.remove('text-yellow-400');
      CertificatesID?.classList.remove('text-yellow-400');
      skillsID?.classList.remove('text-yellow-400');
      footerID?.classList.remove('text-yellow-400');
    }
    else{
      contactID?.classList.remove('text-yellow-400');
      projectID?.classList.remove('text-yellow-400');
      EducationID?.classList.remove('text-yellow-400');
      homeID?.classList.remove('text-yellow-400');
      CertificatesID?.classList.remove('text-yellow-400');
      skillsID?.classList.remove('text-yellow-400');
      footerID?.classList.add('text-yellow-400');
    }
});