import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

const btnContainer = document.querySelector('.btn-container');
let index = 0;
let pages;

const setUI = () => {
  //display a page of followers
  displayFollowers(pages[index]);
  //display buttons
  displayButtons(pages, index, btnContainer);
};

const initialize = async () => {
  //Fetching followers data
  const followers = await fetchFollowers();
  //Paginating and displaying followers
  pages = paginate(followers);
  setUI();
};

btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
    setUI();
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) index = pages.length - 1;
    setUI();
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) index = 0;
    setUI();
  }
});

window.addEventListener('DOMContentLoaded', initialize);
