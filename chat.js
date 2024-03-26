
const listaMensagens = [];

const messageCommit = document.querySelector('#message-commit');
const messageInput = document.querySelector('#message-input');
const divpai = document.querySelector('chat-container');


function adicionarMensagem (apelido,mensagem)
{
    const estrutura = {
        apelido : apelido, 
        mensagem : mensagem };


    listaMensagens.push(estrutura);
}
function formatarMensagens(){
    const chatmessagediv = document.createElement('div');
    chatmessagediv.classList.add('chat-message');

        for(let i =0;i < listaMensagens.length ;i++){
            
    //apelido
            const chatMessageApelidoSpan = document.createElement('span');
                chatMessageApelidoSpan.classList.add('chat-message-apelido');
                chatMessageApelidoSpan.innerText =listaMensagens[i].apelido;
    //mensagem
            const BrElement = document.createElement('br')

            const Message = document.createElement('span');
                Message.classList.add('chat-message-item');
                Message.innerText = ` ${listaMensagens[i].mensagem}`;


        chatmessagediv.appendChild(chatMessageApelidoSpan);
        chatmessagediv.appendChild(Message);
        chatmessagediv.appendChild(BrElement);

        }
    return chatmessagediv;
}
function atualizarHTML() {
    const chatMessages = document.querySelector('#chat-messages');
    chatMessages.appendChild(formatarMensagens());
}
function commitMessageClickHandler(){
    const apelido = ' Vitor ';
    const message = messageInput.value.trim(); 
        if (message ==='')
        {
            alert('campo vazio!')
            messageInput.value = "";
            messageInput.focus();
        }
    
    adicionarMensagem(apelido,message);
    atualizarHTML();
    formatarMensagens();
    messageInput.value = "";
    messageInput.focus();
}

module.exports = { 
    listaMensagens, 
    adicionarMensagem, 
    formatarMensagens,
    atualizarHTML,
    commitMessageClickHandler
};
