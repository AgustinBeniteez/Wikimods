document.addEventListener('DOMContentLoaded', function() {
    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const modId = urlParams.get('id');
    const gameType = urlParams.get('game');
    
    // Verificar si tenemos los parámetros necesarios
    if (!modId || !gameType) {
        redirectToHome();
        return;
    }
    
    // Buscar el mod en los datos
    const mod = modsData[gameType]?.find(m => m.id === modId);
    
    // Si no se encuentra el mod, redirigir a la página principal
    if (!mod) {
        redirectToHome();
        return;
    }
    
    // Configurar la navegación activa
    setActiveNavigation(gameType);
    
    // Configurar el botón de volver
    setBackButton(gameType);
    
    // Renderizar los detalles del mod
    renderModDetails(mod);
    
    // Configurar la galería
    setupGallery();
});

// Función para redirigir a la página principal
function redirectToHome() {
    window.location.href = '../index.html';
}

// Función para configurar la navegación activa
function setActiveNavigation(gameType) {
    const minecraftNav = document.getElementById('minecraft-nav');
    const sims4Nav = document.getElementById('sims4-nav');
    
    if (gameType === 'minecraft' && minecraftNav) {
        minecraftNav.classList.add('active');
    } else if (gameType === 'sims4' && sims4Nav) {
        sims4Nav.classList.add('active');
    }
}

// Función para configurar el botón de volver
function setBackButton(gameType) {
    const backLink = document.getElementById('back-link');
    if (backLink) {
        backLink.href = `../${gameType}.html`;
    }
}

// Función para renderizar los detalles del mod
function renderModDetails(mod) {
    const modContent = document.getElementById('mod-content');
    if (!modContent) return;
    
    // Usar una imagen de placeholder si no hay imagen principal
    const mainImageUrl = mod.mainImage || `../img/${mod.game}/placeholder.svg`;
    
    // Crear el HTML para los detalles del mod
    let modHTML = `
        <div class="mod-header">
            <div class="mod-header-image" style="background-image: url('${mainImageUrl}');"></div>
            <div class="mod-header-overlay">
                <h2>${mod.name}</h2>
                <div class="mod-meta">
                    <span><i class="fas fa-user"></i> ${mod.author}</span>
                    <span><i class="fas fa-code-branch"></i> ${mod.versions ? mod.versions[0] : 'N/A'}</span>
                    <span><i class="fas fa-download"></i> ${mod.downloadCount}</span>
                    <span><i class="fas fa-calendar-alt"></i> Creation Date: ${mod.creationDate}</span>
                </div>
            </div>
        </div>
        <div class="mod-body">
            <div class="mod-description">
                <h3>Descripción</h3>
                <p>${mod.description}</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">Características principales</h4>
                <ul style="padding-left: 1.5rem;">
                    ${mod.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
    `;
    
    // Añadir galería si hay imágenes
    if (mod.gallery && mod.gallery.length > 0) {
        modHTML += `
            <div class="mod-gallery">
                <h3>Galería</h3>
                <div class="gallery-grid">
                    ${mod.gallery.map(img => `
                        <div class="gallery-item" style="background-image: url('${img}');" data-img="${img}"></div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Añadir sección de descarga
    modHTML += `
            <div class="mod-download">
                <div class="mod-download-info">
                    <h3>Descargar ${mod.name}</h3>
                    <p>Versiones disponibles para ${mod.game === 'minecraft' ? 'Minecraft' : 'Sims 4'}:</p>
                    <div class="version-list">
                        ${mod.versions ? mod.versions.map(version => `<span class="version-tag">${version}</span>`).join('') : 'N/A'}
                    </div>
                </div>
                <a href="${mod.curseForgeUrl}" class="download-button" target="_blank">
                    <i class="fas fa-download"></i> Descargar desde CurseForge
                </a>
            </div>
        </div>
    `;
    
    // Insertar el HTML en el contenedor
    modContent.innerHTML = modHTML;
}

// Función para configurar la galería
function setupGallery() {
    // Implementar lightbox para la galería si es necesario
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgUrl = this.getAttribute('data-img');
            
            // Crear un lightbox simple
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.zIndex = '1000';
            
            // Crear la imagen
            const img = document.createElement('img');
            img.src = imgUrl;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '8px';
            
            // Añadir la imagen al lightbox
            lightbox.appendChild(img);
            
            // Añadir el lightbox al body
            document.body.appendChild(lightbox);
            
            // Cerrar el lightbox al hacer clic
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
}