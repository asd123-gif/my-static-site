// گرفتن آیدی مقاله از URL
const params = new URLSearchParams(window.location.search);
const articleId = params.get('id')?.replace(/[^a-zA-Z0-9_-]/g, ''); // جلوگیری از ورودی‌های خطرناک

if (articleId) {
  fetch(`static/JSON/${articleId}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const articleContent = document.getElementById("article-content");
      
      // حذف محتوای قبلی (در صورت وجود)
      articleContent.innerHTML = "";

      // اضافه کردن عنوان مقاله
      const titleElement = document.createElement("h2");
      titleElement.textContent = data.title;
      articleContent.appendChild(titleElement);

      // ایجاد محتوای مقاله
      data.content.forEach(item => {
        if (item.type === "text") {
          let p = document.createElement("p");
          p.textContent = item.value;
          articleContent.appendChild(p);
        } else if (item.type === "image") {
          let img = document.createElement("img");
          img.src = item.value;
          img.alt = "Article Image";
          img.style.maxWidth = "100%"; // جلوگیری از بیش‌ازحد بزرگ شدن تصویر
          articleContent.appendChild(img);
        } else if (item.type === "video") {
          let video = document.createElement("video");
          video.src = item.value;
          video.controls = true;
          video.style.maxWidth = "100%"; // ویدیو هم نباید بزرگ‌تر از کادر شود
          articleContent.appendChild(video);
        }
      });
    })
    .catch(error => console.error("Error loading JSON:", error));
} else {
  console.error("No article ID specified!");
}
