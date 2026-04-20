(function() {
  const container = document.createElement('div');
  container.className = 'cb-fab-container';
  
  const buttons = [
    { id: 'cb-chat-btn', class: 'cb-chat', icon: '💬', title: 'Chat with us' },
    { id: 'cb-whatsapp-btn', class: 'cb-whatsapp', icon: '🟢', href: 'https://wa.me/919075390753?text=Namaste!%20I%20want%20to%20know%20more%20about%20your%20Ayurvedic%20treatments.', title: 'WhatsApp us' },
    { id: 'cb-call-btn', class: 'cb-call', icon: '📞', href: 'tel:+919075390753', title: 'Call us' }
  ];

  buttons.forEach((btn, index) => {
    const el = btn.href ? document.createElement('a') : document.createElement('button');
    el.id = btn.id;
    el.className = `cb-fab ${btn.class}`;
    if (btn.href) el.href = btn.href;
    el.title = btn.title;
    
    // Using icons as emojis for simplicity/lightweight as requested
    el.innerHTML = `<span style="font-size: 24px;">${btn.icon}</span>`;
    
    container.appendChild(el);
    
    // Staggered entry animation
    setTimeout(() => el.classList.add('visible'), 300 + (index * 150));
  });

  document.body.appendChild(container);

  // Connection between Floating Buttons and Chatbot
  document.getElementById('cb-chat-btn').addEventListener('click', () => {
    const chatWin = document.getElementById('cb-window');
    if (chatWin) {
      chatWin.classList.toggle('active');
    }
  });

})();
