// function for getting my blog posts from dev.to.
const superagent = require('superagent');

const getPosts = async () => {
  const DEV_TO_URL = "https://dev.to/api/articles"

  try {
    const result = superagent
      .get(DEV_TO_URL)
      .query({ username: "hvanotten" })
      .then(res => {
        return res.body
      })
    return result
  } catch (error) {
    console.log("WE HAVE FETCH POST ERROR", error)
  }
}
export default getPosts;