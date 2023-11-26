const apiUrl = "https://www.nordicelegance.no/wp-json/wp/v2/posts?_embed&per_page=100";

async function fetchPostData(postId) {
    try {
      const response = await fetch(`${apiUrl}&include=${postId}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const postData = await response.json();
      return postData[0]; // Assuming the response returns an array of posts, and we want the first one (with index 0)
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  }

  function generatePostHTML(post) {
    console.log(post._embedded["wp:featuredmedia"][0].source_url);

    
  }

  const urlParameter = new URLSearchParams(window.location.search);
  const postId = urlParameter.get('post');

  if (postId) {
    fetchPostData(postId)
      .then(postData => {
        if (postData) {
          generatePostHTML(postData);
        } else {
          console.error('Post data not found');
        }
      })
      .catch(error => {
        console.error('Error fetching post data:', error);
      });
  } else {
    console.error('Post ID not found in the URL');
  }