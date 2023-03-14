/** Returns all blog posts as a collection. */
const getAllPosts = collection => {
  const events = collection.getFilteredByGlob('./src/events/*.md');
  return events.reverse();
};

module.exports = {
  getAllPosts
};
