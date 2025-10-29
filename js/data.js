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
                es: "Indexer es un mod que te ayuda a organizar y gestionar tus items. Este sistema de automatización te permite filtrar y distribuir automáticamente el contenido de tus cofres/contenedores, eliminando la necesidad de clasificar manualmente tus recursos. Con Indexer, puedes depositar todos tus items en un punto central y el sistema se encargará de distribuirlos a los contenedores apropiados según los filtros que hayas configurado, ahorrándote tiempo y manteniendo tu base perfectamente organizada.",
                en: "Indexer is a mod that helps you organize and manage your items. This automation system allows you to filter and automatically distribute the contents of your Chests/Containers, eliminating the need to manually sort your resources. With Indexer, you can deposit all your items at a central point and the system will take care of distributing them to the appropriate containers according to the filters you have configured, saving you time and keeping your base perfectly organized!"
            },
            shortDescription: {
                es: "Sistema de organización y gestión automática de items",
                en: "Automatic item organization and management system"
            },
            curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/indexer",
            modrinthUrl: "https://modrinth.com/mod/indexer",
            downloadCount: "34K",
            creationDate: "Jul 6, 2025",
            mainImage: "https://media.forgecdn.net/attachments/description/1301365/description_ebef8487-441d-4a30-8cbb-377951845cb9.png",
            gallery: [
                "https://media.forgecdn.net/attachments/description/1301365/description_ebef8487-441d-4a30-8cbb-377951845cb9.png",
                "https://media.forgecdn.net/attachments/description/1301365/description_d40c441a-a58c-4d5c-95c9-3c15f3ec2103.png",
                "https://media.forgecdn.net/attachments/description/1301365/description_04049f06-8ea9-44be-907c-4bd27f4206a2.png",
                "https://media.forgecdn.net/attachments/description/1301365/description_4e87e266-8fe0-4bb6-9d2b-e75cfc8876c8.png",
                "https://media.forgecdn.net/attachments/description/1301365/description_c0a9d64b-e47c-488d-9a86-13ac4e230701.png",
                "https://media.forgecdn.net/attachments/description/1301365/description_84d6d099-80ae-49c7-8586-341e21f846bc.png",
                "https://media.forgecdn.net/attachments/description/1301365/description_6f0bc766-4682-452c-b331-13b5872e7b48.png",
                "https://media.forgecdn.net/attachments/description/1301365/description_803eb2df-1b1a-411f-b822-fd212bc4dbf5.png"
            ],
            features: {
                es: [
                    "Controlador Indexer: El cerebro del sistema que detecta conectores hasta a 250 bloques de distancia",
                    "Tubería Indexer: Conecta el controlador con los conectores formando la red de distribución",
                    "Conector Indexer: Configurable con filtros específicos para determinar qué items aceptará",
                    "DropBox: Contenedor especial donde depositas los items para clasificar",
                    "Mejoras de velocidad para transferir más items por ciclo"
                ],
                en: [
                    "Indexer Controller: The brain of the system that detects connectors up to 250 blocks away",
                    "Indexer Pipe: Connects the controller with connectors forming the distribution network",
                    "Indexer Connector: Configurable with specific filters to determine which items it will accept",
                    "DropBox: Special container where you deposit items to be sorted",
                    "Speed upgrades to transfer more items per cycle"
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
                        es: "El componente principal para controlar el sistema de crafteo automático.",
                        en: "The main component to control the automatic crafting system."
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
                    name: "Conector Indexer",
                    image: "../img/minecraft/item/indexer_connector_front.png",
                    description: {
                        es: "Conector que permite la interacción entre componentes del sistema Indexer para la clasificación automática de items.",
                        en: "Connector that allows interaction between Indexer system components for automatic item sorting."
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
                        es: "Tuberías que transportan los items entre los componentes del sistema.",
                        en: "Pipes that transport items between system components."
                    },
                    recipe: {
                        pattern: [
                            "II",
                            "  ",
                            "  "
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
                        es: "Contenedor especial donde depositas los items para clasificar.",
                        en: "Special container where you deposit items to be sorted."
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
                        es: "Aumenta la velocidad de transferencia de items por ciclo x4.",
                        en: "Increases the transfer speed of items per cycle x4."
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
                    name: "Transfer Speed Upgrade Advanced",
                    image: "../img/minecraft/item/transfer_speed_upgrade_advanced.png",
                    description: {
                        es: "Filtro avanzado con mayor capacidad x10.",
                        en: "Advanced filter with greater capacity x10."
                    },
                    recipe: {
                        pattern: [
                            "DDD",
                            "DBD",
                            "DDD"
                        ],
                        key: {
                            D: "diamond",
                            B: "transfer_speed_upgrade_basic"
                        },
                        result: "1 Transfer Speed Upgrade Advanced"
                    }
                },
                {
                    name: "Transfer Speed Upgrade Elite",
                    image: "../img/minecraft/item/transfer_speed_upgrade_elite.png",
                    description: {
                        es: "Filtro Elite con mayor capacidad x20..",
                        en: "Elite filter with greater capacity x20."
                    },
                    recipe: {
                        pattern: [
                            "NNN",
                            "NAN",
                            "NNN"
                        ],
                        key: {
                            N: "netherite_ingot",
                            A: "transfer_speed_upgrade_advanced"
                        },
                        result: "1 Transfer Speed Upgrade Elite"
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
                        es: "Guía completa sobre cómo configurar y utilizar el sistema Indexer para la organización automática de items.",
                        en: "Complete guide on how to set up and use the Indexer system for automatic item organization."
                    },
                    recipe: {
                        pattern: [
                            "BC",
                            "P",
                            ""
                        ],
                        key: {
                            C: "chest",
                            B: "book",
                            P: "indexer_pipeitem"
                        },
                        result: "1 Indexer Manual"
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