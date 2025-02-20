document.getElementsById("submit").addEventListener("click",addBook);

function addBook(event) {
	let title = document.getElementsById("title").value;
	let author = document.getElementsById("author").value;
	let isbnn = document.getElementsById("isbn").value;

	let rw = document.createElement("tr");
	rw.innerHTML=`<td>${title}</td>
	<td>${author}</td>
	<td>${isbnn}</td>
	<td><button class="delete">X</button></td>`;

	document.getElementsById("book-list").appendChild(rw);

	rw.querySelector(".delete").addEventListener("click", () => {
        rw.remove();
    });
}
