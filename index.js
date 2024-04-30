let users=document.querySelector(".user-list");
const username=document.querySelector("user");

const getUserData=async() => {
    try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        console.log(data);
        data.map((user) =>{
          const li=document.createElement('li');
          li.innerHTML =
          `
          <div class="user-data">
          <img src="${user.avatar_url
          }" alt="">
          <div>
              <p>${user.
                login}</p>
              <a href="${user.html_url}" target="_blank">${user.html_url}</a>
          </div>
        </div>
        `;
        

        users.appendChild(li);
        })



    } catch (error) {
      console.log(error)  
    }
}
getUserData();