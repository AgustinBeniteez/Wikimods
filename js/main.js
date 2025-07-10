document.addEventListener('DOMContentLoaded', function() {
    
    // Cargar mods en las páginas correspondientes
    const minecraftModsContainer = document.getElementById('minecraft-mods');
    const sims4ModsContainer = document.getElementById('sims4-mods');
    
    // Función para crear tarjetas de mods
    function createModCard(mod) {
        const modCard = document.createElement('a');
        modCard.href = `mod/index.html?id=${mod.id}&game=${mod.game}`;
        modCard.className = 'mod-card';
        
        // Usar una imagen de placeholder si no hay imagen principal
        const imageUrl = mod.mainImage || `../img/${mod.game}/placeholder.svg`;
        
        modCard.innerHTML = `
            <div class="mod-image" style="background-image: url('${imageUrl}');"></div>
            <div class="mod-info">
                <h3>${mod.name}</h3>
                <p>${mod.shortDescription}</p>
                <div class="mod-meta">
                    <span>Por ${mod.author}</span>
                    <span>${mod.versions ? mod.versions.join(', ') : 'N/A'}</span>
                </div>
                <span class="mod-button">Ver detalles</span>
            </div>
        `;
        
        return modCard;
    }
    
    // Cargar mods de Minecraft
    if (minecraftModsContainer) {
        modsData.minecraft.forEach(mod => {
            minecraftModsContainer.appendChild(createModCard(mod));
        });
        
        // Configurar búsqueda
        setupSearch('minecraft');
    }
    
    // Cargar mods de Sims 4
    if (sims4ModsContainer) {
        modsData.sims4.forEach(mod => {
            sims4ModsContainer.appendChild(createModCard(mod));
        });
        
        // Configurar búsqueda
        setupSearch('sims4');
    }
    
    // Función para configurar la búsqueda
    function setupSearch(gameType) {
        const searchInput = document.getElementById('mod-search');
        const searchBtn = document.getElementById('search-btn');
        
        if (searchInput && searchBtn) {
            // Función de búsqueda
            function performSearch() {
                const searchTerm = searchInput.value.toLowerCase();
                const modsContainer = document.getElementById(`${gameType}-mods`);
                
                // Limpiar contenedor
                modsContainer.innerHTML = '';
                
                // Filtrar mods
                const filteredMods = modsData[gameType].filter(mod => 
                    mod.name.toLowerCase().includes(searchTerm) || 
                    mod.description.toLowerCase().includes(searchTerm) ||
                    mod.author.toLowerCase().includes(searchTerm)
                );
                
                // Mostrar resultados
                if (filteredMods.length > 0) {
                    filteredMods.forEach(mod => {
                        modsContainer.appendChild(createModCard(mod));
                    });
                } else {
                    modsContainer.innerHTML = '<p class="no-results">No se encontraron mods que coincidan con tu búsqueda.</p>';
                }
            }
            
            // Eventos de búsqueda
            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    }
});