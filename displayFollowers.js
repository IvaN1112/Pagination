const container = document.querySelector('.container');
const title = document.querySelector('.section-title h1');

const display = (followers) => {
  title.textContent = 'Pagination';
  container.innerHTML = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `
    <article class="card">
    <img src="${avatar_url}" alt=${login}>
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>
    `;
    })
    .join('');
};

export default display;
