const apiUrl = "https://www.nordicelegance.no/wp-json/wp/v2/posts?_embed&per_page=100"
const postsContainer = document.querySelector(".posts-container");



fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      //* <article class="card">
      const article = document.createElement("article");
      postsContainer.appendChild(article);
      article.classList.add("card");

      //* <header class="card__thumb">
      const header = document.createElement("header");
      article.appendChild(header);
      header.classList.add("card__thumb");
      const headerA = document.createElement("a");
      header.appendChild(headerA);

      headerA.href = "#";
  
      const aImg = document.createElement("img");
      headerA.appendChild(aImg);

      aImg.src = post._embedded["wp:featuredmedia"][0].source_url;

      //* <div class="card__date">
      const postDate = new Date(post.date);
      const formattedDay = postDate.toLocaleDateString('en-GB', {
        day: '2-digit',
      });
      const formattedMonthYear = postDate.toLocaleDateString('en-GB', {
        month: 'short',
        year: 'numeric',
      });

      const carddate = document.createElement("div");
      article.appendChild(carddate);
      carddate.classList.add("card__date");
      const card__date__day = document.createElement("span");
      carddate.appendChild(card__date__day);
      card__date__day.classList.add("card__date__day");

      card__date__day.textContent = formattedDay;

      const card__date__month = document.createElement("span");
      carddate.appendChild(card__date__month);
      card__date__month.classList.add("card__date__month");

      card__date__month.textContent = formattedMonthYear;

      //* <div class="card__body">
      const card__body = document.createElement("div");
      article.appendChild(card__body);
      card__body.classList.add("card__body");

      const card__category = document.createElement("div");
      card__body.appendChild(card__category);
      card__category.classList.add("card__category");
      const card__categoryA = document.createElement("a");
      card__category.appendChild(card__categoryA);

      card__categoryA.href = "#";
      card__categoryA.textContent = post.categories;
      if (post.categories[0] === 19) {
        card__categoryA.textContent = "Finance";
      } else {
        card__categoryA.textContent = "News";
      }
      

      const card__title = document.createElement("div");
      card__body.appendChild(card__title);
      card__title.classList.add("card__title");
      const card__titleA = document.createElement("a");
      card__title.appendChild(card__titleA);

      card__titleA.href = "#"
      card__titleA.textContent = post.title.rendered;

      const card__subtitle = document.createElement("div");
      card__body.appendChild(card__subtitle);
      card__subtitle.classList.add("card__subtitle");

      card__subtitle.innerHTML = post.excerpt.rendered;
      if (post.tags[0] === 20) {
        card__subtitle.innerHTML = "By Werner Hamre";
      }

      const card__description = document.createElement("p");
      card__body.appendChild(card__description);
      card__description.classList.add("card__description");

      card__description.innerHTML = post.excerpt.rendered;

      //*  <footer class="card__footer">

      const card__footer = document.createElement("footer");
      article.appendChild(card__footer);
      card__footer.classList.add("card__footer");

      const iconTime = document.createElement("span");
      card__footer.appendChild(iconTime);
      iconTime.classList.add("icon","icon--time");

      iconTime.textContent ="time_test";

      const iconComment = document.createElement("span");
      card__footer.appendChild(iconComment);
      iconComment.classList.add("icon","icon--comment");
      const iconCommentA = document.createElement("a");
      iconComment.appendChild(iconCommentA);

      iconCommentA.href = "#";
      let totalComments = 0;

      if (post._embedded && post._embedded.replies && Array.isArray(post._embedded.replies)) {
        post._embedded.replies.forEach(commentArray => {
          if (Array.isArray(commentArray)) {
            totalComments += commentArray.length;
          }
        });
      }
      iconCommentA.textContent = totalComments.toString() + " Comments";
    })

    const cards = document.querySelectorAll('.posts-container .card');
    for (let i = 10; i < cards.length; i++) {
      cards[i].style.display = 'none';
  }
  const showMoreBtn = document.getElementById('showMoreBtn');
  showMoreBtn.addEventListener('click', function() {
    for (let i = 10; i < cards.length; i++) {
        if (cards[i].style.display === 'none') {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
});
})
