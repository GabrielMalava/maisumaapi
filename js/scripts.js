const url = "https://jsonplaceholder.typicode.com/posts"


const loadingElement = document.querySelector('#loading')

const postContainer = document.querySelector('#posts-container')


async function getAllPosts() {
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)

    loadingElement.classList.add("ride")

    data.map((post) => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innertText = post.title
        body.innerText = post.body
        link.innerText = "Ler"
        link.setAttribute("href", `/post.html?id=${post.id}`)
        link.setAttribute("href", `/post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postContainer.appendChild(div)

    }
    )
}

getAllPosts()