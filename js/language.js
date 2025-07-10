// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
    // Default language is English
    const defaultLanguage = 'en';
    
    // Available languages
    const languages = {
        'en': 'English',
        'es': 'Español'
    };
    
    // Translations
const translations = {
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_minecraft': 'Minecraft',
        'nav_sims4': 'Sims 4',
        'nav_profile': 'Profile',
        'language_selector': 'Language',
        
        // Index page
        'welcome_title': 'Welcome to WikiModsATK',
        'welcome_subtitle': 'Mods by <a href="https://github.com/AgustinBeniteez" target="_blank">AgustinBenitez</a>',
        'minecraft_card_title': 'Minecraft',
        'minecraft_card_desc': 'Explore mods that will transform your gaming experience',
        'sims4_card_title': 'Sims 4',
        'sims4_card_desc': 'Discover mods that add new features and content',
        
        // Minecraft page
        'minecraft_title': 'Minecraft Mods',
        'minecraft_subtitle': 'Explore our collection of Minecraft mods',
        'search_placeholder': 'Search mods...',
        
        // Sims 4 page
        'sims4_title': 'Sims 4 Mods',
        'sims4_subtitle': 'Explore our collection of Sims 4 mods',
        
        // Mod details page
        'back_button': 'Back',
        'mod_details_title': 'Mod Details',
        
        // Minecraft Mods Descriptions - English
        'indexer_desc': 'Indexer is a mod that helps you organize and manage your items. This automation system allows you to filter and automatically distribute the contents of your Chests/Containers, eliminating the need to manually sort your resources. With Indexer, you can deposit all your items at a central point and the system will take care of distributing them to the appropriate containers according to the filters you have configured, saving you time and keeping your base perfectly organized!',
        'indexer_short': 'Automatic item organization and management system',
        'modern_decor_outdoor_desc': 'Modern Decor Outdoor is a mod featuring a range of stylish outdoor furniture and decor, including modern pool tiles, sun loungers, deckchairs, chairs, umbrellas, and a fun inflatable flamingo for pool fun. It also includes new fireplaces, wooden materials, wood panel decks, lamps, barbecues, and more all designed with a sleek, contemporary touch to enhance any outdoor space.',
        'modern_decor_outdoor_short': 'Modern decoration for outdoors and pools',
        'modern_decor_wooden_desc': 'Modern Decor Wooden is a mod with furniture, with wood paneling with a modern twist and furniture such as PC, desks, keyboards and Neon. It offers setups and furniture with color variants, allowing you to sit on chairs and sofas, and decorate your spaces with different neon styles to create unique and personalized environments.',
        'modern_decor_wooden_short': 'Modern wooden furniture and interior decoration',
        'makeup_aesthetics_decor_desc': 'Makeup | Aesthetics Decor is a mod with aesthetic and makeup decoration, with: nail polish, dressing table, massage table, etc. Perfect for creating beauty and wellness spaces in your Minecraft world, adding a touch of elegance and functionality to your builds.',
        'makeup_aesthetics_decor_short': 'Aesthetic decoration and beauty elements',
        'hazbin_hotel_items_desc': 'Hazbin Hotel Items is a mod that adds some Hazbin Hotel items, like Doors of the series, pillars of the hotel & more things to create the hotel of Hazbin Hotel in your Minecraft world. Inspired by the popular Prime Video series, this mod allows you to recreate the iconic settings and environments from the show.',
        'hazbin_hotel_items_short': 'Elements inspired by the Hazbin Hotel series',
        
        // Footer
        'footer_text': '© 2025 WikiModsATK - All rights reserved'
    },
    'es': {
        // Navigation
        'nav_home': 'Inicio',
        'nav_minecraft': 'Minecraft',
        'nav_sims4': 'Sims 4',
        'nav_profile': 'Perfil',
        'language_selector': 'Idioma',
        
        // Index page
        'welcome_title': 'Bienvenido a WikiModsATK',
        'welcome_subtitle': 'Mods de <a href="https://github.com/AgustinBeniteez" target="_blank">AgustinBenitez</a>',
        'minecraft_card_title': 'Minecraft',
        'minecraft_card_desc': 'Explora mods que transformarán tu experiencia de juego',
        'sims4_card_title': 'Sims 4',
        'sims4_card_desc': 'Descubre mods que añaden nuevas funcionalidades y contenido',
        
        // Minecraft page
        'minecraft_title': 'Mods de Minecraft',
        'minecraft_subtitle': 'Explora nuestra colección de mods para Minecraft',
        'search_placeholder': 'Buscar mods...',
        
        // Sims 4 page
        'sims4_title': 'Mods de Sims 4',
        'sims4_subtitle': 'Explora nuestra colección de mods para Sims 4',
        
        // Mod details page
        'back_button': 'Volver',
        'mod_details_title': 'Detalles del Mod',
        
        // Minecraft Mods Descriptions - Spanish
        'indexer_desc': 'Indexer es un mod que te ayuda a organizar y gestionar tus items. Este sistema de automatización te permite filtrar y distribuir automáticamente el contenido de tus cofres/contenedores, eliminando la necesidad de clasificar manualmente tus recursos. Con Indexer, puedes depositar todos tus items en un punto central y el sistema se encargará de distribuirlos a los contenedores apropiados según los filtros que hayas configurado, ahorrándote tiempo y manteniendo tu base perfectamente organizada.',
        'indexer_short': 'Sistema de organización y gestión automática de items',
        'modern_decor_outdoor_desc': 'Modern Decor Outdoor es un mod que presenta una variedad de muebles y decoraciones para exteriores, incluyendo modernas baldosas para piscinas, tumbonas, sillas de playa, sillas, sombrillas y un divertido flamenco inflable para la diversión en la piscina. También incluye nuevas chimeneas, materiales de madera, cubiertas de paneles de madera, lámparas, barbacoas y más, todo diseñado con un toque contemporáneo y elegante para mejorar cualquier espacio exterior.',
        'modern_decor_outdoor_short': 'Decoración moderna para exteriores y piscinas',
        'modern_decor_wooden_desc': 'Modern Decor Wooden es un mod con muebles y paneles de madera con un toque moderno, que incluye muebles como PC, escritorios, teclados y neones. Ofrece configuraciones y muebles con variantes de color, permitiéndote sentarte en sillas y sofás, y decorar tus espacios con diferentes estilos de neón para crear ambientes únicos y personalizados.',
        'modern_decor_wooden_short': 'Muebles modernos de madera y decoración interior',
        'makeup_aesthetics_decor_desc': 'Makeup | Aesthetics Decor es un mod con decoración estética y de maquillaje, que incluye elementos como esmalte de uñas, tocador, mesa de masajes y más. Perfecto para crear espacios de belleza y bienestar en tu mundo de Minecraft, añadiendo un toque de elegancia y funcionalidad a tus construcciones.',
        'makeup_aesthetics_decor_short': 'Decoración estética y elementos de belleza',
        'hazbin_hotel_items_desc': 'Hazbin Hotel Items es un mod que añade algunos elementos de Hazbin Hotel, como las puertas de la serie, pilares del hotel y más cosas para crear el hotel de Hazbin Hotel en tu mundo de Minecraft. Inspirado en la popular serie de Prime Video, este mod te permite recrear los icónicos escenarios y ambientes del show.',
        'hazbin_hotel_items_short': 'Elementos inspirados en la serie Hazbin Hotel',
        
        // Footer
        'footer_text': '© 2025 WikiModsATK - Todos los derechos reservados'
    }
    };
    
    // Function to get cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    
    // Function to set cookie
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value}${expires}; path=/`;
    }
    
    // Get current language from cookie or use default
    let currentLanguage = getCookie('language') || defaultLanguage;
    
    // Create language selector
    function createLanguageSelector() {
        const nav = document.querySelector('nav ul');
        
        if (nav) {
            const languageSelector = document.createElement('li');
            languageSelector.className = 'language-selector';
            
            const languageDropdown = document.createElement('div');
            languageDropdown.className = 'language-dropdown';
            
            const currentLangButton = document.createElement('button');
            currentLangButton.className = 'current-language';
            currentLangButton.textContent = languages[currentLanguage];
            
            const dropdownContent = document.createElement('div');
            dropdownContent.className = 'dropdown-content';
            
            // Add language options
            Object.keys(languages).forEach(langCode => {
                const langOption = document.createElement('a');
                langOption.href = '#';
                langOption.dataset.lang = langCode;
                langOption.textContent = languages[langCode];
                
                // Add active class to current language
                if (langCode === currentLanguage) {
                    langOption.className = 'active';
                }
                
                // Add click event to change language
                langOption.addEventListener('click', function(e) {
                    e.preventDefault();
                    changeLanguage(langCode);
                });
                
                dropdownContent.appendChild(langOption);
            });
            
            languageDropdown.appendChild(currentLangButton);
            languageDropdown.appendChild(dropdownContent);
            languageSelector.appendChild(languageDropdown);
            
            // Add language selector to navigation
            nav.appendChild(languageSelector);
            
            // Toggle dropdown on click
            currentLangButton.addEventListener('click', function() {
                dropdownContent.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!languageDropdown.contains(e.target)) {
                    dropdownContent.classList.remove('show');
                }
            });
        }
    }
    
    // Function to change language
    function changeLanguage(langCode) {
        if (translations[langCode]) {
            currentLanguage = langCode;
            setCookie('language', langCode, 30); // Save for 30 days
            applyTranslations();
            updateLanguageSelector();
            
            // Actualizar contenido de los mods sin recargar la página
            updateModContent();
        }
    }
    
    // Función para actualizar el contenido de los mods
    function updateModContent() {
        // Actualizar tarjetas de mods en las páginas de juegos
        const path = window.location.pathname;
        
        // Actualizar página de Minecraft
        if (path.includes('minecraft.html')) {
            const searchInput = document.getElementById('mod-search');
            if (searchInput && searchInput.value.trim() === '') {
                const minecraftModsContainer = document.getElementById('minecraft-mods');
                if (minecraftModsContainer) {
                    minecraftModsContainer.innerHTML = '';
                    if (window.modsData && window.modsData.minecraft) {
                        window.modsData.minecraft.forEach(mod => {
                            minecraftModsContainer.appendChild(window.createModCard(mod));
                        });
                    }
                }
            }
        }
        
        // Actualizar página de Sims 4
        if (path.includes('sims4.html')) {
            const searchInput = document.getElementById('mod-search');
            if (searchInput && searchInput.value.trim() === '') {
                const sims4ModsContainer = document.getElementById('sims4-mods');
                if (sims4ModsContainer) {
                    sims4ModsContainer.innerHTML = '';
                    if (window.modsData && window.modsData.sims4) {
                        window.modsData.sims4.forEach(mod => {
                            sims4ModsContainer.appendChild(window.createModCard(mod));
                        });
                    }
                }
            }
        }
        
        // Actualizar página de detalles del mod
        if (path.includes('/mod/')) {
            const urlParams = new URLSearchParams(window.location.search);
            const modId = urlParams.get('id');
            const gameType = urlParams.get('game');
            
            if (modId && gameType && window.modsData && window.modsData[gameType]) {
                const mod = window.modsData[gameType].find(m => m.id === modId);
                if (mod && window.renderModDetails) {
                    window.renderModDetails(mod);
                }
            }
        }
    }
    
    // Update language selector to show current language
    function updateLanguageSelector() {
        const currentLangButton = document.querySelector('.current-language');
        const langOptions = document.querySelectorAll('.dropdown-content a');
        
        if (currentLangButton) {
            currentLangButton.textContent = languages[currentLanguage];
        }
        
        if (langOptions.length) {
            langOptions.forEach(option => {
                if (option.dataset.lang === currentLanguage) {
                    option.className = 'active';
                } else {
                    option.className = '';
                }
            });
        }
    }
    
    // Apply translations based on current language
    function applyTranslations() {
        const lang = translations[currentLanguage];
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage;
        
        // Navigation
        const navLinks = document.querySelectorAll('nav ul li a');
        if (navLinks.length >= 4) {
            navLinks[0].textContent = lang.nav_home;
            navLinks[1].textContent = lang.nav_minecraft;
            navLinks[2].textContent = lang.nav_sims4;
            navLinks[3].textContent = lang.nav_profile;
        }
        
        // Page specific translations
        const path = window.location.pathname;
        
        // Index page
        if (path.endsWith('index.html') || path.endsWith('/')) {
            const welcomeTitle = document.querySelector('.hero h2');
            const welcomeSubtitle = document.querySelector('.hero p');
            const minecraftTitle = document.querySelector('.game-card:nth-child(1) h3');
            const minecraftDesc = document.querySelector('.game-card:nth-child(1) p');
            const sims4Title = document.querySelector('.game-card:nth-child(2) h3');
            const sims4Desc = document.querySelector('.game-card:nth-child(2) p');
            
            if (welcomeTitle) welcomeTitle.textContent = lang.welcome_title;
            if (welcomeSubtitle) welcomeSubtitle.innerHTML = lang.welcome_subtitle;
            if (minecraftTitle) minecraftTitle.textContent = lang.minecraft_card_title;
            if (minecraftDesc) minecraftDesc.textContent = lang.minecraft_card_desc;
            if (sims4Title) sims4Title.textContent = lang.sims4_card_title;
            if (sims4Desc) sims4Desc.textContent = lang.sims4_card_desc;
        }
        
        // Minecraft page
        if (path.includes('minecraft.html')) {
            const title = document.querySelector('.game-header h2');
            const subtitle = document.querySelector('.game-header p');
            const searchInput = document.querySelector('#mod-search');
            
            if (title) title.textContent = lang.minecraft_title;
            if (subtitle) subtitle.textContent = lang.minecraft_subtitle;
            if (searchInput) searchInput.placeholder = lang.search_placeholder;
        }
        
        // Sims 4 page
        if (path.includes('sims4.html')) {
            const title = document.querySelector('.game-header h2');
            const subtitle = document.querySelector('.game-header p');
            const searchInput = document.querySelector('#mod-search');
            
            if (title) title.textContent = lang.sims4_title;
            if (subtitle) subtitle.textContent = lang.sims4_subtitle;
            if (searchInput) searchInput.placeholder = lang.search_placeholder;
        }
        
        // Mod details page
        if (path.includes('/mod/')) {
            const backButton = document.querySelector('#back-link');
            const title = document.querySelector('title');
            
            if (backButton) {
                backButton.innerHTML = `<i class="fas fa-arrow-left"></i> ${lang.back_button}`;
            }
            if (title) {
                title.textContent = `WikiModsATK - ${lang.mod_details_title}`;
            }
        }
        
        // Footer
        const footer = document.querySelector('footer p');
        if (footer) {
            footer.textContent = lang.footer_text;
        }
    }
    
    // Initialize language selector and apply translations
    createLanguageSelector();
    applyTranslations();
});