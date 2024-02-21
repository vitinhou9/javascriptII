
let listaMensagens = [{}];

function adicionarMensagem(apelido, mensagem) {
    listaMensagens.push({
        "apelido": apelido,
        "mensagem": mensagem
    });
}

function formatarMensagens() {
    let mensagensHTML = "";
    for (let mensagem of listaMensagens) {
        mensagensHTML += `
            <div class="chat-message">
                <span class="chat-message-apelido">${mensagem.apelido}</span>
                <span class="chat-message-item">${mensagem.mensagem}</span>
            </div>
        `;
    }
    return mensagensHTML;
}

function atualizarHTML() {
    const chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = formatarMensagens();
}

function commitMessageClickHandler() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== "") {
        adicionarMensagem("Usuário", message);
        atualizarHTML();
        messageInput.value = "";
    }
}

module.exports = { 
    listaMensagens, 
    adicionarMensagem, 
    formatarMensagens,
    atualizarHTML,
    commitMessageClickHandler
};