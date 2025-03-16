function validarNomeCompleto(nome) {
    if (!nome.trim()) {
        return { valido: false, mensagem: 'O nome não pode estar em branco.' };
    }
    if (nome.trim().split(' ').length < 2) {
        return { valido: false, mensagem: 'Por favor, insira nome e sobrenome.' };
    }
    return { valido: true };
}

function mascaraTelefone(telefone) {
    const texto = telefone.value;
    const textoApenasDig = texto.replace(/\D/g, '').substring(0, 11);
    
    let telefoneFormatado = textoApenasDig.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefoneFormatado = telefoneFormatado.replace(/(\d)(\d{4})$/, '$1-$2');
    
    telefone.value = telefoneFormatado;
}

// Dentro do document.addEventListener, adicione:
const telefoneInput = document.getElementById('telefone');
if (telefoneInput) {
    telefoneInput.addEventListener('input', function() {
        mascaraTelefone(this);
    });
}

function validarEmail(email) {
    if (!email.trim()) {
        return { valido: false, mensagem: 'O e-mail não pode estar em branco.' };
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        return { valido: false, mensagem: 'Por favor, insira um e-mail válido.' };
    }
    return { valido: true };
}

function validarMensagem(mensagem) {
    const comprimento = mensagem.trim().length;
    if (!mensagem.trim()) {
        return { valido: false, mensagem: 'A mensagem não pode estar em branco.' };
    }
    if (comprimento < 30) {
        return { valido: false, mensagem: 'A mensagem deve ter pelo menos 30 caracteres.' };
    }
    if (comprimento > 500) {
        return { valido: false, mensagem: 'A mensagem não pode ter mais de 500 caracteres.' };
    }
    return { valido: true };
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');
    const contadorCaracteres = document.getElementById('contadorCaracteres');
    const mensagemTextarea = document.getElementById('mensagem');
    
    // Aplicar máscara ao campo de telefone
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    if (mensagemTextarea && contadorCaracteres) {
        mensagemTextarea.addEventListener('input', function() {
            const caracteresRestantes = 500 - this.value.length;
            contadorCaracteres.textContent = `${this.value.length}/500 caracteres`;
            if (caracteresRestantes < 0) {
                contadorCaracteres.classList.add('text-danger');
            } else {
                contadorCaracteres.classList.remove('text-danger');
            }
        });
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nomeCompleto').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Limpar mensagens de erro anteriores
            document.querySelectorAll('.invalid-feedback').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            
            let formValido = true;
            
            // Validar nome
            const validacaoNome = validarNomeCompleto(nome);
            if (!validacaoNome.valido) {
                document.getElementById('nomeCompleto').classList.add('is-invalid');
                document.getElementById('nomeCompleto-feedback').textContent = validacaoNome.mensagem;
                document.getElementById('nomeCompleto-feedback').style.display = 'block';
                formValido = false;
            }
            
            // Validar email
            const validacaoEmail = validarEmail(email);
            if (!validacaoEmail.valido) {
                document.getElementById('email').classList.add('is-invalid');
                document.getElementById('email-feedback').textContent = validacaoEmail.mensagem;
                document.getElementById('email-feedback').style.display = 'block';
                formValido = false;
            }
            
            // Validar mensagem
            const validacaoMensagem = validarMensagem(mensagem);
            if (!validacaoMensagem.valido) {
                document.getElementById('mensagem').classList.add('is-invalid');
                document.getElementById('mensagem-feedback').textContent = validacaoMensagem.mensagem;
                document.getElementById('mensagem-feedback').style.display = 'block';
                formValido = false;
            }
            
            if (formValido) {
                // Limpar o formulário
                form.reset();
                
                // Mostrar modal de sucesso
                const sucessoModal = new bootstrap.Modal(document.getElementById('sucessoModal'));
                sucessoModal.show();
            }
        });
    }
});
