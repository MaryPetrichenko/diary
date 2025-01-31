function createPostElement(data) {
  console.log(data);
  const card = document.createElement("div");
  card.className = "post-card";

  // Make the post clickable
  card.addEventListener("click", () => {
    window.location.href = `postid.html?id=${data.id}`;
  });

  const header = document.createElement("h3");
  header.textContent = data["title"];
  card.appendChild(header);

  const p = document.createElement("p");
  const formattedDate = new Date(data["date"]).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  p.textContent = `Date: ${formattedDate}`;
  card.appendChild(p);

  if (data["imageurl"]) {
    const img = document.createElement("img");
    img.src = data["imageurl"];
    img.classList.add("images");
    card.appendChild(img);
  }

  return card;
}

async function loadPosts() {
  const response = await fetch("http://localhost:3210/posts");
  if (response.status == 200) {
    const posts = await response.json();
    const container = document.getElementById("posts-div");
    
    posts.forEach((post) => {
      const element = createPostElement(post);
      container.appendChild(element);
    });
  } else {
    alert("Can't load the posts!");
  }
}

loadPosts();

