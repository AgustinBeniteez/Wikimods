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
    window.renderModDetails(mod);
    
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

// Función para renderizar los detalles del mod (expuesta globalmente)
window.renderModDetails = function(mod) {
    const modContent = document.getElementById('mod-content');
    if (!modContent) return;
    
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
    
    // Obtener el idioma actual
    const currentLang = getCurrentLanguage();
    
    // Usar una imagen de placeholder si no hay imagen principal
    const mainImageUrl = mod.mainImage || `../img/${mod.game}/placeholder.svg`;
    
    // Obtener textos según el idioma
    const descriptionTitle = currentLang === 'es' ? 'Descripción' : 'Description';
    const featuresTitle = currentLang === 'es' ? 'Características principales' : 'Main Features';
    const creationDateText = currentLang === 'es' ? 'Fecha de creación' : 'Creation Date';
    
    // Obtener la descripción y características en el idioma actual o usar el primer idioma disponible
    const description = mod.description[currentLang] || mod.description[Object.keys(mod.description)[0]];
    const features = mod.features[currentLang] || mod.features[Object.keys(mod.features)[0]];
    
    // Crear el HTML para los detalles del mod
    let modHTML = `
        <div class="mod-header">
            <div class="mod-header-image" style="background-image: url('${mainImageUrl}');"></div>
            <div class="mod-header-overlay">
                <h2>${mod.name}</h2>
                ${mod.repositoryUrl ? `<a href="${mod.repositoryUrl}" target="_blank" class="repository-button"><i class="fab fa-github"></i> ${currentLang === 'es' ? 'Repositorio' : 'Repository'}</a>` : ''}
                <div class="mod-meta">
                    <span><i class="fas fa-user"></i> ${mod.author}</span>
                    <span><i class="fas fa-code-branch"></i> ${mod.versions ? mod.versions[0] : 'N/A'}</span>
                    <span><i class="fas fa-download"></i> ${mod.downloadCount}</span>
                    <span><i class="fas fa-calendar-alt"></i> ${creationDateText}: ${mod.creationDate}</span>
                </div>
            </div>
        </div>
        <div class="mod-body">
            <div class="mod-description">
                <h3>${descriptionTitle}</h3>
                <p>${description}</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">${featuresTitle}</h4>
                <ul style="padding-left: 1.5rem;">
                    ${features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
    `;
    
    // Añadir galería si hay imágenes
    if (mod.gallery && mod.gallery.length > 0) {
        // Texto de la galería según el idioma
        const galleryTitle = currentLang === 'es' ? 'Galería' : 'Gallery';
        
        modHTML += `
            <div class="mod-gallery">
                <h3>${galleryTitle}</h3>
                <div class="gallery-grid">
                    ${mod.gallery.map(img => `
                        <div class="gallery-item" style="background-image: url('${img}');" data-img="${img}"></div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Añadir sección de ítems y recetas si existen
    if (mod.items && mod.items.length > 0) {
        // Textos según el idioma
        const itemsTitle = currentLang === 'es' ? 'Ítems del Mod' : 'Mod Items';
        const recipeTitle = currentLang === 'es' ? 'Receta de Crafteo' : 'Crafting Recipe';
        const ingredientsTitle = currentLang === 'es' ? 'Ingredientes' : 'Ingredients';
        const resultTitle = currentLang === 'es' ? 'Resultado' : 'Result';
        
        modHTML += `
            <div class="mod-items">
                <h3>${itemsTitle}</h3>
                <div class="items-grid">
        `;
        
        // Añadir cada ítem con su receta
        mod.items.forEach(item => {
            // Obtener la descripción en el idioma actual o usar el primer idioma disponible
            const itemDescription = item.description[currentLang] || item.description[Object.keys(item.description)[0]];
            
            modHTML += `
                <div class="item-card">
                    <div class="item-header">
                        <div class="item-image" style="background-image: url('${item.image}');"></div>
                        <h4>${item.name}</h4>
                    </div>
                    <div class="item-description">
                        <p>${itemDescription}</p>
                    </div>
                    <div class="item-recipe">
                        <h5>${recipeTitle}</h5>
                        <div class="recipe-container">
                            <div class="recipe-grid">
            `;
            
            // Añadir el patrón de crafteo
            if (item.recipe && item.recipe.pattern) {
                item.recipe.pattern.forEach(row => {
                    modHTML += '<div class="recipe-row">';
                    for (let i = 0; i < row.length; i++) {
                        const cell = row[i];
                        if (cell === ' ') {
                            modHTML += '<div class="recipe-cell empty"></div>';
                        } else {
                            const ingredient = item.recipe.key[cell];
                            
                            // Función para normalizar nombres de ingredientes a nombres de archivos
                            function normalizeIngredientName(name) {
                                // Mapeo de nombres comunes en español a nombres de archivos en inglés
                                const nameMapping = {
                                    // Materiales básicos
                                    'lingote de hierro': 'iron_ingot',
                                    'lingote de oro': 'gold_ingot',
                                    'redstone': 'redstone',
                                    'polvo de redstone': 'redstone',
                                    'diamante': 'diamond',
                                    'vidrio': 'glass',
                                    'madera': 'oak_planks',
                                    'tablones de madera': 'oak_planks',
                                    'tablones de abedul': 'birch_planks',
                                    'tablones de madera de abedul': 'birch_planks',
                                    'tablones oscuros': 'dark_oak_planks',
                                    'tablones de madera oscura': 'dark_oak_planks',
                                    'piedra': 'stone',
                                    'cuarzo': 'quartz',
                                    'bloque de cuarzo': 'quartz_block',
                                    'lana': 'white_wool',
                                    'lana blanca': 'white_wool',
                                    'lana roja': 'red_wool',
                                    'cuero': 'leather',
                                    'papel': 'paper',
                                    'libro': 'book',
                                    'caña de azúcar': 'sugar_cane',
                                    'azúcar': 'sugar',
                                    'huevo': 'egg',
                                    'leche': 'milk_bucket',
                                    'balde de leche': 'milk_bucket',
                                    'agua': 'water_bucket',
                                    'balde de agua': 'water_bucket',
                                    'lava': 'lava_bucket',
                                    'balde de lava': 'lava_bucket',
                                    'balde': 'bucket',
                                    'carbón': 'coal',
                                    'carbón vegetal': 'charcoal',
                                    'antorcha': 'torch',
                                    'redstone_torch': 'redstone_torch',
                                    'antorcha de piedra luminosa': 'glowstone',
                                    'piedra luminosa': 'glowstone',
                                    'polvo de piedra luminosa': 'glowstone_dust',
                                    
                                    // Tintes
                                    'tinte rojo': 'red_dye',
                                    'tinte azul': 'blue_dye',
                                    'tinte verde': 'green_dye',
                                    'tinte amarillo': 'yellow_dye',
                                    'tinte negro': 'black_dye',
                                    'tinte blanco': 'white_dye',
                                    'tinte gris': 'gray_dye',
                                    'tinte gris claro': 'light_gray_dye',
                                    'tinte rosa': 'pink_dye',
                                    'tinte naranja': 'orange_dye',
                                    'tinte cian': 'cyan_dye',
                                    'tinte magenta': 'magenta_dye',
                                    'tinte lima': 'lime_dye',
                                    'tinte morado': 'purple_dye',
                                    'tinte marrón': 'brown_dye',
                                    'tinte cualquier color': 'red_dye', // Placeholder genérico
                                    
                                    // Componentes de redstone
                                    'repetidor': 'repeater',
                                    'comparador': 'comparator',
                                    'pistón': 'piston',
                                    'pistón pegajoso': 'sticky_piston',
                                    'tolva': 'hopper',
                                    'dispensador': 'dispenser',
                                    'soltador': 'dropper',
                                    'observador': 'observer',
                                    'bloque de redstone': 'redstone_block',
                                    'bloque de hierro': 'block/iron_block',
                                    
                                    // Otros
                                    'pipe': 'indexer_pipeitem',
                                    'cofre': 'chest',
                                    'cofre de ender': 'ender_chest',
                                    'barril': 'barrel',
                                    'mesa de crafteo': 'crafting_table',
                                    'horno': 'furnace',
                                    'yunque': 'anvil',
                                    'telar': 'loom',
                                    'caldero': 'cauldron',
                                    'campana': 'bell',
                                    'cama': 'white_bed',
                                    'puerta': 'oak_door',
                                    'puerta de hierro': 'iron_door',
                                    'cartel': 'oak_sign',
                                    'escalera': 'oak_stairs',
                                    'valla': 'oak_fence',
                                    'valla de hierro': 'iron_bars',
                                    'cristal tintado': 'black_stained_glass',
                                    'cristal': 'glass',
                                    'botón': 'oak_button',
                                    'botón de piedra': 'stone_button',
                                    'placa de presión': 'oak_pressure_plate',
                                    'placa de presión de piedra': 'stone_pressure_plate',
                                    'placa de presión ligera': 'light_weighted_pressure_plate',
                                    'placa de presión pesada': 'heavy_weighted_pressure_plate',
                                    'lámpara de redstone': 'redstone_lamp',
                                    'nota musical': 'note_block',
                                    'bloque de notas': 'note_block',
                                    'tnt': 'tnt',
                                    'dinamita': 'tnt',
                                    'riel': 'rail',
                                    'riel activador': 'activator_rail',
                                    'riel detector': 'detector_rail',
                                    'riel propulsor': 'powered_rail',
                                    'vagoneta': 'minecart',
                                    'vagoneta con cofre': 'chest_minecart',
                                    'vagoneta con tolva': 'hopper_minecart',
                                    'vagoneta con horno': 'furnace_minecart',
                                    'vagoneta con tnt': 'tnt_minecart',
                                    'brújula': 'compass',
                                    'reloj': 'clock',
                                    'mapa': 'map',
                                    'mapa vacío': 'map',
                                    'ojo de ender': 'ender_eye',
                                    'perla de ender': 'ender_pearl',
                                    'barra de blaze': 'blaze_rod',
                                    'polvo de blaze': 'blaze_powder',
                                    'lágrima de ghast': 'ghast_tear',
                                    'ojo de araña': 'spider_eye',
                                    'ojo de araña fermentado': 'fermented_spider_eye',
                                    'hueso': 'bone',
                                    'polvo de hueso': 'bone_meal',
                                    'carne podrida': 'rotten_flesh',
                                    'pólvora': 'gunpowder',
                                    'hilo': 'string',
                                    'pluma': 'feather',
                                    'caparazón de shulker': 'shulker_shell',
                                    'membrana de phantom': 'phantom_membrane',
                                    'estrella del nether': 'nether_star',
                                    'corazón del mar': 'heart_of_the_sea',
                                    'concha de nautilus': 'nautilus_shell',
                                    'fragmento de netherita': 'netherite_scrap',
                                    'lingote de netherita': 'netherite_ingot',
                                    'mejora de velocidad': 'transfer_speed_upgrade_basic',
                                    'mejora de velocidad básica': 'transfer_speed_upgrade_basic',
                                    'mejora de velocidad avanzada': 'transfer_speed_upgrade_advanced',
                                    'mejora de velocidad élite': 'transfer_speed_upgrade_elite',
                                    'upgrade basic': 'transfer_speed_upgrade_basic',
                                    'upgrade advanced': 'transfer_speed_upgrade_advanced',
                                    'controlador indexer': 'indexer_controller_top',
                                    'craft controller': 'indexer_controller_top',
                                    'conector indexer': 'indexer_connector_front',
                                    'craft connectors': 'indexer_connector_front',
                                    'tubería indexer': 'indexer_pipeitem',
                                    'craft pipes': 'indexer_pipeitem',
                                    'dropbox': 'drop_box',
                                    'craft dropbox': 'drop_box',
                                    'manual de indexer': 'indexer_manual',
                                    'escama de tortuga': 'scute',
                                    'cristal de amatista': 'amethyst_shard',
                                    'fragmento de eco': 'echo_shard',
                                    'fragmento de disco': 'disc_fragment_5',
                                    'aliento de dragón': 'dragon_breath',
                                    'totem de la inmortalidad': 'totem_of_undying',
                                    'corazón de cristal': 'end_crystal',
                                    'botella de experiencia': 'experience_bottle',
                                    'frasco de experiencia': 'experience_bottle',
                                    'frasco de dragón': 'dragon_breath',
                                    'frasco': 'glass_bottle',
                                    'botella': 'glass_bottle',
                                    'botella de vidrio': 'glass_bottle',
                                    'frasco de vidrio': 'glass_bottle',
                                    'poción': 'potion',
                                    'poción arrojadiza': 'splash_potion',
                                    'poción persistente': 'lingering_potion',
                                    'flecha': 'arrow',
                                    'flecha espectral': 'spectral_arrow',
                                    'flecha de poción': 'tipped_arrow_base',
                                    'arco': 'bow',
                                    'ballesta': 'crossbow',
                                    'tridente': 'trident',
                                    'escudo': 'shield',
                                    'elytra': 'elytra',
                                    'fuegos artificiales': 'firework_rocket',
                                    'cohete': 'firework_rocket',
                                    'estrella de fuegos artificiales': 'firework_star',
                                    'bola de fuego': 'fire_charge',
                                    'bola de slime': 'slime_ball',
                                    'crema de magma': 'magma_cream',
                                    'bloque de slime': 'slime_block',
                                    'bloque de miel': 'honey_block',
                                    'panal de miel': 'honeycomb',
                                    'botella de miel': 'honey_bottle',
                                    'frasco de miel': 'honey_bottle',
                                    'saco de mochila': 'bundle',
                                    'mochila': 'bundle',
                                    'alga marina': 'seagrass',
                                    'alga': 'seagrass',
                                    'kelp': 'kelp',
                                    'kelp seco': 'dried_kelp',
                                    'pepino de mar': 'sea_pickle',
                                    'coral': 'tube_coral',
                                    'abanico de coral': 'tube_coral_fan',
                                    'bloque de coral': 'tube_coral_block',
                                    'caña': 'sugar_cane',
                                    'bambú': 'bamboo',
                                    'cactus': 'cactus',
                                    'hongos': 'brown_mushroom',
                                    'hongo rojo': 'red_mushroom',
                                    'hongo marrón': 'brown_mushroom',
                                    'hongo carmesí': 'crimson_fungus',
                                    'hongo distorsionado': 'warped_fungus',
                                    'seta': 'brown_mushroom',
                                    'flor': 'poppy',
                                    'rosa': 'poppy',
                                    'diente de león': 'dandelion',
                                    'orquídea': 'blue_orchid',
                                    'tulipán': 'red_tulip',
                                    'margarita': 'oxeye_daisy',
                                    'girasol': 'sunflower',
                                    'lila': 'lilac',
                                    'peonía': 'peony',
                                    'rosa arbustiva': 'rose_bush',
                                    'helecho': 'fern',
                                    'hierba': 'grass',
                                    'semillas': 'wheat_seeds',
                                    'semillas de trigo': 'wheat_seeds',
                                    'semillas de calabaza': 'pumpkin_seeds',
                                    'semillas de melón': 'melon_seeds',
                                    'semillas de remolacha': 'beetroot_seeds',
                                    'trigo': 'wheat',
                                    'zanahoria': 'carrot',
                                    'patata': 'potato',
                                    'papa': 'potato',
                                    'remolacha': 'beetroot',
                                    'calabaza': 'pumpkin',
                                    'melón': 'melon',
                                    'coco de cacao': 'cocoa_beans',
                                    'bayas dulces': 'sweet_berries',
                                    'bayas brillantes': 'glow_berries',
                                    'manzana': 'apple',
                                    'manzana dorada': 'golden_apple',
                                    'manzana encantada': 'enchanted_golden_apple',
                                    'zanahoria dorada': 'golden_carrot',
                                    'pan': 'bread',
                                    'galleta': 'cookie',
                                    'pastel': 'cake',
                                    'tarta de calabaza': 'pumpkin_pie',
                                    'sopa de champiñones': 'mushroom_stew',
                                    'sopa de remolacha': 'beetroot_soup',
                                    'estofado de conejo': 'rabbit_stew',
                                    'pescado': 'cod',
                                    'salmón': 'salmon',
                                    'pez globo': 'pufferfish',
                                    'pez tropical': 'tropical_fish',
                                    'cubo con pescado': 'cod_bucket',
                                    'cubo con salmón': 'salmon_bucket',
                                    'cubo con pez globo': 'pufferfish_bucket',
                                    'cubo con pez tropical': 'tropical_fish_bucket',
                                    'cubo con axolotl': 'axolotl_bucket',
                                    'cubo con renacuajo': 'tadpole_bucket',
                                    'pescado cocinado': 'cooked_cod',
                                    'salmón cocinado': 'cooked_salmon',
                                    'carne': 'beef',
                                    'carne de res': 'beef',
                                    'carne de cerdo': 'porkchop',
                                    'carne de pollo': 'chicken',
                                    'carne de conejo': 'rabbit',
                                    'carne de cordero': 'mutton',
                                    'carne de res cocinada': 'cooked_beef',
                                    'carne de cerdo cocinada': 'cooked_porkchop',
                                    'carne de pollo cocinada': 'cooked_chicken',
                                    'carne de conejo cocinada': 'cooked_rabbit',
                                    'carne de cordero cocinada': 'cooked_mutton',
                                    'filete': 'cooked_beef',
                                    'chuleta': 'cooked_porkchop',
                                    'patata cocinada': 'baked_potato',
                                    'papa cocinada': 'baked_potato',
                                    'patata venenosa': 'poisonous_potato',
                                    'papa venenosa': 'poisonous_potato',
                                    'coro': 'chorus_fruit',
                                    'fruta de coro': 'chorus_fruit',
                                    'fruta de coro explotada': 'popped_chorus_fruit',
                                    'coro explotado': 'popped_chorus_fruit',
                                    'cuenco': 'bowl',
                                    'tazón': 'bowl',
                                    'caña con zanahoria': 'carrot_on_a_stick',
                                    'caña con hongo': 'warped_fungus_on_a_stick',
                                    'armadura de cuero': 'leather_chestplate',
                                    'armadura de cadenas': 'chainmail_chestplate',
                                    'armadura de hierro': 'iron_chestplate',
                                    'armadura de oro': 'golden_chestplate',
                                    'armadura de diamante': 'diamond_chestplate',
                                    'armadura de netherita': 'netherite_chestplate',
                                    'casco de cuero': 'leather_helmet',
                                    'casco de cadenas': 'chainmail_helmet',
                                    'casco de hierro': 'iron_helmet',
                                    'casco de oro': 'golden_helmet',
                                    'casco de diamante': 'diamond_helmet',
                                    'casco de netherita': 'netherite_helmet',
                                    'pechera de cuero': 'leather_chestplate',
                                    'pechera de cadenas': 'chainmail_chestplate',
                                    'pechera de hierro': 'iron_chestplate',
                                    'pechera de oro': 'golden_chestplate',
                                    'pechera de diamante': 'diamond_chestplate',
                                    'pechera de netherita': 'netherite_chestplate',
                                    'pantalones de cuero': 'leather_leggings',
                                    'pantalones de cadenas': 'chainmail_leggings',
                                    'pantalones de hierro': 'iron_leggings',
                                    'pantalones de oro': 'golden_leggings',
                                    'pantalones de diamante': 'diamond_leggings',
                                    'pantalones de netherita': 'netherite_leggings',
                                    'botas de cuero': 'leather_boots',
                                    'botas de cadenas': 'chainmail_boots',
                                    'botas de hierro': 'iron_boots',
                                    'botas de oro': 'golden_boots',
                                    'botas de diamante': 'diamond_boots',
                                    'botas de netherita': 'netherite_boots',
                                    'espada de madera': 'wooden_sword',
                                    'espada de piedra': 'stone_sword',
                                    'espada de hierro': 'iron_sword',
                                    'espada de oro': 'golden_sword',
                                    'espada de diamante': 'diamond_sword',
                                    'espada de netherita': 'netherite_sword',
                                    'pico de madera': 'wooden_pickaxe',
                                    'pico de piedra': 'stone_pickaxe',
                                    'pico de hierro': 'iron_pickaxe',
                                    'pico de oro': 'golden_pickaxe',
                                    'pico de diamante': 'diamond_pickaxe',
                                    'pico de netherita': 'netherite_pickaxe',
                                    'hacha de madera': 'wooden_axe',
                                    'hacha de piedra': 'stone_axe',
                                    'hacha de hierro': 'iron_axe',
                                    'hacha de oro': 'golden_axe',
                                    'hacha de diamante': 'diamond_axe',
                                    'hacha de netherita': 'netherite_axe',
                                    'pala de madera': 'wooden_shovel',
                                    'pala de piedra': 'stone_shovel',
                                    'pala de hierro': 'iron_shovel',
                                    'pala de oro': 'golden_shovel',
                                    'pala de diamante': 'diamond_shovel',
                                    'pala de netherita': 'netherite_shovel',
                                    'azada de madera': 'wooden_hoe',
                                    'azada de piedra': 'stone_hoe',
                                    'azada de hierro': 'iron_hoe',
                                    'azada de oro': 'golden_hoe',
                                    'azada de diamante': 'diamond_hoe',
                                    'azada de netherita': 'netherite_hoe',
                                    'tijeras': 'shears',
                                    'mechero': 'flint_and_steel',
                                    'encendedor': 'flint_and_steel',
                                    'pedernal y acero': 'flint_and_steel',
                                    'pedernal': 'flint',
                                    'sílex': 'flint',
                                    'caña de pescar': 'fishing_rod',
                                    'brújula de recuperación': 'recovery_compass',
                                    'catalejo': 'spyglass',
                                    'libro encantado': 'enchanted_book',
                                    'libro y pluma': 'writable_book',
                                    'libro escrito': 'written_book',
                                    'libro de conocimiento': 'knowledge_book',
                                    'frame': 'item_frame',
                                    'glow_frame': 'glow_item_frame',
                                    'pintura': 'painting',
                                    'armadura de montar': 'saddle',
                                    'montura': 'saddle',
                                    'armadura de caballo de cuero': 'leather_horse_armor',
                                    'armadura de caballo de hierro': 'iron_horse_armor',
                                    'armadura de caballo de oro': 'golden_horse_armor',
                                    'armadura de caballo de diamante': 'diamond_horse_armor',
                                    'nombre': 'name_tag',
                                    'etiqueta': 'name_tag',
                                    'etiqueta de nombre': 'name_tag',
                                    'correa': 'lead',
                                    'cuerda': 'lead',
                                    'soporte de armadura': 'armor_stand',
                                    'casco de tortuga': 'turtle_helmet',
                                    'huevo de tortuga': 'turtle_egg',
                                    'huevo de araña': 'spider_egg',
                                    'huevo de sniffer': 'sniffer_egg',
                                    'disco de música': 'music_disc_13',
                                    'disco': 'music_disc_13',
                                    'disco de música 13': 'music_disc_13',
                                    'disco de música cat': 'music_disc_cat',
                                    'disco de música blocks': 'music_disc_blocks',
                                    'disco de música chirp': 'music_disc_chirp',
                                    'disco de música far': 'music_disc_far',
                                    'disco de música mall': 'music_disc_mall',
                                    'disco de música mellohi': 'music_disc_mellohi',
                                    'disco de música stal': 'music_disc_stal',
                                    'disco de música strad': 'music_disc_strad',
                                    'disco de música ward': 'music_disc_ward',
                                    'disco de música 11': 'music_disc_11',
                                    'disco de música wait': 'music_disc_wait',
                                    'disco de música pigstep': 'music_disc_pigstep',
                                    'disco de música otherside': 'music_disc_otherside',
                                    'disco de música 5': 'music_disc_5',
                                    'disco de música relic': 'music_disc_relic',
                                    'patrón de banner': 'flower_banner_pattern',
                                    'patrón de banner de flor': 'flower_banner_pattern',
                                    'patrón de banner de creeper': 'creeper_banner_pattern',
                                    'patrón de banner de calavera': 'skull_banner_pattern',
                                    'patrón de banner de globo': 'globe_banner_pattern',
                                    'patrón de banner de mojang': 'mojang_banner_pattern',
                                    'patrón de banner de piglin': 'piglin_banner_pattern',
                                    'fragmento de cerámica': 'pottery_sherd',
                                    'fragmento de cerámica de arquero': 'archer_pottery_sherd',
                                    'fragmento de cerámica de brazos levantados': 'arms_up_pottery_sherd',
                                    'fragmento de cerámica de hoja': 'blade_pottery_sherd',
                                    'fragmento de cerámica de cervecero': 'brewer_pottery_sherd',
                                    'fragmento de cerámica de quemadura': 'burn_pottery_sherd',
                                    'fragmento de cerámica de peligro': 'danger_pottery_sherd',
                                    'fragmento de cerámica de explorador': 'explorer_pottery_sherd',
                                    'fragmento de cerámica de amigo': 'friend_pottery_sherd',
                                    'fragmento de cerámica de corazón': 'heart_pottery_sherd',
                                    'fragmento de cerámica de corazón roto': 'heartbreak_pottery_sherd',
                                    'fragmento de cerámica de aullido': 'howl_pottery_sherd',
                                    'fragmento de cerámica de minero': 'miner_pottery_sherd',
                                    'fragmento de cerámica de doliente': 'mourner_pottery_sherd',
                                    'fragmento de cerámica de abundancia': 'plenty_pottery_sherd',
                                    'fragmento de cerámica de premio': 'prize_pottery_sherd',
                                    'fragmento de cerámica de gavilla': 'sheaf_pottery_sherd',
                                    'fragmento de cerámica de refugio': 'shelter_pottery_sherd',
                                    'fragmento de cerámica de calavera': 'skull_pottery_sherd',
                                    'fragmento de cerámica de resoplido': 'snort_pottery_sherd',
                                    'plantilla de herrería': 'smithing_template',
                                    'plantilla de herrería de armadura': 'armor_trim_smithing_template',
                                    'plantilla de herrería de netherita': 'netherite_upgrade_smithing_template',
                                    'plantilla de herrería de armadura de costa': 'coast_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de duna': 'dune_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de ojo': 'eye_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de anfitrión': 'host_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de costilla': 'rib_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de centinela': 'sentry_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de moldeador': 'shaper_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de silencio': 'silence_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de hocico': 'snout_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de aguja': 'spire_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de marea': 'tide_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de vex': 'vex_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de guardián': 'ward_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de explorador': 'wayfinder_armor_trim_smithing_template',
                                    'plantilla de herrería de armadura de salvaje': 'wild_armor_trim_smithing_template',
                                    'cuerno de cabra': 'goat_horn',
                                    'cepillo': 'brush',
                                    'olla de flores': 'flower_pot',
                                    'maceta': 'flower_pot',
                                    'campana': 'bell',
                                    'linterna': 'lantern',
                                    'linterna de almas': 'soul_lantern',
                                    'hoguera': 'campfire',
                                    'fogata': 'campfire',
                                    'hoguera de almas': 'soul_campfire',
                                    'fogata de almas': 'soul_campfire',
                                    'vela': 'candle',
                                    'vela blanca': 'white_candle',
                                    'vela naranja': 'orange_candle',
                                    'vela magenta': 'magenta_candle',
                                    'vela azul claro': 'light_blue_candle',
                                    'vela amarilla': 'yellow_candle',
                                    'vela lima': 'lime_candle',
                                    'vela rosa': 'pink_candle',
                                    'vela gris': 'gray_candle',
                                    'vela gris claro': 'light_gray_candle',
                                    'vela cian': 'cyan_candle',
                                    'vela morada': 'purple_candle',
                                    'vela azul': 'blue_candle',
                                    'vela marrón': 'brown_candle',
                                    'vela verde': 'green_candle',
                                    'vela roja': 'red_candle',
                                    'vela negra': 'black_candle',
                                    'cadena': 'chain',
                                    'luz': 'light',
                                    'barrera': 'barrier',
                                    'comando': 'command_block',
                                    'bloque de comandos': 'command_block',
                                    'estructura': 'structure_block',
                                    'bloque de estructura': 'structure_block',
                                    'vacío de estructura': 'structure_void',
                                    'jigsaw': 'jigsaw',
                                    'bloque de jigsaw': 'jigsaw',
                                    'luz de depuración': 'light',
                                    'barco': 'oak_boat',
                                    'barco de roble': 'oak_boat',
                                    'barco de abeto': 'spruce_boat',
                                    'barco de abedul': 'birch_boat',
                                    'barco de jungla': 'jungle_boat',
                                    'barco de acacia': 'acacia_boat',
                                    'barco de roble oscuro': 'dark_oak_boat',
                                    'barco de manglares': 'mangrove_boat',
                                    'barco de cerezo': 'cherry_boat',
                                    'barco de bambú': 'bamboo_raft',
                                    'balsa de bambú': 'bamboo_raft',
                                    'barco con cofre': 'oak_chest_boat',
                                    'barco de roble con cofre': 'oak_chest_boat',
                                    'barco de abeto con cofre': 'spruce_chest_boat',
                                    'barco de abedul con cofre': 'birch_chest_boat',
                                    'barco de jungla con cofre': 'jungle_chest_boat',
                                    'barco de acacia con cofre': 'acacia_chest_boat',
                                    'barco de roble oscuro con cofre': 'dark_oak_chest_boat',
                                    'barco de manglares con cofre': 'mangrove_chest_boat',
                                    'barco de cerezo con cofre': 'cherry_chest_boat',
                                    'barco de bambú con cofre': 'bamboo_chest_raft',
                                    'balsa de bambú con cofre': 'bamboo_chest_raft',
                                    'bola de nieve': 'snowball',
                                    'huevo arrojadizo': 'egg',
                                    'cabeza': 'skeleton_skull',
                                    'cabeza de esqueleto': 'skeleton_skull',
                                    'cabeza de wither': 'wither_skeleton_skull',
                                    'cabeza de zombi': 'zombie_head',
                                    'cabeza de creeper': 'creeper_head',
                                    'cabeza de dragón': 'dragon_head',
                                    'cabeza de jugador': 'player_head',
                                    'cabeza de piglin': 'piglin_head',
                                    'huevo de aparición': 'spawn_egg',
                                    'huevo generador': 'spawn_egg',
                                    'tinte': 'white_dye',
                                    'colorante': 'white_dye',
                                    'saco de tinte': 'white_dye',
                                    'lingote': 'iron_ingot',
                                    'pepita': 'gold_nugget',
                                    'pepita de oro': 'gold_nugget',
                                    'pepita de hierro': 'iron_nugget',
                                    'lingote de cobre': 'copper_ingot',
                                    'cobre crudo': 'raw_copper',
                                    'hierro crudo': 'raw_iron',
                                    'oro crudo': 'raw_gold',
                                    'ladrillo': 'brick',
                                    'ladrillo de piedra': 'stone_brick',
                                    'ladrillo de piedra del end': 'end_stone_brick',
                                    'ladrillo de piedra del nether': 'nether_brick',
                                    'ladrillo del nether': 'nether_brick',
                                    'ladrillo de barro': 'mud_brick',
                                    'bola de arcilla': 'clay_ball',
                                    'bola de lodo': 'mud_ball',
                                    'bola de nieve': 'snowball',
                                    'bola de slime': 'slime_ball',
                                    'bola de magma': 'magma_cream',
                                    'fragmento de prismarino': 'prismarine_shard',
                                    'cristal de prismarino': 'prismarine_crystals',
                                    'tinta': 'ink_sac',
                                    'saco de tinta': 'ink_sac',
                                    'tinta brillante': 'glow_ink_sac',
                                    'saco de tinta brillante': 'glow_ink_sac',
                                    'pétalo rosa': 'pink_petals',
                                    'planta de jarra': 'pitcher_plant',
                                    'vaina de jarra': 'pitcher_pod',
                                    'semillas de flor antorcha': 'torchflower_seeds',
                                    'propagación de manglares': 'mangrove_propagule',
                                    'brotes del nether': 'nether_sprouts',
                                    'piedra de goteo': 'pointed_dripstone',
                                    'estalactita': 'pointed_dripstone',
                                    'estalagmita': 'pointed_dripstone',
                                    'nieve en polvo': 'powder_snow_bucket',
                                    'cubo de nieve en polvo': 'powder_snow_bucket',
                                    'balde de nieve en polvo': 'powder_snow_bucket',
                                    'luz': 'light_block',
                                    'bloque de luz': 'light_block',
                                    'decorador': 'debug_stick',
                                    'palo de depuración': 'debug_stick',
                                    'palo': 'stick',
                                    'vara': 'stick',
                                    'bloque de comandos': 'command_block',
                                    'bloque de comandos en cadena': 'chain_command_block',
                                    'bloque de comandos repetitivo': 'repeating_command_block',
                                    'bloque de barrera': 'barrier',
                                    'bloque de estructura': 'structure_block',
                                    'bloque de estructura de carga': 'structure_block',
                                    'bloque de estructura de guardado': 'structure_block',
                                    'bloque de estructura de esquina': 'structure_block',
                                    'bloque de estructura de datos': 'structure_block',
                                    'bloque de jigsaw': 'jigsaw',
                                    'bloque de vacío de estructura': 'structure_void',
                                    'bloque de luz': 'light',
                                    'bloque de depuración': 'debug_stick',
                                    'bloque de información': 'info_update',
                                    'bloque de actualización': 'info_update',
                                    'bloque de actualización 2': 'info_update2',
                                    'bloque de información 2': 'info_update2',
                                    'bloque desconocido': 'unknown',
                                    'bloque sin textura': 'missing_texture',
                                    'textura faltante': 'missing_texture',
                                    'bloque de textura faltante': 'missing_texture',
                                    'bloque de error': 'missing_texture',
                                    'bloque de error de textura': 'missing_texture',
                                    'bloque negro y morado': 'missing_texture',
                                    'bloque negro y rosa': 'missing_texture'
                                };
                                
                                // Convertir a minúsculas para la búsqueda
                                const lowerName = name.toLowerCase();
                                
                                // Buscar en el mapeo
                                if (nameMapping[lowerName]) {
                                    return nameMapping[lowerName];
                                }
                                
                                // Si no se encuentra en el mapeo, normalizar el nombre
                                return lowerName
                                    .replace(/\s+/g, '_')        // Reemplazar espacios con guion bajo
                                    .replace(/[^\w\_]+/g, '')    // Eliminar caracteres especiales
                                    .replace(/\_\_+/g, '_')       // Reemplazar múltiples guiones bajos con uno solo
                                    .replace(/^_+/, '')           // Eliminar guiones bajos del inicio
                                    .replace(/_+$/, '');          // Eliminar guiones bajos del final
                            }
                            
                            // Obtener el nombre normalizado del ingrediente para la imagen
                            const ingredientImageName = normalizeIngredientName(ingredient);
                            
                            // Lista de ítems que están en la carpeta block
                            const blockItems = ['redstone_torch', 'torch', 'repeater', 'comparator', 'hopper', 'chest', 'furnace', 'dispenser', 'dropper', 'observer', 'piston', 'sticky_piston', 'lever', 'button', 'pressure_plate', 'daylight_detector', 'tripwire_hook', 'trapped_chest', 'bell', 'lantern', 'soul_lantern', 'campfire', 'soul_campfire', 'candle', 'chain'];
                            
                            // Comprobar si el ítem está en la carpeta block
                            let ingredientImagePath;
                            if (blockItems.includes(ingredientImageName)) {
                                ingredientImagePath = `../img/minecraft/item/block/${ingredientImageName}.png`;
                            } else {
                                ingredientImagePath = `../img/minecraft/item/${ingredientImageName}.png`;
                            }
                            
                            // Usar la imagen del ingrediente en lugar de la letra
                            modHTML += `<div class="recipe-cell" title="${ingredient}">
                                <div class="ingredient-image" style="background-image: url('${ingredientImagePath}'), url('../img/placeholder.svg');"></div>
                            </div>`;
                        }
                    }
                    modHTML += '</div>';
                });
            }
            
            modHTML += `
                            </div>
                            <div class="recipe-arrow">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="recipe-result">
                                <div class="result-item">
                                    <div class="ingredient-image" style="background-image: url('${item.image}');"></div>
                                    <div class="result-quantity">${item.recipe.result.split(' ')[0]}</div>
                                </div>
                            </div>
                        </div>
                        <div class="recipe-key">
                            <h6>${ingredientsTitle}:</h6>
                            <ul>
            `;
            
            // Añadir la leyenda de ingredientes
            if (item.recipe && item.recipe.key) {
                for (const [key, value] of Object.entries(item.recipe.key)) {
                    modHTML += `<li><strong>${key}:</strong> ${value}</li>`;
                }
            }
            
            modHTML += `
                            </ul>
                            <h6>${resultTitle}:</h6>
                            <p>${item.recipe.result.split(' ')[0]} ${item.name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        modHTML += `
                </div>
            </div>
        `;
    }
    
    // Añadir sección de descarga
    // Texto del botón según el idioma
    const downloadText = currentLang === 'es' ? 'Descargar desde CurseForge' : 'Download from CurseForge';
    const downloadTitle = currentLang === 'es' ? `Descargar ${mod.name}` : `Download ${mod.name}`;
    const versionsText = currentLang === 'es' ? 
        `Versiones disponibles para ${mod.game === 'minecraft' ? 'Minecraft' : 'Sims 4'}:` : 
        `Available versions for ${mod.game === 'minecraft' ? 'Minecraft' : 'Sims 4'}:`;
    
    modHTML += `
            <div class="mod-download">
                <div class="mod-download-info">
                    <h3>${downloadTitle}</h3>
                    <p>${versionsText}</p>
                    <div class="version-list">
                        ${mod.versions ? mod.versions.map(version => `<span class="version-tag">${version}</span>`).join('') : 'N/A'}
                    </div>
                </div>
                <a href="${mod.curseForgeUrl}" class="download-button" target="_blank">
                    <i class="fas fa-download"></i> ${downloadText}
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