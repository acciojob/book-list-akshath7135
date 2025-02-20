document.getElementsById("submit").addEventListener("click",addBook);

function addBook(event) {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbnn = document.getElementById("isbn").value;

	let rw = document.createElement("tr");
	rw.innerHTML=`<td>${title}</td>
	<td>${author}</td>
	<td>${isbnn}</td>
	<td><button class="delete">X</button></td>`;

	document.getElementById("book-list").appendChild(rw);

	rw.querySelector(".delete").addEventListener("click", () => {
        rw.remove();
    });
}
