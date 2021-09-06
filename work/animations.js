'use strict';

const linkList = document.getElementsByClassName('animate-link');

const workContent = document.getElementById('work-content');
const companyContent = document.getElementById('company-content');
const companyImgEl = companyContent.querySelector('.animate-img');

const changeToCompanyContent = function () {
  workContent.classList.toggle('inactive');
  companyContent.classList.remove('d-none');
  companyContent.classList.toggle('inactive');

  const clickedImgEl = this.querySelector('.cropped-custom');
  companyImgEl.setAttribute("src", clickedImgEl.getAttribute("src"));
  companyImgEl.setAttribute("alt", clickedImgEl.getAttribute("alt"));
};

const changeToWorkContent = function () {
  workContent.classList.toggle('inactive');
  companyContent.classList.add('d-none');
  companyContent.classList.toggle('inactive');
}

for (const link of linkList) {
  link.addEventListener('click', changeToCompanyContent);
}

companyImgEl.addEventListener('click', changeToWorkContent);
