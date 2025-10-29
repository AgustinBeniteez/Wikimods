// Datos de los mods en formato JSON
const modsData = window.modsData = {
    minecraft: [
        {
            id: "indexer",
            name: "Indexer",
            slug: "indexer",
            game: "minecraft",
            versions: ["1.20.1"],
            author: "AgustinBenitez",
            repositoryUrl: "https://github.com/AgustinBeniteez/Indexer-mod",
            description: {
                es: "🔧 **Indexer** es la solución definitiva para la gestión automática de inventarios en Minecraft 1.20.1. Olvídate de perder tiempo organizando manualmente tus recursos y deja que este avanzado sistema de automatización haga el trabajo por ti.\n\n💡 **¿Cómo funciona?** Simplemente deposita todos tus items en el DropBox central y observa cómo el sistema los distribuye inteligentemente a los contenedores correctos según tus configuraciones. El potente Controlador Indexer puede detectar y gestionar conectores en un radio de hasta **250 bloques**, permitiéndote crear redes de almacenamiento masivas que se adaptan a cualquier base, desde la más simple hasta la más compleja.\n\n⚡ **Rendimiento escalable:** Con 5 niveles de mejoras de velocidad que van desde Básico (5x) hasta Definitivo (256x), tu sistema crecerá contigo. El sistema de filtros avanzado con 7 tipos diferentes te permite crear reglas de clasificación precisas y sofisticadas.\n\n🌍 **Experiencia global:** Interfaz completamente renovada con soporte multiidioma (español, inglés, catalán, valenciano) y compatibilidad total con hornos y otros contenedores especiales.",
                en: "🔧 **Indexer** is the ultimate solution for automatic inventory management in Minecraft 1.20.1. Forget about wasting time manually organizing your resources and let this advanced automation system do the work for you.\n\n💡 **How it works?** Simply deposit all your items in the central DropBox and watch as the system intelligently distributes them to the correct containers according to your configurations. The powerful Indexer Controller can detect and manage connectors within a radius of up to **250 blocks**, allowing you to create massive storage networks that adapt to any base, from the simplest to the most complex.\n\n⚡ **Scalable performance:** With 5 speed upgrade levels ranging from Basic (5x) to Definitive (256x), your system will grow with you. The advanced filter system with 7 different types allows you to create precise and sophisticated sorting rules.\n\n🌍 **Global experience:** Completely renovated interface with multi-language support (Spanish, English, Catalan, Valencian) and full compatibility with furnaces and other special containers."
            },
            shortDescription: {
                es: "Sistema de organización y gestión automática de items",
                en: "Automatic item organization and management system"
            },
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/indexer",
            modrinthUrl: "https://modrinth.com/mod/indexer",
            downloadCount: "34K",
            creationDate: "Jul 6, 2025",
            mainImage: "../img/minecraft/indexer_gallery/manual1.png",
            gallery: [
                "../img/minecraft/indexer_gallery/manual1.png",
                "../img/minecraft/indexer_gallery/manual2.png",
                "../img/minecraft/indexer_gallery/manual3.png",
                "../img/minecraft/indexer_gallery/manual4.png",
                "../img/minecraft/indexer_gallery/manual5.png",
                "../img/minecraft/indexer_gallery/manual6.png",
                "../img/minecraft/indexer_gallery/manual7.png",
                "../img/minecraft/indexer_gallery/manual8.png",
                "../img/minecraft/indexer_gallery/manual9.png",
                "../img/minecraft/indexer_gallery/manual10.png",
                "../img/minecraft/indexer_gallery/manual11.png",
                "../img/minecraft/indexer_gallery/manual12.png"
            ],
            features: {
                es: [
                    "🧠 **Controlador Indexer:** El cerebro inteligente del sistema que detecta y gestiona conectores en un radio masivo de hasta 250 bloques",
                    "🔗 **Tubería Indexer:** Red de conexión avanzada que forma la columna vertebral de tu sistema de distribución automática",
                    "⚙️ **Conector Indexer:** Nodos configurables con sistema de filtros inteligente para clasificación precisa de items",
                    "📦 **DropBox:** Contenedor central inteligente donde depositas todos tus recursos para clasificación automática instantánea",
                    "⚡ **Sistema de Mejoras:** 5 niveles de velocidad escalables desde Básico (5x) hasta Definitivo (256x) para máximo rendimiento",
                    "🔍 **Filtros Avanzados:** 7 tipos diferentes de filtros para crear reglas de clasificación sofisticadas y personalizadas",
                    "🌐 **Interfaz Renovada:** UI completamente rediseñada con soporte multiidioma y estadísticas del sistema en tiempo real"
                ],
                en: [
                    "🧠 **Indexer Controller:** The intelligent brain of the system that detects and manages connectors within a massive 250-block radius",
                    "🔗 **Indexer Pipe:** Advanced connection network that forms the backbone of your automatic distribution system",
                    "⚙️ **Indexer Connector:** Configurable nodes with intelligent filter system for precise item classification",
                    "📦 **DropBox:** Intelligent central container where you deposit all your resources for instant automatic sorting",
                    "⚡ **Upgrade System:** 5 scalable speed levels from Basic (5x) to Definitive (256x) for maximum performance",
                    "🔍 **Advanced Filters:** 7 different filter types to create sophisticated and personalized sorting rules",
                    "🌐 **Renovated Interface:** Completely redesigned UI with multi-language support and real-time system statistics"
                ]
            },
            changelog: `# Changelog — HotFix - Version 1.0.6.1

## Fixes

* **Fixed server-side error with [@OnlyIn](https://github.com/OnlyIn) (Dist.CLIENT)**  
  Resolved a crash caused by client-only code being executed on the server.

* **Fixed furnace item extraction issue:**  
  If the extractor is connected but the output item cannot enter the destination inventory, it will now remain inside the furnace instead of disappearing.

_(All following changes belong to Version 1.0.6)_

---

# Changelog — Version 1.0.6

## Fixes

* **Connector Filter Items:**  
  If an item is placed in an intermediate slot (not the first or immediately after an occupied one), and the previous slot is empty, the system will automatically move the item to the nearest available empty slot starting from the first.

---

## Dropbox

* **New Button:**  
  Added a button to move all items from your inventory to the Dropbox.

* **New Dropbox UI:**
  * Displays system stats on the right side of the inventory:
  * Used capacity
  * Upgrade level
  * New button to transfer all items to the Dropbox.
  * New interface image included.

![New Dropbox UI](https://github.com/user-attachments/assets/974adcf3-c071-44f8-850a-8d750600abee)

---

## System Improvements

* **New Textures:**  
  Added new textures for the transfer speed upgrade.
  * \`transfer_speed_upgrade_copper\`
  * \`transfer_speed_upgrade_definitive\`

* **New Progression:**  
  Basic → Copper → Advanced → Elite → Definitive
  * Speeds: 5x → 10x → 20x → 64x → 256x

* **Upgrade Persistence:**  
  The upgrade state is now saved in the Indexer Controller.

---

## Interfaces

### Indexer Controller UI

* New interface design.
* Added a view of all containers connected to the system.
* New system stats:
  * Used capacity
  * Dropbox connection status
  * Upgrade level
* New interface image included.

![Indexer Controller UI](https://github.com/user-attachments/assets/b5ff1371-8b1e-49bf-a463-5065489b33d2)

---

## New Items: Filters

![Filters Overview](https://github.com/user-attachments/assets/27e95109-9dc6-4ec9-ae8b-0da4b5036dbc)

A new "attribute filter" system has been implemented, allowing items to be filtered not only by exact match but also by attributes, tags, or NBT properties.

### List of Filters:

* **Base Filter**  
  Core component used for crafting other filters.

* **Name Filter**  
  Filters items by exact name.  
  (Right-click to set the target name.)

* **Attribute Filter**  
  Filters by attributes such as enchantments.  
  (Right-click to set the attribute.)

* **Custom Tag Blocker**  
  Blocks items by ID or tag.  
  (Right-click to set the tag or item to block.)

* **Food Filter**  
  Allows only edible items.

* **Fuel Filter**  
  Allows only fuel items (e.g., coal, lava bucket).

* **Tools Filter**  
  Allows only tools (pickaxes, axes, shovels, hoes, and swords).

Check the in-game recipe book for detailed crafting patterns.

---

## Languages

* Added new languages:
  * Catalan (ca_es)
  * Valencian (ca_valencia)

---

## Blocks and Mining

* Added mining tags (\`mineable/pickaxe\`) so mod blocks can be broken faster using a pickaxe.

---

## Connector Improvements

* Added a new upgrade for the connector.
* Now has more space when applying with Shift + Right-click.
* Has 5 uses before breaking.
* New image included.

![Connector Improvements](https://github.com/user-attachments/assets/3af6ae68-e475-4743-bf42-3803599f05f7)

---

## Mod Manual

* **Manual Update:**  
  A new **navigation menu** has been added with three main sections:
  * **Crafting Recipes:**  
    Allows you to search any mod item and view its crafting recipe individually.
  * **Tutorial:**  
    Explains each part of the mod in detail, including its function and progression.
  * **Wiki:**  
    Direct link to the official mod website for more information and updates.

![Mod Manual Navigation](https://github.com/user-attachments/assets/00ff8158-c63e-44ad-8c2d-7955b8e64d3e)

---

# Patch Notes - Version 1.0.5

## Fixes

* Fixed an issue where mod blocks would drop in Creative Mode.  
  They now only drop in Survival Mode, as intended.

## Filtering Improvements

* Added the ability to filter more item types.

## UI Improvements

* General UI update.
* Added new block: **UI Controller**.
* Added new block: **UI Connector**.

![UI Improvements](https://media.forgecdn.net/attachments/1301365/changelog/changelog_94cc0454-5994-41dc-94c7-b49982a618a7.png)

## Language Support

Added support for multiple languages:

### Spanish

* \`es_es\` (Spain)
* \`es_ar\` (Argentina)
* \`es_mx\` (Mexico)
* \`es_cl\` (Chile)
* \`es_co\` (Colombia)
* \`es_pe\` (Peru)
* \`es_ve\` (Venezuela)
* \`es_uy\` (Uruguay)
* \`es_andaluz\` (Andalusia)

### English

* \`en_us\` (United States)
* \`en_gb\` (United Kingdom)
* \`en_ca\` (Canada)
* \`en_au\` (Australia)

### Chinese

* \`zh_cn\` (Simplified Chinese)

## Upgrade Balancing

* **Elite Upgrade**: Increased capacity from **+20** to **+64**.
* **Advanced Upgrade**: Increased capacity from **+10** to **+20**.
* **Basic Upgrade**: Increased capacity from **+4** to **+5**.

## Optimization 📂

* Optimization and reduction of image sizes.
* Overall mod size reduced from **903.6 KB** to **529.04 KB**.

---

Update created by **AgustínBenitez** — 10/10/2025`,
            items: [
                {
                    name: "Indexer Controller",
                    image: "../img/minecraft/item/indexer_controller_top.png",
                    description: {
                        es: "El cerebro de todo el sistema. Coloca este bloque en el centro de tu red de almacenamiento y conéctalo a un DropBox donde depositarás los items que quieres clasificar. El Controlador puede detectar conectores hasta 250 bloques de distancia.",
                        en: "The brain of the entire system. Place this block at the center of your storage network and connect it to a DropBox where you'll deposit the items you want to sort. The Controller can detect connectors up to 250 blocks away."
                    },
                    recipe: {
                        pattern: [
                            "IRI",
                            "RCR",
                            "IRI"
                        ],
                        key: {
                            I: "iron_ingot",
                            R: "redstone",
                            C: "chest"
                        },
                        result: "1 Indexer Controller"
                    }
                },
                {
                    name: "Indexer Connector",
                    image: "../img/minecraft/item/indexer_connector_front.png",
                    description: {
                        es: "Coloca estos bloques junto a tus cofres, barriles, hornos u otros contenedores. Cada Conector puede configurarse con un filtro específico para determinar qué items aceptará.",
                        en: "Place these blocks next to your chests, barrels, furnaces, or other containers. Each Connector can be configured with a specific filter to determine which items it will accept."
                    },
                    recipe: {
                        pattern: [
                            "ITI",
                            "RFR",
                            "ITI"
                        ],
                        key: {
                            I: "iron_ingot",
                            R: "redstone",
                            T: "redstone_torch",
                            F: "item_frame"
                        },
                        result: "1 Indexer Connector"
                    }
                },
                {
                    name: "Indexer Pipes",
                    image: "../img/minecraft/item/indexer_pipeitem.png",
                    description: {
                        es: "Estos bloques conectan el Controlador Indexer con los Conectores Indexer, formando la red de distribución. Son fáciles de craftear y rinden 10 unidades por receta.",
                        en: "These blocks connect the Indexer Controller with the Indexer Connectors, forming the distribution network. They are easy to craft and yield 10 units per recipe."
                    },
                    recipe: {
                        pattern: [
                            "II ",
                            "   ",
                            "   "
                        ],
                        key: {
                            I: "iron_ingot"
                        },
                        result: "10 Indexer Pipes"
                    }
                },
                {
                    name: "DropBox",
                    image: "../img/minecraft/item/drop_box.png",
                    description: {
                        es: "Un contenedor especial con 54 slots (el doble que un cofre normal) donde puedes depositar todos los items que quieres clasificar. Incluye nueva interfaz con estadísticas del sistema y botón para transferir todos los items del inventario.",
                        en: "A special container with 54 slots (double that of a normal chest) where you can deposit all the items you want to sort. Features new interface with system statistics and button to transfer all items from inventory."
                    },
                    recipe: {
                        pattern: [
                            "IRI",
                            "RTR",
                            "ICI"
                        ],
                        key: {
                            I: "iron_ingot",
                            C: "chest",
                            R: "redstone",
                            T: "hopper"
                        },
                        result: "1 DropBox"
                    }
                },
                {
                    name: "Transfer Speed Upgrade Basic",
                    image: "../img/minecraft/item/transfer_speed_upgrade_basic.png",
                    description: {
                        es: "Mejora básica de velocidad 5x. Crafteo: lingotes de oro en las esquinas, polvo de redstone en los slots restantes, y un Controlador Indexer en el centro. Transfiere hasta 4 items por ciclo.",
                        en: "Basic speed upgrade 5x. Crafting: gold ingots in the corners, redstone dust in the remaining slots, and an Indexer Controller in the center. Transfers up to 4 items per cycle."
                    },
                    recipe: {
                        pattern: [
                            "GRG",
                            "RCR",
                            "GRG"
                        ],
                        key: {
                            G: "gold_ingot",
                            R: "redstone",
                            C: "indexer_controller_top"
                        },
                        result: "1 Transfer Speed Upgrade Basic"
                    }
                },
                {
                    name: "Transfer Speed Upgrade Copper",
                    image: "../img/minecraft/item/transfer_speed_upgrade_copperr.png",
                    description: {
                        es: "Mejora de cobre 10x. Crafteo: rodea la mejora básica con lingotes de cobre.",
                        en: "Copper upgrade 10x. Crafting: surround the Basic upgrade with copper ingots."
                    },
                    recipe: {
                        pattern: [
                            "CCC",
                            "CBC",
                            "CCC"
                        ],
                        key: {
                            C: "copper_ingot",
                            B: "transfer_speed_upgrade_basic"
                        },
                        result: "1 Transfer Speed Upgrade Copper"
                    }
                },
                {
                    name: "Transfer Speed Upgrade Advanced",
                    image: "../img/minecraft/item/transfer_speed_upgrade_advanced.png",
                    description: {
                        es: "Mejora avanzada 20x. Crafteo: rodea la mejora de cobre con diamantes. Transfiere hasta 16 items por ciclo.",
                        en: "Advanced upgrade 20x. Crafting: surround the Copper upgrade with diamonds. Transfers up to 16 items per cycle."
                    },
                    recipe: {
                        pattern: [
                            "DDD",
                            "DCD",
                            "DDD"
                        ],
                        key: {
                            D: "diamond",
                            C: "transfer_speed_upgrade_copper"
                        },
                        result: "1 Transfer Speed Upgrade Advanced"
                    }
                },
                {
                    name: "Transfer Speed Upgrade Elite",
                    image: "../img/minecraft/item/transfer_speed_upgrade_elite.png",
                    description: {
                        es: "Mejora élite 64x. Crafteo: rodea la mejora avanzada con Netherite Scrap.",
                        en: "Elite upgrade 64x. Crafting: surround the Advanced upgrade with Netherite Scrap."
                    },
                    recipe: {
                        pattern: [
                            "NNN",
                            "NAN",
                            "NNN"
                        ],
                        key: {
                            N: "netherite_scrap",
                            A: "transfer_speed_upgrade_advanced"
                        },
                        result: "1 Transfer Speed Upgrade Elite"
                    }
                },
                {
                    name: "Transfer Speed Upgrade Definitive",
                    image: "../img/minecraft/item/transfer_speed_upgrade_definitivee.png",
                    description: {
                        es: "Mejora definitiva 256x. Nivel final. Consulta el libro de recetas en el juego si tu pack incluye su receta.",
                        en: "Definitive upgrade 256x. Final tier. Check the in-game recipe book if your pack includes its recipe."
                    },
                    recipe: {
                        pattern: [
                            "WNW",
                            "NEN",
                            "WNW"
                        ],
                        key: {
                            W: "nether_star",
                            N: "netherite_ingot",
                            E: "transfer_speed_upgrade_elite"
                        },
                        result: "1 Transfer Speed Upgrade Definitive"
                    }
                },
                {
                    name: "Base Filter",
                    image: "../img/minecraft/item/indexer_filter_base.png",
                    description: {
                        es: "Componente base usado para craftear otros filtros.",
                        en: "Core component used for crafting other filters."
                    },
                    recipe: {
                        pattern: [
                            "IPI",
                            "PRP",
                            "IPI"
                        ],
                        key: {
                            I: "iron_ingot",
                            P: "paper",
                            R: "redstone"
                        },
                        result: "1 Base Filter"
                    }
                },
                {
                    name: "Name Filter",
                    image: "../img/minecraft/item/indexer_filter_name.png",
                    description: {
                        es: "Filtra items por nombre exacto. Haz clic derecho para establecer el nombre objetivo.",
                        en: "Filters items by exact custom name. Right-click to set the target name."
                    },
                    recipe: {
                        pattern: [
                            " N ",
                            "NBN",
                            " N "
                        ],
                        key: {
                            N: "name_tag",
                            B: "indexer_filter_base"
                        },
                        result: "1 Name Filter"
                    }
                },
                {
                    name: "Attribute Filter",
                    image: "../img/minecraft/item/indexer_filter_attribute.png",
                    description: {
                        es: "Filtra por atributos como encantamientos. Haz clic derecho para establecer el atributo.",
                        en: "Filters by attributes like enchantments. Right-click to set the attribute."
                    },
                    recipe: {
                        pattern: [
                            " E ",
                            " F ",
                            " N "
                        ],
                        key: {
                            E: "enchanted_book",
                            F: "indexer_filter_base",
                            N: "name_tag"
                        },
                        result: "1 Attribute Filter"
                    }
                },
                {
                    name: "Custom Tag Blocker",
                    image: "../img/minecraft/item/indexer_filter_custom_tag.png",
                    description: {
                        es: "Bloquea items por ID/tag. Haz clic derecho para establecer el item/tag a bloquear.",
                        en: "Blocks items by ID/tag. Right-click to set the item/tag to block."
                    },
                    recipe: {
                        pattern: [
                            " R ",
                            "RFR",
                            " N "
                        ],
                        key: {
                            R: "redstone",
                            F: "indexer_filter_base",
                            N: "name_tag"
                        },
                        result: "1 Custom Tag Blocker"
                    }
                },
                {
                    name: "Food Filter",
                    image: "../img/minecraft/item/indexer_filter_food.png",
                    description: {
                        es: "Permite solo items comestibles.",
                        en: "Allows only edible items."
                    },
                    recipe: {
                        pattern: [
                            "LLL",
                            "SFP",
                            "LLL"
                        ],
                        key: {
                            L: "leather",
                            S: "cooked_beef",
                            F: "indexer_filter_base",
                            P: "potato"
                        },
                        result: "1 Food Filter"
                    }
                },
                {
                    name: "Fuel Filter",
                    image: "../img/minecraft/item/indexer_filter_fuel.png",
                    description: {
                        es: "Permite solo items de combustible (ej: carbón, carbón vegetal, cubo de lava en hornos).",
                        en: "Allows only fuel items (e.g., coal, charcoal, lava bucket in furnaces)."
                    },
                    recipe: {
                        pattern: [
                            "LCL",
                            "CFC",
                            "LBL"
                        ],
                        key: {
                            L: "leather",
                            C: "coal",
                            F: "indexer_filter_base",
                            B: "charcoal"
                        },
                        result: "1 Fuel Filter"
                    }
                },
                {
                    name: "Tools Filter",
                    image: "../img/minecraft/item/indexer_filter_tools.png",
                    description: {
                        es: "Permite solo herramientas: picos, hachas, palas, azadas y espadas.",
                        en: "Allows only tools: pickaxes, axes, shovels, hoes, and swords."
                    },
                    recipe: {
                        pattern: [
                            "LFL",
                            "PAH",
                            "LLL"
                        ],
                        key: {
                            L: "leather",
                            F: "indexer_filter_base",
                            P: "iron_pickaxe",
                            A: "iron_axe",
                            H: "iron_hoe"
                        },
                        result: "1 Tools Filter"
                    }
                },
                {
                    name: "Extractor",
                    image: "../img/minecraft/item/block/extractor_block.png",
                    description: {
                        es: "Componente que permite extraer items de contenedores automáticamente.",
                        en: "Component that allows automatic extraction of items from containers."
                    },
                    recipe: {
                        pattern: [
                            "IHI",
                            "RCR",
                            "IPI"
                        ],
                        key: {
                            I: "iron_ingot",
                            H: "hopper",
                            R: "redstone",
                            C: "chest",
                            P: "piston"
                        },
                        result: "1 Extractor"
                    }
                },
                {
                    name: "Indexer Manual",
                    image: "../img/minecraft/item/indexer_manual.png",
                    description: {
                        es: "Guía completa con nuevo menú de navegación con tres secciones principales: Recetas de Crafteo, Tutorial y Wiki. Permite buscar cualquier item del mod y ver su receta individualmente.",
                        en: "Complete guide with new navigation menu with three main sections: Crafting Recipes, Tutorial and Wiki. Allows you to search any mod item and view its crafting recipe individually."
                    },
                    recipe: {
                        pattern: [
                            "BC ",
                            "P  ",
                            "   "
                        ],
                        key: {
                            C: "chest",
                            B: "book",
                            P: "indexer_pipeitem"
                        },
                        result: "1 Indexer Manual"
                    }
                },
                {
                    name: "Connector Capacity Upgrade",
                    image: "../img/minecraft/item/connector_capacity_upgrade.png",
                    description: {
                        es: "Mejora de capacidad para conectores. Aumenta el espacio de almacenamiento del conector cuando se aplica con Shift + Clic derecho. Tiene 5 usos antes de romperse.",
                        en: "Capacity upgrade for connectors. Increases the connector's storage space when applied with Shift + Right-click. Has 5 uses before breaking."
                    },
                    recipe: {
                        pattern: [
                            "DDD",
                            "RCR",
                            "DDD"
                        ],
                        key: {
                            D: "diamond",
                            R: "repeater",
                            C: "indexer_connector_front"
                        },
                        result: "1 Connector Capacity Upgrade"
                    }
                }
            ]
        },
        {
            id: "modern-decor-outdoor",
            name: "Modern Decor Outdoor",
            slug: "modern-decor-outdoor",
            game: "minecraft",
            versions: ["1.20.1", "1.19.2"],
            author: "AgustinBenitez",
            description: {
                es: "Modern Decor Outdoor es un mod que presenta una variedad de muebles y decoraciones para exteriores, incluyendo modernas baldosas para piscinas, tumbonas, sillas de playa, sillas, sombrillas y un divertido flamenco inflable para la diversión en la piscina. También incluye nuevas chimeneas, materiales de madera, cubiertas de paneles de madera, lámparas, barbacoas y más, todo diseñado con un toque contemporáneo y elegante para mejorar cualquier espacio exterior.",
                en: "Modern Decor Outdoor is a mod featuring a range of stylish outdoor furniture and decor, including modern pool tiles, sun loungers, deckchairs, chairs, umbrellas, and a fun inflatable flamingo for pool fun. It also includes new fireplaces, wooden materials, wood panel decks, lamps, barbecues, and more all designed with a sleek, contemporary touch to enhance any outdoor space."
            },
            shortDescription: {
                es: "Decoración moderna para exteriores y piscinas",
                en: "Modern decoration for outdoors and pools"
            },
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/modern-decor-outdoor",
            downloadCount: "10.1K",
            creationDate: "Sep 2, 2024",
            mainImage: "https://media.forgecdn.net/attachments/description/1095687/description_de03f987-48ed-4797-ba0d-0e98f96c09a8.png",
            gallery: [
                "https://media.forgecdn.net/attachments/description/1095687/description_f809c91a-7fc0-4bb4-87ea-a6eff7626c98.png",
                "https://media.forgecdn.net/attachments/description/1095687/description_bf7144d0-3928-4580-904a-31555004dc0e.png",
                "https://media.forgecdn.net/attachments/description/1095687/description_90227e64-ad39-44d5-8cc4-67b6c7745b9b.png",
                "https://media.forgecdn.net/attachments/description/1095687/description_db0e8f13-5c04-482f-a842-a9ec3395a84a.png"
            ],
            features: {
                es: [
                    "Muebles de exterior elegantes y funcionales",
                    "Elementos para piscinas como baldosas y flotadores",
                    "Iluminación exterior moderna",
                    "Barbacoas y elementos para entretenimiento",
                    "Puedes sentarte en varios elementos decorativos"
                ],
                en: [
                    "Elegant and functional outdoor furniture",
                    "Pool elements such as tiles and floats",
                    "Modern outdoor lighting",
                    "Barbecues and entertainment elements",
                    "You can sit on various decorative elements"
                ]
            },
            items: [
                {
                    name: "Tumbona Moderna",
                    image: "../img/minecraft/modern-decor-outdoor/sun_lounger.png",
                    description: {
                        es: "Elegante tumbona para relajarte junto a la piscina o en tu jardín.",
                        en: "Elegant sun lounger to relax by the pool or in your garden."
                    },
                    recipe: {
                        pattern: [
                            "WWW",
                            "WCW",
                            "L L"
                        ],
                        key: {
                            W: "Tablones de Madera",
                            C: "Alfombra",
                            L: "Tronco de Madera"
                        },
                        result: "1 Tumbona Moderna"
                    }
                }
            ]
        },
        {
            id: "modern-decor-wooden",
            name: "Modern Decor Wooden",
            slug: "modern-decor-wooden",
            game: "minecraft",
            versions: ["1.20.1", "1.19.2", "1.18.2"],
            author: "AgustinBenitez",
            description: {
                es: "Modern Decor Wooden es un mod con muebles y paneles de madera con un toque moderno, que incluye muebles como PC, escritorios, teclados y neones. Ofrece configuraciones y muebles con variantes de color, permitiéndote sentarte en sillas y sofás, y decorar tus espacios con diferentes estilos de neón para crear ambientes únicos y personalizados.",
                en: "Modern Decor Wooden is a mod with furniture, with wood paneling with a modern twist and furniture such as PC, desks, keyboards and Neon. It offers setups and furniture with color variants, allowing you to sit on chairs and sofas, and decorate your spaces with different neon styles to create unique and personalized environments."
            },
            shortDescription: {
                es: "Muebles modernos de madera y decoración interior",
                en: "Modern wooden furniture and interior decoration"
            },
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/modern-decor-wooden",
            downloadCount: "12.7K",
            creationDate: "Aug 27, 2024",
            mainImage: "https://media.forgecdn.net/attachments/description/1091629/description_adfa39e8-d237-4fd7-8a39-040497b883e3.png",
            gallery: [
                "https://media.forgecdn.net/attachments/description/1091629/description_4a699ab0-8089-4e40-9d9d-f72c5721c4c8.gif",
                "https://media.forgecdn.net/attachments/description/1091629/description_28325527-dd3d-41b3-a73f-099d7101dbb5.png",
                "https://media.forgecdn.net/attachments/description/1091629/description_265a6bf1-e75e-49c3-b6df-1b00b3f69347.png",
                "https://media.forgecdn.net/attachments/description/1091629/description_aaa6b941-8245-4ae8-a20e-03e3411d7059.png",
                "https://media.forgecdn.net/attachments/description/1091629/description_126982f3-eeb9-4d5c-bc2a-bfd938ace595.png"
            ],
            features: {
                es: [
                    "Muebles de interior con diseño moderno",
                    "Elementos tecnológicos como PC y teclados",
                    "Variantes de color para personalizar tus espacios",
                    "Puedes sentarte en sillas y sofás",
                    "Decoración con neones en diferentes estilos"
                ],
                en: [
                    "Interior furniture with modern design",
                    "Technological elements such as PC and keyboards",
                    "Color variants to customize your spaces",
                    "You can sit on chairs and sofas",
                    "Decoration with neons in different styles"
                ]
            },
            items: [
                {
                    name: "Escritorio Moderno",
                    image: "../img/minecraft/modern-decor-wooden/desk.png",
                    description: {
                        es: "Elegante escritorio de madera con diseño moderno para tu setup.",
                        en: "Elegant wooden desk with modern design for your setup."
                    },
                    recipe: {
                        pattern: [
                            "WWW",
                            "W W",
                            "W W"
                        ],
                        key: {
                            W: "Tablones de Madera de Roble"
                        },
                        result: "1 Escritorio Moderno"
                    }
                }
            ]
        },
        {
            id: "makeup-aesthetics-decor",
            name: "Makeup | Aesthetics Decor",
            slug: "makeup-aesthetics-decor",
            game: "minecraft",
            versions: ["1.19.2", "1.18.2"],
            author: "AgustinBenitez",
            description: {
                es: "Makeup | Aesthetics Decor es un mod con decoración estética y de maquillaje, que incluye elementos como esmalte de uñas, tocador, mesa de masajes y más. Perfecto para crear espacios de belleza y bienestar en tu mundo de Minecraft, añadiendo un toque de elegancia y funcionalidad a tus construcciones.",
                en: "Makeup | Aesthetics Decor is a mod with aesthetic and makeup decoration, including elements such as nail polish, dressing table, massage table and more. Perfect for creating beauty and wellness spaces in your Minecraft world, adding a touch of elegance and functionality to your builds."
            },
            shortDescription: {
                es: "Decoración estética y elementos de belleza",
                en: "Aesthetic decoration and beauty elements"
            },
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/makeup-aesthetics-decor",
            downloadCount: "3.1K",
            creationDate: "Mar 3, 2025",
            mainImage: "https://media.forgecdn.net/attachments/description/null/description_7e297358-313c-453f-bf64-8a3f58cae9c3.png",
            gallery: [
                "https://media.forgecdn.net/attachments/description/null/description_4220b993-2d40-4521-ae70-d651fc481f82.png",
                "https://media.forgecdn.net/attachments/description/null/description_ac588fce-20a6-4a9e-bffa-aaa210ae3f62.png",
                "https://media.forgecdn.net/attachments/description/null/description_8fbefd6a-640a-4836-a06a-3dc262b69242.png",
                "https://media.forgecdn.net/attachments/description/null/description_0ea0f17e-d8fc-40d8-a096-fdbfccb07810.png",
                "https://media.forgecdn.net/attachments/description/null/description_7e297358-313c-453f-bf64-8a3f58cae9c3.png"
            ],
            features: {
                es: [
                    "Elementos de maquillaje y belleza",
                    "Tocadores y espejos decorativos",
                    "Mesas de masaje para espacios de spa",
                    "Decoración estética para interiores",
                    "Complementos perfectos para salones de belleza"
                ],
                en: [
                    "Makeup and beauty elements",
                    "Dressing tables and decorative mirrors",
                    "Massage tables for spa spaces",
                    "Aesthetic decoration for interiors",
                    "Perfect complements for beauty salons"
                ]
            },
            items: [
                {
                    name: "Tocador de Maquillaje",
                    image: "../img/minecraft/makeup-aesthetics-decor/vanity_table.png",
                    description: {
                        es: "Elegante tocador con espejo para tu salón de belleza o dormitorio.",
                        en: "Elegant vanity table with mirror for your beauty salon or bedroom."
                    },
                    recipe: {
                        pattern: [
                            "GGG",
                            "W W",
                            "W W"
                        ],
                        key: {
                            G: "Vidrio",
                            W: "Tablones de Madera de Abedul"
                        },
                        result: "1 Tocador de Maquillaje"
                    }
                }
            ]
        },
        {
            id: "hazbin-hotel-items",
            name: "Hazbin Hotel Items",
            slug: "hazbin-hotel-items",
            game: "minecraft",
            versions: ["1.20.1", "1.19.2"],
            author: "AgustinBenitez",
            description: {
                es: "Hazbin Hotel Items es un mod que añade algunos elementos de Hazbin Hotel, como las puertas de la serie, pilares del hotel y más cosas para crear el hotel de Hazbin Hotel en tu mundo de Minecraft. Inspirado en la popular serie de Prime Video, este mod te permite recrear los icónicos escenarios y ambientes del show.",
                en: "Hazbin Hotel Items is a mod that adds some Hazbin Hotel items, like Doors of the series, pillars of the hotel & more things to create the hotel of Hazbin Hotel in your Minecraft world. Inspired by the popular Prime Video series, this mod allows you to recreate the iconic settings and environments from the show."
            },
            shortDescription: {
                es: "Elementos inspirados en la serie Hazbin Hotel",
                en: "Elements inspired by the Hazbin Hotel series"
            },
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/hazbin-hotel-items",
            downloadCount: "2.1K",
            creationDate: "Aug 15, 2024",
            mainImage: "https://media.forgecdn.net/attachments/description/1084729/description_43b41f66-7272-4ff8-9c15-7bcb17ed830e.png",
            gallery: [
                "https://media.forgecdn.net/attachments/description/1084729/description_67cbebf4-a1a7-4f49-8037-36ea9519355f.png",
                "https://media.forgecdn.net/attachments/description/1084729/description_2bdd4b70-a7b4-410e-ace3-3cb540281129.png",
                "https://media.forgecdn.net/attachments/description/1084729/description_a7b538d2-e345-44eb-a20d-9d3628ffd4ad.png"
            ],
            features: {
                es: [
                    "Puertas inspiradas en la serie",
                    "Pilares y elementos estructurales del hotel",
                    "Decoración temática de Hazbin Hotel",
                    "Elementos para recrear escenarios de la serie",
                    "Mod en desarrollo con actualizaciones periódicas"
                ],
                en: [
                    "Doors inspired by the series",
                    "Pillars and structural elements of the hotel",
                    "Hazbin Hotel themed decoration",
                    "Elements to recreate scenarios from the series",
                    "Mod in development with periodic updates"
                ]
            },
            items: [
                {
                    name: "Cartel del Hotel Hazbin",
                    image: "../img/minecraft/hazbin-hotel-items/hazbin_hotel_sign.png",
                    description: {
                        es: "El icónico cartel del Hotel Hazbin para decorar la entrada de tu construcción.",
                        en: "The iconic Hazbin Hotel sign to decorate the entrance of your building."
                    },
                    recipe: {
                        pattern: [
                            "GGG",
                            "RYR",
                            "GGG"
                        ],
                        key: {
                            G: "Lingote de Oro",
                            R: "Tinte Rojo",
                            Y: "Tinte Amarillo"
                        },
                        result: "1 Cartel del Hotel Hazbin"
                    }
                }
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
            description: {
                es: "Poster Arcane | Jinx & Vi | Jinx was here | Arcane es un mod que añade 3 pósters inspirados en la serie Arcane de League of Legends. Estos pósters son perfectos para decorar las paredes de tus Sims fans de la serie.",
                en: "Poster Arcane | Jinx & Vi | Jinx was here | Arcane is a mod that adds 3 posters inspired by the Arcane series from League of Legends. These posters are perfect for decorating the walls of your Sims who are fans of the series."
            },
            shortDescription: {
                es: "Pósters inspirados en la serie Arcane de League of Legends",
                en: "Posters inspired by the Arcane series from League of Legends"
            },
            curseForgeUrl: "https://www.curseforge.com/sims4/build-buy/poster-arcane-jinx-vi",
            downloadCount: "3.6K",
            creationDate: "2024-05-15",
            mainImage: "https://media.forgecdn.net/attachments/description/1207766/description_a1af8d3e-5af4-471e-b7bb-5f3e7cdee175.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: {
                es: [
                    "3 pósters de Arcane",
                    "Diseños de alta calidad",
                    "Perfectos para fans de League of Legends",
                    "Decoración temática de Jinx y Vi"
                ],
                en: [
                    "3 Arcane posters",
                    "High quality designs",
                    "Perfect for League of Legends fans",
                    "Jinx and Vi themed decoration"
                ]
            }
        },
        {
            id: "arcane-pictures-square-frame",
            name: "Arcane Pictures | Square Frame",
            slug: "arcane-pictures-square-frame",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: {
                es: "Arcane Pictures | Square Frame es un mod que añade cuadros con marco cuadrado inspirados en la serie Arcane de League of Legends. Estos cuadros son perfectos para decorar las paredes de tus Sims fans de la serie.",
                en: "Arcane Pictures | Square Frame is a mod that adds square-framed pictures inspired by the Arcane series from League of Legends. These pictures are perfect for decorating the walls of your Sims who are fans of the series."
            },
            shortDescription: {
                es: "Cuadros con marco cuadrado inspirados en la serie Arcane",
                en: "Square-framed pictures inspired by the Arcane series"
            },
            curseForgeUrl: "https://www.curseforge.com/sims4/build-buy/arcane-pictures-square-frame",
            downloadCount: "2.3K",
            creationDate: "2024-05-10",
            mainImage: "https://media.forgecdn.net/attachments/description/null/description_67912529-c980-4826-b830-2e66ab79ebcb.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: {
                es: [
                    "Cuadros con marco cuadrado",
                    "Imágenes de personajes de Arcane",
                    "Diseños de alta calidad",
                    "Decoración temática de League of Legends"
                ],
                en: [
                    "Square-framed pictures",
                    "Images of Arcane characters",
                    "High quality designs",
                    "League of Legends themed decoration"
                ]
            }
        },
        {
            id: "cats-t-shirt-female",
            name: "Cats T-Shirt | Female",
            slug: "cats-t-shirt-female",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: {
                es: "Cats T-Shirt | Female es un mod que añade camisetas con diseños de gatos para Sims femeninas. Estas camisetas son perfectas para los amantes de los gatos y añaden un toque divertido al guardarropa de tus Sims.",
                en: "Cats T-Shirt | Female is a mod that adds t-shirts with cat designs for female Sims. These t-shirts are perfect for cat lovers and add a fun touch to your Sims' wardrobe."
            },
            shortDescription: {
                es: "Camisetas con diseños de gatos para Sims femeninas",
                en: "T-shirts with cat designs for female Sims"
            },
            curseForgeUrl: "https://www.curseforge.com/sims4/create-a-sim/cats-t-shirt-female",
            downloadCount: "1.2K",
            creationDate: "2025-02-24",
            mainImage: "https://media.forgecdn.net/avatars/thumbnails/1185/447/256/256/638759388512417620.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: {
                es: [
                    "Camisetas con diseños de gatos",
                    "Para Sims femeninas",
                    "Diseños divertidos y coloridos",
                    "Perfecto para amantes de los gatos"
                ],
                en: [
                    "T-shirts with cat designs",
                    "For female Sims",
                    "Fun and colorful designs",
                    "Perfect for cat lovers"
                ]
            }
        },
        {
            id: "valorant-t-shirt-vct-female",
            name: "Valorant T-Shirt VCT | Female",
            slug: "valorant-t-shirt-vct-female",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: {
                es: "Valorant T-Shirt VCT | Female es un mod que añade camisetas con diseños de equipos de esports de Valorant VCT para Sims femeninas. Estas camisetas son perfectas para los fans de Valorant y los esports.",
                en: "Valorant T-Shirt VCT | Female is a mod that adds t-shirts with Valorant VCT esports team designs for female Sims. These t-shirts are perfect for Valorant and esports fans."
            },
            shortDescription: {
                es: "Camisetas de equipos de Valorant VCT para Sims femeninas",
                en: "Valorant VCT team t-shirts for female Sims"
            },
            curseForgeUrl: "https://www.curseforge.com/sims4/create-a-sim/edit-valorant-t-shirt-vct-female",
            downloadCount: "874",
            creationDate: "2025-01-15",
            mainImage: "https://media.forgecdn.net/attachments/description/1206392/description_e5aca6a6-a3db-43fb-89df-50584e9dfa63.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: {
                es: [
                    "Camisetas de equipos de Valorant VCT",
                    "Para Sims femeninas",
                    "Diseños de equipos de esports",
                    "Perfecto para fans de Valorant"
                ],
                en: [
                    "Valorant VCT team t-shirts",
                    "For female Sims",
                    "Esports team designs",
                    "Perfect for Valorant fans"
                ]
            }
        },
        {
            id: "valorant-t-shirt-vct-male",
            name: "Valorant T-Shirt VCT | Male",
            slug: "valorant-t-shirt-vct-male",
            game: "sims4",
            versions: ["1.112.519", "1.112.481", "1.111.102"],
            author: "AgusTheKing",
            description: {
                es: "Valorant T-Shirt VCT | Male es un mod que añade camisetas con diseños de equipos de esports de Valorant VCT para Sims masculinos. Estas camisetas son perfectas para los fans de Valorant y los esports.",
                en: "Valorant T-Shirt VCT | Male is a mod that adds t-shirts with Valorant VCT esports team designs for male Sims. These t-shirts are perfect for Valorant and esports fans."
            },
            shortDescription: {
                es: "Camisetas de equipos de Valorant VCT para Sims masculinos",
                en: "Valorant VCT team t-shirts for male Sims"
            },
            curseForgeUrl: "https://www.curseforge.com/sims4/create-a-sim/valorant-t-shirt-vct-male",
            downloadCount: "874",
            creationDate: "2025-01-15",
            mainImage: "https://media.forgecdn.net/attachments/description/null/description_a7fd27c2-c869-4c3d-b681-d804d4497db0.png",
            gallery: [
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg",
                "../img/sims4/placeholder.svg"
            ],
            features: {
                es: [
                    "Camisetas de equipos de Valorant VCT",
                    "Para Sims masculinos",
                    "Diseños de equipos de esports",
                    "Perfecto para fans de Valorant"
                ],
                en: [
                    "Valorant VCT team t-shirts",
                    "For male Sims",
                    "Esports team designs",
                    "Perfect for Valorant fans"
                ]
            }
        }
    ]
};

// Exportar los datos para que sean accesibles desde otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { modsData };
}