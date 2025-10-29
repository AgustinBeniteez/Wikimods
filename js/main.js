document.addEventListener('DOMContentLoaded', function() {
    
    // Cargar mods en las páginas correspondientes
    const minecraftModsContainer = document.getElementById('minecraft-mods');
    const sims4ModsContainer = document.getElementById('sims4-mods');
    
    // Obtener el idioma actual
    function getCurrentLanguage() {
        return getCookie('language') || 'en';
    }
    
    // Función para obtener cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    
    // Función para crear tarjetas de mods (expuesta globalmente)
    window.createModCard = function(mod) {
        const modCard = document.createElement('a');
        modCard.href = `mod/index.html?id=${mod.id}&game=${mod.game}`;
        modCard.className = 'mod-card';
        
        // Usar una imagen de placeholder si no hay imagen principal
        const imageUrl = mod.mainImage || `../img/${mod.game}/placeholder.svg`;
        
        // Obtener el idioma actual
        const currentLang = getCurrentLanguage();
        
        // Obtener la descripción corta en el idioma actual o usar el primer idioma disponible
        const shortDesc = mod.shortDescription[currentLang] || mod.shortDescription[Object.keys(mod.shortDescription)[0]];
        
        // Texto del botón según el idioma
        const buttonText = currentLang === 'es' ? 'Ver detalles' : 'View details';
        const authorPrefix = currentLang === 'es' ? 'Por ' : 'By ';
        
        modCard.innerHTML = `
            <div class="mod-image" style="background-image: url('${imageUrl}');"></div>
            <div class="mod-info">
                <h3>${mod.name}</h3>
                <p>${shortDesc}</p>
                <div class="mod-meta">
                    <span>${authorPrefix}${mod.author}</span>
                    <span>${mod.versions ? mod.versions.join(', ') : 'N/A'}</span>
                </div>
                <span class="mod-button">${buttonText}</span>
            </div>
        `;
        
        return modCard;
    };
    
    // Alias local para la función global
    const createModCard = window.createModCard;
    
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
                const currentLang = getCurrentLanguage();
                
                // Limpiar contenedor
                modsContainer.innerHTML = '';
                
                // Filtrar mods
                const filteredMods = modsData[gameType].filter(mod => {
                    // Obtener la descripción en el idioma actual o usar el primer idioma disponible
                    const description = mod.description[currentLang] || mod.description[Object.keys(mod.description)[0]];
                    const shortDesc = mod.shortDescription[currentLang] || mod.shortDescription[Object.keys(mod.shortDescription)[0]];
                    
                    return mod.name.toLowerCase().includes(searchTerm) || 
                           description.toLowerCase().includes(searchTerm) ||
                           shortDesc.toLowerCase().includes(searchTerm) ||
                           mod.author.toLowerCase().includes(searchTerm);
                });
                
                // Mostrar resultados
                if (filteredMods.length > 0) {
                    filteredMods.forEach(mod => {
                        modsContainer.appendChild(createModCard(mod));
                    });
                } else {
                    // Mensaje según el idioma
                    const noResultsMessage = currentLang === 'es' 
                        ? 'No se encontraron mods que coincidan con tu búsqueda.' 
                        : 'No mods found matching your search.';
                    modsContainer.innerHTML = `<p class="no-results">${noResultsMessage}</p>`;
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
    
    // Escuchar cambios de idioma para actualizar el contenido
    window.addEventListener('languageChanged', function(event) {
        // Recargar las tarjetas de mods con el nuevo idioma
        if (minecraftModsContainer && window.modsData && window.modsData.minecraft) {
            minecraftModsContainer.innerHTML = '';
            window.modsData.minecraft.forEach(mod => {
                minecraftModsContainer.appendChild(createModCard(mod));
            });
        }
        
        if (sims4ModsContainer && window.modsData && window.modsData.sims4) {
            sims4ModsContainer.innerHTML = '';
            window.modsData.sims4.forEach(mod => {
                sims4ModsContainer.appendChild(createModCard(mod));
            });
        }
        
        // Actualizar placeholder del buscador si existe
        const searchInput = document.getElementById('mod-search');
        if (searchInput) {
            const currentLang = event.detail.language;
            searchInput.placeholder = currentLang === 'es' ? 'Buscar mods...' : 'Search mods...';
        }
    });
});