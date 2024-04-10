
openMenu.addEventListener('click', () => {
	menu.style.display = "flex"
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	setTimeout(()=> {
		menu.style.opacity = '1'
		menu.style.right = "0"
		openMenu.style.display = 'none'
	}, 10);
})
closeMenu.addEventListener('click', () => {
	menu.style.opacity = '0'
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})


/*Acessar*/
document.getElementById("btnAcessar").addEventListener("click", function(event) {
	event.preventDefault(); // Previne o envio do formulário
	// Redireciona para a página de destino
	document.getElementById("linkDestino").click();
});



