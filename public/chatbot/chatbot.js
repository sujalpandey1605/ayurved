(function () {
  const styles = document.createElement('link');
  styles.rel = 'stylesheet';
  styles.href = '/chatbot/chatbot.css';
  document.head.appendChild(styles);

  const container = document.createElement('div');
  container.innerHTML = `
    <div id="cb-window">
      <div class="cb-header">
        <div class="cb-header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px; color:white;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
        </div>
        <div class="cb-header-info">
          <h4>Dr. Joshi's Assistant</h4>
          <p>Online | Multi-language</p>
        </div>
      </div>
      <div id="cb-messages"></div>
      <div class="cb-typing" id="cb-typing">Assistant is typing...</div>
      <div id="cb-quick-replies"></div>
      <form class="cb-input-area" id="cb-form">
        <input type="text" id="cb-input" placeholder="Ask in English or Hindi..." autocomplete="off">
        <button type="submit" class="cb-send-btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </form>
    </div>
  `;
  document.body.appendChild(container);

  const win = document.getElementById('cb-window');
  const messages = document.getElementById('cb-messages');
  const form = document.getElementById('cb-form');
  const input = document.getElementById('cb-input');
  const typing = document.getElementById('cb-typing');
  const replies = document.getElementById('cb-quick-replies');

  let currentLang = 'en';

  const addMessage = (text, sender, isHTML = false) => {
    const msg = document.createElement('div');
    msg.className = `cb-msg ${sender}`;
    if (isHTML) msg.innerHTML = text;
    else msg.innerHTML = text.replace(/\n/g, '<br>');
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  };

  const showTyping = (show) => {
    typing.style.display = show ? 'block' : 'none';
    messages.scrollTop = messages.scrollHeight;
  };

  const detectLanguage = (text) => {
    const val = text.toLowerCase();
    const hindiKeywords = ['नमस्ते', 'कैसे', 'क्या', 'उपचार', 'डॉक्टर', 'जोशी'];
    const hinglishKeywords = ['kaise', 'kya', 'hai', 'appointment', 'milna', 'kahan'];
    
    if (hindiKeywords.some(k => val.includes(k))) return 'hi';
    if (hinglishKeywords.some(k => val.includes(k))) return 'hinglish';
    return 'en';
  };

  const sendGreeting = () => {
    const greetings = window.CHATBOT_KNOWLEDGE.greetings[currentLang];
    const G = greetings[Math.floor(Math.random() * greetings.length)];
    showTyping(true);
    setTimeout(() => {
      showTyping(false);
      addMessage(G, 'bot');
      renderQuickReplies();
    }, 800);
  };

  const renderQuickReplies = () => {
    replies.innerHTML = '';
    window.CHATBOT_QUICK_REPLIES.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'cb-reply-btn';
      btn.innerText = text;
      btn.onclick = () => handleMessage(text);
      replies.appendChild(btn);
    });
  };

  const findResponse = (text) => {
    const val = text.toLowerCase();
    const knowledge = window.CHATBOT_KNOWLEDGE;
    
    // Check for Map request
    if (val.includes('location') || val.includes('branch') || val.includes('address') || val.includes('kahan')) {
       return { type: 'map', content: window.CHATBOT_MAPS.renderLocationCards() };
    }

    for (const key in knowledge) {
      if (['greetings', 'default', 'locations'].includes(key)) continue;
      const cat = knowledge[key];
      if (cat.keywords.some(k => val.includes(k))) {
        return { type: 'text', content: cat.answer[currentLang] };
      }
    }
    return { type: 'text', content: knowledge.default[currentLang] };
  };

  const handleMessage = (text) => {
    if (!text.trim()) return;
    currentLang = detectLanguage(text);
    addMessage(text, 'user');
    showTyping(true);
    
    const response = findResponse(text);
    
    setTimeout(() => {
      showTyping(false);
      addMessage(response.content, 'bot', response.type === 'map');
      renderQuickReplies();
    }, 1000);
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const val = input.value;
    input.value = '';
    handleMessage(val);
  };

  // Initial greeting after short delay
  setTimeout(sendGreeting, 1500);

})();
