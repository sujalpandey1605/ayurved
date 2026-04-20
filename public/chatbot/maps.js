window.CHATBOT_MAPS = {
  getDirectionsUrl: (address) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  },
  
  renderLocationCards: () => {
    const locations = window.CHATBOT_KNOWLEDGE.locations;
    let html = '<div style="display:flex; flex-direction:column; gap:8px;">';
    
    locations.slice(0, 3).forEach(loc => {
      html += `
        <div class="cb-map-card">
          <h5>📍 ${loc.name}</h5>
          <p>${loc.address}</p>
          <a href="${window.CHATBOT_MAPS.getDirectionsUrl(loc.address)}" target="_blank" class="cb-dir-btn">
             Get Directions
          </a>
        </div>
      `;
    });
    
    html += '</div>';
    return html;
  }
};
