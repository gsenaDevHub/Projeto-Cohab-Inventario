function fazerLogin() {
    const usuario = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    const USUARIO_CORRETO = "Suporte";
    const SENHA_CORRETA = "861kfj48";

    if (usuario === USUARIO_CORRETO && senha === SENHA_CORRETA) {
        window.location.href = "inventario.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}