let menu = document.querySelector(".toggle");
let navbar = document.querySelector(".element");
let all_links = document.querySelectorAll(".element a");
let faq = document.querySelectorAll(".faq");
let plus = document.querySelectorAll(".icon .plus")
let current = 0;
let photo = document.querySelector(".photo");
let text = document.querySelector(".text");
let name_person = document.querySelector(".name");
let job = document.querySelector(".job");
const savedColorIndex = localStorage.getItem("element");
if (savedColorIndex !== null) {
    all_links[savedColorIndex].style.color = "blue";
}

all_links.forEach((e, index) => {
    e.addEventListener("click", function() {
        all_links.forEach((link) => {
            link.style.color = "";
        });
        e.style.color = "blue";
        localStorage.setItem("element", index);
    });
});


menu.onclick = function() {
    navbar.classList.toggle("active");
    if (navbar.classList.contains('active')) {
        menu.classList.add("fa-x");
        menu.classList.remove("fa-bars")
    } else {
        menu.classList.remove("fa-x");
        menu.classList.add("fa-bars")
    }
}
faq.forEach((e) => {
    const plus = e.querySelector(".plus");
    plus.onclick = function() {
        e.classList.toggle("active");
        plus.classList.toggle("fa-x")
    }
})

// -----------------------------------------------------------
//start upate content in client
let client = [{

        url: "images/it_service/client2.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam eos repellendus doloribus tempora distinctio autem dignissimos necessitatibus voluptatibus, voluptates facilis est. Cupiditate, fugit necessitatibus?",
        name: "Alura Miama",
        founder: "Founder Company"
    }, {

        url: "images/it_service/client3.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam eos repellendus doloribus tempora distinctio autem dignissimos necessitatibus voluptatibus, voluptates facilis est. Cupiditate, fugit necessitatibus?",
        name: "Janson Elya",
        founder: "Ceo Tech Ny"
    }, {

        url: "images/it_service/team-1 (4).jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam eos repellendus doloribus tempora distinctio autem dignissimos necessitatibus voluptatibus, voluptates facilis est. Cupiditate, fugit necessitatibus?",
        name: "Eze Emika",
        founder: "Manger It Text"
    }, {

        url: "images/it_service/team-2 (4).jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam eos repellendus doloribus tempora distinctio autem dignissimos necessitatibus voluptatibus, voluptates facilis est. Cupiditate, fugit necessitatibus?",
        name: "Eze Emika",
        founder: "Help Manger It Text"
    }, {
        url: "images/it_service/team-4 (4).jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam eos repellendus doloribus tempora distinctio autem dignissimos necessitatibus voluptatibus, voluptates facilis est. Cupiditate, fugit necessitatibus?",
        name: "Alura Jenson",
        founder: "Ceo Tech Ny"
    }

]

function update_content() {
    const {
        url,
        content,
        name,
        founder
    } = client[current];
    photo.src = url;
    text.innerHTML = content;
    name_person.innerHTML = name;
    job.innerHTML = founder
    current++;
    if (current === client.length) {
        current = 0;
    }

}
setInterval(() => {
    update_content()
}, 3000)