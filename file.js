function showMessage() {
    const message = document.getElementById('dynamic-message');
    message.innerHTML = `
        Dearest Thereza,<br>
        You are the song in my soul, the warmth in my heart, and my forever. 
        I promise to love you endlessly, every single day. ❤
    `;
    message.classList.add('text-danger', 'fw-bold');
}