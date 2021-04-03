const displayButtons = (pages, activeIndex, btnContainer) => {
  const btnsHTML = pages.map((_, pageIndex) => {
    return `
   <button class="page-btn ${
     activeIndex === pageIndex ? 'active-btn' : 'null '
   }" data-index="${pageIndex}">${pageIndex + 1}</button>
   `;
  });
  btnsHTML.unshift(`<button class="prev-btn">Prev</button>`);
  btnsHTML.push(`<button class="next-btn">Next</button>`);
  btnContainer.innerHTML = btnsHTML.join('');
};

export default displayButtons;
