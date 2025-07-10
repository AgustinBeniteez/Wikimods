// Datos de los mods en formato JSON
const modsData = {
    minecraft: [
        {
            id: "indexer",
            name: "Indexer",
            slug: "indexer",
            game: "minecraft",
            versions: ["1.20.1", "1.19.2", "1.18.2"],
            author: "AgustinBenitez",
            description: "Indexer es un mod que te ayuda a organizar y gestionar tus items. Este sistema de automatización te permite filtrar y distribuir automáticamente el contenido de tus cofres/contenedores, eliminando la necesidad de clasificar manualmente tus recursos. Con Indexer, puedes depositar todos tus items en un punto central y el sistema se encargará de distribuirlos a los contenedores apropiados según los filtros que hayas configurado, ahorrándote tiempo y manteniendo tu base perfectamente organizada.",
            shortDescription: "Sistema de organización y gestión automática de items",
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/indexer",
            downloadCount: "100",
            creationDate: "Jul 6, 2025",
            mainImage: "https://media.forgecdn.net/attachments/description/1301365/description_ebef8487-441d-4a30-8cbb-377951845cb9.png",
            gallery: [
                "../img/minecraft/indexer/gallery1.svg",
                "../img/minecraft/indexer/gallery2.svg",
                "../img/minecraft/indexer/gallery3.svg"
            ],
            features: [
                "Controlador Indexer: El cerebro del sistema que detecta conectores hasta a 250 bloques de distancia",
                "Tubería Indexer: Conecta el controlador con los conectores formando la red de distribución",
                "Conector Indexer: Configurable con filtros específicos para determinar qué items aceptará",
                "DropBox: Contenedor especial donde depositas los items para clasificar",
                "Mejoras de velocidad para transferir más items por ciclo"
            ]
        },
        {
            id: "modern-decor-outdoor",
            name: "Modern Decor Outdoor",
            slug: "modern-decor-outdoor",
            game: "minecraft",
            versions: ["1.20.1", "1.19.2"],
            author: "AgustinBenitez",
            description: "Modern Decor Outdoor es un mod que presenta una variedad de muebles y decoraciones para exteriores, incluyendo modernas baldosas para piscinas, tumbonas, sillas de playa, sillas, sombrillas y un divertido flamenco inflable para la diversión en la piscina. También incluye nuevas chimeneas, materiales de madera, cubiertas de paneles de madera, lámparas, barbacoas y más, todo diseñado con un toque contemporáneo y elegante para mejorar cualquier espacio exterior.",
            shortDescription: "Decoración moderna para exteriores y piscinas",
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/modern-decor-outdoor",
            downloadCount: "7.6K",
            creationDate: "Sep 2, 2024",
            mainImage: "https://media.forgecdn.net/attachments/description/1095687/description_de03f987-48ed-4797-ba0d-0e98f96c09a8.png",
            gallery: [
                "../img/minecraft/modern-decor-outdoor/gallery1.svg",
                "../img/minecraft/modern-decor-outdoor/gallery2.svg",
                "../img/minecraft/modern-decor-outdoor/gallery3.svg"
            ],
            features: [
                "Muebles de exterior elegantes y funcionales",
                "Elementos para piscinas como baldosas y flotadores",
                "Iluminación exterior moderna",
                "Barbacoas y elementos para entretenimiento",
                "Puedes sentarte en varios elementos decorativos"
            ]
        },
        {
            id: "modern-decor-wooden",
            name: "Modern Decor Wooden",
            slug: "modern-decor-wooden",
            game: "minecraft",
            versions: ["1.20.1", "1.19.2", "1.18.2"],
            author: "AgustinBenitez",
            description: "Modern Decor Wooden es un mod con muebles y paneles de madera con un toque moderno, que incluye muebles como PC, escritorios, teclados y neones. Ofrece configuraciones y muebles con variantes de color, permitiéndote sentarte en sillas y sofás, y decorar tus espacios con diferentes estilos de neón para crear ambientes únicos y personalizados.",
            shortDescription: "Muebles modernos de madera y decoración interior",
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/modern-decor-wooden",
            downloadCount: "9.7K",
            creationDate: "Aug 27, 2024",
            mainImage: "https://media.forgecdn.net/attachments/description/1091629/description_adfa39e8-d237-4fd7-8a39-040497b883e3.png",
            gallery: [
                "../img/minecraft/modern-decor-wooden/gallery1.svg",
                "../img/minecraft/modern-decor-wooden/gallery2.svg",
                "../img/minecraft/modern-decor-wooden/gallery3.svg"
            ],
            features: [
                "Muebles de interior con diseño moderno",
                "Elementos tecnológicos como PC y teclados",
                "Variantes de color para personalizar tus espacios",
                "Puedes sentarte en sillas y sofás",
                "Decoración con neones en diferentes estilos"
            ]
        },
        {
            id: "makeup-aesthetics-decor",
            name: "Makeup | Aesthetics Decor",
            slug: "makeup-aesthetics-decor",
            game: "minecraft",
            versions: ["1.19.2", "1.18.2"],
            author: "AgustinBenitez",
            description: "Makeup | Aesthetics Decor es un mod con decoración estética y de maquillaje, que incluye elementos como esmalte de uñas, tocador, mesa de masajes y más. Perfecto para crear espacios de belleza y bienestar en tu mundo de Minecraft, añadiendo un toque de elegancia y funcionalidad a tus construcciones.",
            shortDescription: "Decoración estética y elementos de belleza",
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/makeup-aesthetics-decor",
            downloadCount: "1.7K",
            creationDate: "Mar 3, 2025",
            mainImage: "https://media.forgecdn.net/attachments/description/null/description_7e297358-313c-453f-bf64-8a3f58cae9c3.png",
            gallery: [
                "../img/minecraft/makeup-aesthetics-decor/gallery1.svg",
                "../img/minecraft/makeup-aesthetics-decor/gallery2.svg",
                "../img/minecraft/makeup-aesthetics-decor/gallery3.svg"
            ],
            features: [
                "Elementos de maquillaje y belleza",
                "Tocadores y espejos decorativos",
                "Mesas de masaje para espacios de spa",
                "Decoración estética para interiores",
                "Complementos perfectos para salones de belleza"
            ]
        },
        {
            id: "hazbin-hotel-items",
            name: "Hazbin Hotel Items",
            slug: "hazbin-hotel-items",
            game: "minecraft",
            versions: ["1.20.1", "1.19.2"],
            author: "AgustinBenitez",
            description: "Hazbin Hotel Items es un mod que añade algunos elementos de Hazbin Hotel, como las puertas de la serie, pilares del hotel y más cosas para crear el hotel de Hazbin Hotel en tu mundo de Minecraft. Inspirado en la popular serie de Prime Video, este mod te permite recrear los icónicos escenarios y ambientes del show.",
            shortDescription: "Elementos inspirados en la serie Hazbin Hotel",
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/hazbin-hotel-items",
            downloadCount: "1.7K",
            creationDate: "Aug 15, 2024",
            mainImage: "https://media.forgecdn.net/attachments/description/1084729/description_43b41f66-7272-4ff8-9c15-7bcb17ed830e.png",
            gallery: [
                "../img/minecraft/hazbin-hotel-items/gallery1.svg",
                "../img/minecraft/hazbin-hotel-items/gallery2.svg",
                "../img/minecraft/hazbin-hotel-items/gallery3.svg"
            ],
            features: [
                "Puertas inspiradas en la serie",
                "Pilares y elementos estructurales del hotel",
                "Decoración temática de Hazbin Hotel",
                "Elementos para recrear escenarios de la serie",
                "Mod en desarrollo con actualizaciones periódicas"
            ]
        }
    ],
    sims4: [
        {
            id: "poster-arcane-jinx-vi",
            name: "Poster Arcane | Jinx & Vi",
            slug: "poster-arcane-jinx-vi",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: "Poster Arcane | Jinx & Vi | Jinx was here | Arcane es un mod que añade 3 pósters inspirados en la serie Arcane de League of Legends. Estos pósters son perfectos para decorar las paredes de tus Sims fans de la serie.",
            shortDescription: "Pósters inspirados en la serie Arcane de League of Legends",
            curseForgeUrl: "https://www.curseforge.com/sims4/build-buy/poster-arcane-jinx-vi",
            downloadCount: "3.6K",
            creationDate: "2024-05-15",
            mainImage: "https://media.forgecdn.net/attachments/description/1207766/description_a1af8d3e-5af4-471e-b7bb-5f3e7cdee175.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: [
                "3 pósters de Arcane",
                "Diseños de alta calidad",
                "Perfectos para fans de League of Legends",
                "Decoración temática de Jinx y Vi"
            ]
        },
        {
            id: "arcane-pictures-square-frame",
            name: "Arcane Pictures | Square Frame",
            slug: "arcane-pictures-square-frame",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: "Arcane Pictures | Square Frame es un mod que añade cuadros con marco cuadrado inspirados en la serie Arcane de League of Legends. Estos cuadros son perfectos para decorar las paredes de tus Sims fans de la serie.",
            shortDescription: "Cuadros con marco cuadrado inspirados en la serie Arcane",
            curseForgeUrl: "https://www.curseforge.com/sims4/build-buy/arcane-pictures-square-frame",
            downloadCount: "2.3K",
            creationDate: "2024-05-10",
            mainImage: "https://media.forgecdn.net/attachments/description/null/description_67912529-c980-4826-b830-2e66ab79ebcb.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: [
                "Cuadros con marco cuadrado",
                "Imágenes de personajes de Arcane",
                "Diseños de alta calidad",
                "Decoración temática de League of Legends"
            ]
        },
        {
            id: "cats-t-shirt-female",
            name: "Cats T-Shirt | Female",
            slug: "cats-t-shirt-female",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: "Cats T-Shirt | Female es un mod que añade camisetas con diseños de gatos para Sims femeninas. Estas camisetas son perfectas para los amantes de los gatos y añaden un toque divertido al guardarropa de tus Sims.",
            shortDescription: "Camisetas con diseños de gatos para Sims femeninas",
            curseForgeUrl: "https://www.curseforge.com/sims4/create-a-sim/cats-t-shirt-female",
            downloadCount: "1.2K",
            creationDate: "2025-02-24",
            mainImage: "https://media.forgecdn.net/avatars/thumbnails/1185/447/256/256/638759388512417620.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: [
                "Camisetas con diseños de gatos",
                "Para Sims femeninas",
                "Diseños divertidos y coloridos",
                "Perfecto para amantes de los gatos"
            ]
        },
        {
            id: "valorant-t-shirt-vct-female",
            name: "Valorant T-Shirt VCT | Female",
            slug: "valorant-t-shirt-vct-female",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: "Valorant T-Shirt VCT | Female es un mod que añade camisetas con diseños de equipos de esports de Valorant VCT para Sims femeninas. Estas camisetas son perfectas para los fans de Valorant y los esports.",
            shortDescription: "Camisetas de equipos de Valorant VCT para Sims femeninas",
            curseForgeUrl: "https://www.curseforge.com/sims4/create-a-sim/edit-valorant-t-shirt-vct-female",
            downloadCount: "874",
            creationDate: "2025-01-15",
            mainImage: "https://media.forgecdn.net/attachments/description/1206392/description_e5aca6a6-a3db-43fb-89df-50584e9dfa63.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: [
                "Camisetas de equipos de Valorant VCT",
                "Para Sims femeninas",
                "Diseños de equipos de esports",
                "Perfecto para fans de Valorant"
            ]
        },
        {
            id: "valorant-t-shirt-vct-male",
            name: "Valorant T-Shirt VCT | Male",
            slug: "valorant-t-shirt-vct-male",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: "Valorant T-Shirt VCT | Male es un mod que añade camisetas con diseños de equipos de esports de Valorant VCT para Sims masculinos. Estas camisetas son perfectas para los fans de Valorant y los esports.",
            shortDescription: "Camisetas de equipos de Valorant VCT para Sims masculinos",
            curseForgeUrl: "https://www.curseforge.com/sims4/create-a-sim/valorant-t-shirt-vct-male",
            downloadCount: "874",
            creationDate: "2025-01-15",
            mainImage: "https://media.forgecdn.net/attachments/description/null/description_a7fd27c2-c869-4c3d-b681-d804d4497db0.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: [
                "Camisetas de equipos de Valorant VCT",
                "Para Sims masculinos",
                "Diseños de equipos de esports",
                "Perfecto para fans de Valorant"
            ]
        }
    ]
};

// Exportar los datos para que sean accesibles desde otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { modsData };
}