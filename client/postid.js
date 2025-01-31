function getPostIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id"); // Extract post ID from URL
}

function createOnePostElement(data) {   
  console.log(data);
  const card = document.createElement("div");
  card.className = "post-card";

  const header = document.createElement("h3");
  header.textContent = data["title"];
  card.appendChild(header);

  const p = document.createElement("p");
  const formattedDate = new Date(data["date"]).toLocaleDateString("en-US", {
    weekday: "long", // Example: "Friday"
    year: "numeric", // Example: "2025"
    month: "long", // Example: "January"
    day: "numeric", // Example: "31"
  });
  p.textContent = `Date: ${formattedDate}`;
  card.appendChild(p);

  const postText = document.createElement("p");
  postText.textContent = data["post"];
  card.appendChild(postText);

  if (data["imageurl"]) {
    const img = document.createElement("img");
    img.src = data["imageurl"];
    img.classList.add("images");
    card.appendChild(img);
  }

  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-button'
  deleteButton.textContent = 'Delete the post'
  card.appendChild(deleteButton)

    deleteButton.addEventListener("click", async function () {
      const confirmation = confirm(
        "Are you sure you want to delete this post?"
      );
      if (!confirmation) return; 

      const postId = data.id; 
      try {
        const response = await fetch(`http://localhost:3210/posts/${postId}`, {
          method: "DELETE",
        });

        if (response.status === 204) {
          alert("Post deleted successfully!");
          // Optionally, remove the post element from the page
          card.remove();
        } else {
          alert("Failed to delete post.");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("An error occurred while deleting the post.");
      }
    });




  return card;
}

async function loadOnePost() {
  const postId = getPostIdFromUrl();
  if (!postId) {
    alert("No post ID found!");
    return;
  }

  const response = await fetch(`http://localhost:3210/posts/${postId}`);
  if (response.status === 200) {
    const post = await response.json();
    const container = document.getElementById("one-post-div");
    container.innerHTML = "";
    container.appendChild(createOnePostElement(post)); 
  } else {
    alert("Can't load the post!");
  }
}

loadOnePost();
