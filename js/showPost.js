const apiUrl = "https://www.nordicelegance.no/wp-json/wp/v2/posts?_embed&per_page=100";

async function fetchPostData(postId) {
    try {
      const response = await fetch(`${apiUrl}&include=${postId}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const postData = await response.json();
      return postData[0];
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  }


  const contentWrapper = document.querySelector(".contentwrapper");
  const footer = document.querySelector(".footerwrapper");
  console.log(footer);

  function generatePostHTML(post) {
    console.log(post);
    const postImage = document.createElement('img');
    contentWrapper.appendChild(postImage);
    postImage.src = post._embedded["wp:featuredmedia"][0].source_url;

    const postTitle = document.createElement('h1');
    contentWrapper.appendChild(postTitle);
    postTitle.textContent = post.title.rendered;

    const postContent = document.createElement('div');
    contentWrapper.appendChild(postContent);
    postContent.innerHTML = post.content.rendered;

    const postDate = document.createElement('div');
    footer.appendChild(postDate);
    postDate.innerHTML = post.date;

    const postTag = document.createElement('div');
    footer.appendChild(postTag);

    var tagId = post.tags[0];
    if (tagId === 20) {
      tagId = 'By Werner Hamre'
    }
    postTag.innerHTML = tagId;  
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