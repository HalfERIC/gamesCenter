function abrirModal() {
    document.getElementById('contato').style.marginTop='30px';
    document.getElementById('contato').style.height='300px';

}

function fecharModal() {
    document.getElementById('contato').style.marginTop='-600px';
    document.getElementById('contato').style.height='600px';
}

function validarFormulario() {
    var senha = document.getElementById('fid-senha').value;
    var email = document.getElementById('fid-email').value;

    if (senha == '' && email == '') {
        document.getElementById('fid-email').style.border='solid 0.5px red';
        document.getElementById('fid-senha').style.border='solid 0.5px red';
        document.getElementById('mensagem-erro').innerHTML='Informe todos os campos';
        document.getElementById('mensagem-erro').style.color='red';
    } else if (senha == '' && email != '') {
        document.getElementById('fid-email').style.border='none';
        document.getElementById('fid-senha').style.border='solid 0.5px red';
        document.getElementById('mensagem-erro').innerHTML='Informe sua Senha';
    } else if (senha != '' && email == '') {
        document.getElementById('fid-email').style.border='solid 0.5px red';
        document.getElementById('fid-senha').style.border='none';
        document.getElementById('mensagem-erro').innerHTML='Informe o seu E-mail';
    } else {
        document.getElementById('fid-senha').style.border='none';
        document.getElementById('fid-email').style.border='none';
        document.getElementById('mensagem-erro').innerHTML='Login bem sucessedido!';
        document.getElementById('mensagem-erro').style.color='green';
    }

}

function limpar() {
    document.getElementById('fid-email').style.border='none';
    document.getElementById('fid-senha').style.border='none';
    document.getElementById('mensagem-erro').innerHTML='';
    
}