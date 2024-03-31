// 3 дз. На странице должна быть форма с двумя полями для имени и пароля и с кнопкой для отправки формы.
//  Ваша задача реализовать пост запрос в адрес https://jsonplaceholder.typicode.com/posts

// Доп дз: ваша форма не должна отправляться в том случае если хотя-бы один из инпутов будет пустым или в
//  нем будут только пробелы.

async function submitForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!username || !password) {
      alert("fill al inputs please");
      return;
    }
    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("error");
      }
  
      alert("ur data successfully sent");
    } catch (error) {
      console.error("error", error.message);
      alert("something went wrong");
    }
  
    if (!username || !password || !inputValid(username) || !inputValid(password)) {
      alert("please fill all inputs");
      return;
    }
  }