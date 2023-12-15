// import React from 'react';
// import { useState, useEffect } from 'react';
// import getPosts from './post';


// const Blog = () => {

  /* initialising the state which will hold the posts information
     and the loading state, so we can have a loading placeholder on
   our site.*/

  // const [posts, setPosts] = useState([])
  // const [loading, setLoading] = useState(true)

  /*
     Use effect is the old lifecycle equivalent of ComponentDidMount()
     With the added empty array in the second parameter, this will run
     once when the component mounts.
  */

  // useEffect(() => {
  //   getPosts().then(res => {
  //     // I like to print so I know where things are happening
  //     console.log("IN USE-EFFECT", res)
  //     // Set the state using hooks syntax
  //     setPosts(res)

  //     // Set loading to false
  //     setLoading(false)
  //   })
  // }, [])

  // Print the data for easy debugging
  // console.log("Posts state", posts)

//   return (
//       <div>
//         {/* If we are loading, show loading placeholder */}
//         {loading && <h1>loading posts...</h1>}

//         {/* If we have loaded the posts display them */}
//         {!loading &&
//           posts?.map(post => {
//             return (
//               <Card
//                 imageSrcPath={post.cover_image}
//                 title={post.title}
//                 date={post.published_at.slice(0, 10)}
//                 description={post.description}
//                 leftButtonText="Read More"
//                 sourceURL={post.canonical_url}
//               />
//             )
//           })}
//       </div>
//   )
// }

// export default Blog;