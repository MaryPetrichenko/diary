document
  .getElementById("new-post-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("post-content").value;
    const imageUrl = document.getElementById("image-url").value;

    const newPost = {
      title: title,
      post: content,
      imageurl: imageUrl,
      date: new Date().toISOString(),
    };

    const response = await fetch("http://localhost:3210/posts/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      window.location.href = "posts.html"; // Redirect back to the posts page after successful post creation
    } else {
      alert("Failed to create post.");
    }
  });
