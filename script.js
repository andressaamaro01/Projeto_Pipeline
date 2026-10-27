// Login simulado, só para a atividade.
const USUARIO = 'leitor';
const SENHA = 'biblioteca';

const pagina = document.body.dataset.pagina;
const socio = sessionStorage.getItem('socio');

if (pagina === 'login') {
  if (socio) location.replace('home.html');

  const form = document.getElementById('form-login');
  const erro = document.getElementById('erro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value;

    if (usuario.toLowerCase() === USUARIO && senha === SENHA) {
      sessionStorage.setItem('socio', usuario);
      location.href = 'home.html';
    } else {
      erro.textContent = 'Nome de sócio ou senha incorretos. Confira os dados e tente de novo.';
      document.getElementById('senha').value = '';
      document.getElementById('senha').focus();
    }
  });
}

if (pagina === 'home') {
  if (!socio) location.replace('index.html');

  document.getElementById('nome').textContent = socio;

  document.getElementById('sair').addEventListener('click', () => {
    sessionStorage.removeItem('socio');
    location.href = 'index.html';
  });

  document.getElementById('gif').addEventListener('error', (e) => {
    e.target.hidden = true;
    document.getElementById('vazio').hidden = false;
  });
}