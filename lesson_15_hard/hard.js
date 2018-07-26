var name, age, dispatch;

function access() {
	alert("Доступ к сайту разрешен");
	console.log("Пользователь допущен");
}

name = prompt("Как вас зовут?", '');
age = prompt("Сколько вам лет?", '');
dispatch = confirm("Вы подписаны на рассылку?");

if (age >= 18 && dispatch) {
	access();
} else {
	alert("Доступ запрещен");
	window.close();
}

