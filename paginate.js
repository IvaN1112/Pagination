const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const paginatedFollowers = Array.from(
    { length: numberOfPages },
    (_, index) => {
      const start = index * itemsPerPage;
      const end = start + itemsPerPage;
      return followers.slice(start, end);
    }
  );
  return paginatedFollowers;
};

export default paginate;
