import { Product } from './types';

import protocoloDesinflamacionImg from '@assets/crie+uma+i (1)_1764195608015.png';
import registroEvolucionImg from '@assets/Screenshot_82_1764195648912.png';
import planAnticelulitisImg from '@assets/Fisioponto_tratamentos_Massagem_anticelulite_Bodyslim_1764195790548.png';
import quemaGrasaDuermesImg from '@assets/Screenshot_83_1764195842878.png';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Protocolo Memoria Eterna',
    category: 'Receta',
    image: '/attached_assets/generated_images/cinematic_glowing_brain_neural_network.png',
    isLocked: false,
    description: 'Guía prática con la receita y el método de uso del tónico cerebral para potenciar tu memoria.',
    duration: 'Ritual diario',
    lessons: 0,
    recipeDetails: {
      ingredients: [
        "Miel Pura (Vehículo de absorción)",
        "Cúrcuma en Polvo (Raíz Dourada - Antiinflamatoria)",
        "Ashwagandha en Polvo (Raíz Maestra - Anti-stress)",
        "Agua tibia o leche vegetal (base)"
      ],
      preparation: [
        { title: "La Lista de Compras Sagrada", step: "Asegúrate de conseguir miel orgánica pura, cúrcuma de alta calidad y ashwagandha en polvo auténtica." },
        { title: "Medidas de Ingeniería Reversa", step: "Mezcla 1 cucharada de miel con 1/2 cucharadita de cúrcuma e una pizca generosa de ashwagandha." },
        { title: "El Ritual de 57 Segundos", step: "Mezcla los polvos con la miel enérgicamente durante 57 segundos. Este movimento sensorial 'activa' los compuestos antes de añadir el líquido tibio." },
        { title: "Disolución Final", step: "Añade el agua tibia o leche vegetal y revuelve suavemente hasta que sea homogéneo." }
      ],
      usage: [
        { title: "Ciclo de Uso Imperativo", content: "Tomar 45 minutos antes de dormir para permitir que los activos actúen durante el sueño profundo (fase REM)." }
      ],
      tips: [],
      variants: [],
      warnings: [],
      benefits: [
        "Sinergia Cognitiva: La combinación de curcumina y ashwagandha reduce el cortisol, permitiendo que el cerebro regenere conexiones neuronales.",
        "Limpieza Glinfática: Durante el sueño REM, este tónico ayuda a filtrar las toxinas acumuladas durante el día.",
        "Bio-Disponibilidad: El vehículo de miel pura asegura que los nutrientes lleguen rápidamente al torrente sanguíneo.",
        "Paz Mental: Reduce la ansiedad nocturna, preparando el terreno para una memoria cristalina al despertar."
      ]
    }
  }
];

export const BONUSES: Product[] = [
  {
    id: 'b1',
    title: 'Reset Hormonal',
    category: 'Menopausia',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    isLocked: false,
    description: 'Hábitos, infusiones y ajustes simples para equilibrar hormonas, reducir hinchazón y mejorar energía.',
    duration: 'Guía',
    guideDetails: [
      {
        title: "Introducción",
        blocks: [
          { type: 'text', content: "La menopausia no es el fin de tu vitalidad. Con pequeños ajustes en la alimentación y estilo de vida, es posible reducir los sofocos, la hinchazón abdominal y recuperar tu energía natural." }
        ]
      },
      {
        title: "Infusiones Aliadas",
        blocks: [
          { type: 'subtitle', title: "Salvia para los Sofocos" },
          { type: 'recipe_card', title: "Té de Salvia y Limón", content: "1 cucharada de hojas de salvia secas + 250ml de agua. Infusionar 5 min. Tomar frío o caliente, 2 veces al día." },
          { type: 'subtitle', title: "Trébol Rojo para el Equilibrio" },
          { type: 'text', content: "Rico en isoflavonas, ayuda a imitar suavemente el estrógeno en el cuerpo. Tomar 1 taza al día por la mañana." },
          { type: 'subtitle', title: "Té de Maca Peruana" },
          { type: 'recipe_card', title: "Maca Energy", content: "1 cdita de maca en polvo disuelta en 200ml de agua caliente o leche vegetal. Ayuda con la libido y energía." }
        ]
      },
      {
        title: "Hábitos Clave",
        blocks: [
          { type: 'list', items: [
            "Reduce el café: La cafeína puede disparar los sofocos.",
            "Cena ligero: Evita carbohidratos pesados por la noche para mejorar el sueño.",
            "Semillas de Lino: Consume 1 cucharada molida al día para apoyo hormonal.",
            "Magnesio antes de dormir: Ayuda a relajar los músculos y mejora el descanso."
          ]}
        ]
      }
    ]
  },
  {
    id: 'b2',
    title: 'Detox 3 Días',
    category: 'Post-Excesos',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
    isLocked: false,
    description: 'Un plan exprés para desinflamar y limpiar el cuerpo después de fines de semana, fiestas o comidas pesadas.',
    duration: 'Protocolo',
    guideDetails: [
      {
        title: "Estrategia General",
        blocks: [
          { type: 'text', content: "Este no es un plan de hambre, sino de limpieza. Eliminaremos alimentos inflamatorios (azúcar, harina, lácteos) e aumentaremos la hidratación y fibra." },
          { type: 'warning', title: "Regla de Oro", content: "Bebe al menos 3 litros de líquido al día (agua, tés, caldos) durante estos 3 días." }
        ]
      },
      {
        title: "Día 1: Drenaje",
        blocks: [
          { type: 'list', items: [
            "Ayuno de 12 horas (cena a las 20h, desayuno a las 8h).",
            "Desayuno: Batido verde (espinaca, pepino, manzana verde, limón).",
            "Almuerzo: Ensalada gigante con pollo a la plancha o pescado.",
            "Cena: Sopa de verduras depurativa (apio, cebolla, calabacín)."
          ]}
        ]
      },
      {
        title: "Día 2: Restauración",
        blocks: [
          { type: 'text', content: "Introducimos grasas saludables y probióticos." },
          { type: 'list', items: [
            "Desayuno: Huevos revueltos con espinacas.",
            "Merienda: Puñado de nueces o almendras.",
            "Cena: Crema de calabaza con jengibre (sin crema de leche)."
          ]}
        ]
      },
      {
        title: "Día 3: Activación",
        blocks: [
          { type: 'tip', title: "Movimiento", content: "Añade 20 minutos de caminata rápida hoy para reactivar el metabolismo." },
          { type: 'recipe_card', title: "Caldo Depurativo", content: "Hervir: 2L agua, 2 ramas apio, 1 cebolla, 1 manojo perejil. Colar y beber el líquido durante el día." }
        ]
      }
    ]
  },
  {
    id: 'b3',
    title: '20 Tés Adelgazantes',
    category: 'Infusiones',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1936&auto=format&fit=crop',
    isLocked: false,
    description: 'Selección premium de 20 infusiones naturales para acelerar el metabolismo, drenar líquidos y reducir inflamación.',
    duration: 'Guía',
    guideDetails: [
      {
        title: "1. Tés Termogénicos (Aceleran Metabolismo)",
        blocks: [
          { type: 'recipe_card', title: "Té Verde con Jengibre", content: "1 saquito de té verde + 1 cm de jengibre. Infusionar 3 min. Tomar antes de entrenar." },
          { type: 'recipe_card', title: "Té de Canela y Clavo", content: "1 rama de canela + 3 clavos en 250ml agua hirviendo. Reposar 10 min. Reduce el azúcar en sangre." },
          { type: 'recipe_card', title: "Té Oolong (Azul)", content: "2g de té oolong en agua a 90°C por 3 min. Oxida grasas eficientemente." },
          { type: 'recipe_card', title: "Té Matcha", content: "1/2 cdita matcha en 60ml agua caliente. Batir hasta espumar. Completar con agua. Antioxidante potente." },
          { type: 'recipe_card', title: "Té de Pimienta Cayena", content: "Agua tibia, jugo de medio limón y una pizca de cayena. Activa la termogénesis." },
          { type: 'recipe_card', title: "Té Negro con Limón", content: "Té negro cargado con rodajas de limón. Energizante matutino sustituto del café." }
        ]
      },
      {
        title: "2. Tés Diuréticos (Deshinchan)",
        blocks: [
          { type: 'recipe_card', title: "Cola de Caballo", content: "1 cda de hierba seca en 250ml agua hirviendo. Reposar 5 min. Potente drenante." },
          { type: 'recipe_card', title: "Té de Hibisco", content: "1 cda de flores secas en agua caliente. Reposar 5 min. Baja la presión y deshincha." },
          { type: 'recipe_card', title: "Pelo de Elote (Maíz)", content: "Hervir un puñado de pelo de elote en 500ml agua por 10 min. Limpia vías urinarias." },
          { type: 'recipe_card', title: "Diente de León", content: "1 cda de raíz o hojas secas. Infusionar 10 min. Apoyo hepático y renal." },
          { type: 'recipe_card', title: "Té de Perejil", content: "1 rama fresca en agua hirviendo. Reposar 15 min. Elimina retención severa." },
          { type: 'recipe_card', title: "Té de Piña", content: "Hervir cáscaras de piña lavadas con canela por 20 min. Colar y beber frío o caliente." },
          { type: 'recipe_card', title: "Té de Alcachofa", content: "Hervir hojas de alcachofa 15 min. Sabor amargo, excelente para el hígado graso." }
        ]
      },
      {
        title: "3. Tés Digestivos y Relax (Vientre Plano)",
        blocks: [
          { type: 'recipe_card', title: "Menta Piperita", content: "Hojas frescas o secas infusionadas 5 min. Elimina gases instantaneamente." },
          { type: 'recipe_card', title: "Hinojo", content: "1 cdita de semillas machacadas. Infusionar 5 min. Reduce hinchazón abdominal." },
          { type: 'recipe_card', title: "Manzanilla y Anís", content: "Mezcla clásica para relajar el estómago después de comidas pesadas." },
          { type: 'recipe_card', title: "Té de Melisa", content: "Relaja el sistema nervoso e digestivo. Ideal para el estrés que causa hinchazón." },
          { type: 'recipe_card', title: "Té de Rooibos", content: "Sin teína, dulce natural. Rico en minerales y digestivo." },
          { type: 'recipe_card', title: "Té de Jengibre y Limón", content: "Rodajas de jengibre hervidas 5 min + jugo de limón. Antiinflamatorio digestivo." },
          { type: 'recipe_card', title: "Té de Cúrcuma (Golden Tea)", content: "1/2 cdita cúrcuma + pimienta negra + leite vegetal. Antiinflamatorio potente." }
        ]
      }
    ]
  },
  {
    id: 'b4',
    title: '15 Jugos Detox',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1974&auto=format&fit=crop',
    isLocked: false,
    description: '15 combinaciones poderosas para deshinchar en 24 horas y mejorar la digestión y energía.',
    duration: 'Recetas',
    guideDetails: [
      {
        title: "Jugos Verdes (Oxigenación y Limpieza)",
        blocks: [
          { type: 'recipe_card', title: "1. El Clásico Glow", content: "1 pepino + 1 manzana verde + 1 tallo apio + limón + jengibre. Licuar con agua." },
          { type: 'recipe_card', title: "2. Súper Alcalino", content: "2 tazas espinaca + 1/2 pepino + perejil + 1 limón. Base de agua." },
          { type: 'recipe_card', title: "3. Detox Intestinal", content: "1 hoja aloe vera (gel) + 1/2 papaya + 1 naranja. Licuar bien." },
          { type: 'recipe_card', title: "4. Adiós Retención", content: "2 ramas apio + 1 manojo perejil + 1/2 piña + agua. Potente diurético." },
          { type: 'recipe_card', title: "5. Energía Pura", content: "1 manzana verde + 1 kiwi + 1 puñado espinaca + agua de coco." }
        ]
      },
      {
        title: "Jugos Rojos y Naranjas (Piel y Circulación)",
        blocks: [
          { type: 'recipe_card', title: "6. Bomba Vitamina C", content: "2 zanahorias + 1 naranja + 1/2 cdita cúrcuma. Antiinflamatorio." },
          { type: 'recipe_card', title: "7. Circulación Total", content: "1 remolacha pequeña + 1 zanahoria + 1 manzana + limón. Mejora fluxo sanguíneo." },
          { type: 'recipe_card', title: "8. Piel Radiante", content: "2 zanahorias + 1/2 pimiento rojo + 1 naranja. Rico en betacarotenos." },
          { type: 'recipe_card', title: "9. Antioxidante Berry", content: "1 taza frutos rojos + 1/2 remolacha + agua de coco." },
          { type: 'recipe_card', title: "10. Anti-Inflamatorio Dulce", content: "1 rodaja piña + 1 trozo cúrcuma raíz + 1 zanahoria." }
        ]
      },
      {
        title: "Jugos Especiales y Shots Largos",
        blocks: [
          { type: 'recipe_card', title: "11. Hidratación Extrema", content: "1 pepino + 1 rodaja sandía + menta. Súper refrescante." },
          { type: 'recipe_card', title: "12. Digestión de Hierro", content: "1/2 piña + 1 cm jengibre + 1 cdita semillas hinojo (infusionadas previamente)." },
          { type: 'recipe_card', title: "13. Inmunidad Plus", content: "2 kiwis + 1 naranja + 1 limón + 1 cdita miel." },
          { type: 'recipe_card', title: "14. Metal Pesado Detox", content: "1 manojo cilantro + 1 manzana verde + 1 limón + agua." },
          { type: 'recipe_card', title: "15. Relax Nocturno", content: "1 hoja lechuga + 1 manzana + té de manzanilla frío como base." }
        ]
      }
    ]
  },
  {
    id: 'b5',
    title: '10 Shots Turbo',
    category: 'Rutina',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1926&auto=format&fit=crop',
    isLocked: false,
    description: '10 Shots rápidos y potentes con jengibre, cúrcuma, limón y más para activar el cuerpo desde temprano.',
    duration: '5 min/día',
    guideDetails: [
      {
        title: "Shots para la Mañana (Ayunas)",
        blocks: [
          { type: 'recipe_card', title: "1. Despertar Picante", content: "Jugo 1 limón + Pizca pimienta cayena + 1 cdita miel." },
          { type: 'recipe_card', title: "2. Anti-Inflamación Oro", content: "Jugo 1 naranja + 1 cdita cúrcuma pó + Pizca pimienta negra + 1 cdita aceite oliva." },
          { type: 'recipe_card', title: "3. Digestión Total", content: "Jugo 1 limón + 1 cdita vinagre manzana + 20ml agua tibia." },
          { type: 'recipe_card', title: "4. Inmunidad Verde", content: "Jugo jengibre (exprímelo) + Jugo limón + Pizca sal marina." },
          { type: 'recipe_card', title: "5. Energy Boost", content: "Jugo pomelo + 1/2 cdita Guaraná o Matcha." }
        ]
      },
      {
        title: "Shots Específicos",
        blocks: [
          { type: 'recipe_card', title: "6. Adiós Resfriado", content: "1 diente ajo machacado + limón + miel. (Tragar rápido)." },
          { type: 'recipe_card', title: "7. Piel Limpia", content: "2 cdas Aloe Vera jugo + limón + clorofila líquida." },
          { type: 'recipe_card', title: "8. Post-Comida Pesada", content: "2 cdas vinagre manzana + agua con gas + limón." },
          { type: 'recipe_card', title: "9. Recuperación Muscular", content: "Jugo de cereza concentrado (tart cherry) o remolacha concentrada." },
          { type: 'recipe_card', title: "10. Alcalinizante", content: "Jugo de pasto de trigo (wheatgrass) o espirulina en agua con limón." }
        ]
      }
    ]
  },
  {
    id: 'b6',
    title: '15 Postres Fit',
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1935&auto=format&fit=crop',
    isLocked: false,
    description: '15 Dulces deliciosos, bajos en calorías y con ingredientes inteligentes para controlar ansiedad por azúcar.',
    duration: 'Recetario',
    guideDetails: [
      {
        title: "Chocolatosos",
        blocks: [
          { type: 'recipe_card', title: "1. Mousse de Aguacate", content: "Licuar 1 aguacate + 3 cdas cacao + estevia + chorrito leite vegetal. Enfriar." },
          { type: 'recipe_card', title: "2. Trufas de Energía", content: "Procesar 1 taza dátiles + 1/2 taza nueces + 2 cdas cacao. Formar bolitas." },
          { type: 'recipe_card', title: "3. Brownie Express", content: "1 huevo + 1 banana + 2 cdas cacao + 1 cdita polvo hornear. Microondas 2 min." },
          { type: 'recipe_card', title: "4. Chocolate Caliente Fit", content: "Leite almendras + 1 cda cacao + canela + estevia. Calentar sin hervir." },
          { type: 'recipe_card', title: "5. Bark de Yogurt", content: "Extender yogurt griego en bandeja, agregar chips chocolate 70% e fresas. Congelar." }
        ]
      },
      {
        title: "Frutales y Frescos",
        blocks: [
          { type: 'recipe_card', title: "6. Helado de 1 Ingrediente", content: "Congelar bananas en rodajas. Procesar hasta cremosidad. Opcional: canela." },
          { type: 'recipe_card', title: "7. Gelatina de Yogurt", content: "Mezclar yogurt griego con semillas chía y vainilla. Reposar noche. Top con berries." },
          { type: 'recipe_card', title: "8. Manzanas Asadas", content: "Hornear manzanas con canela e nueces por 20 min. Servir con yogurt." },
          { type: 'recipe_card', title: "9. Brochetas de Fruta", content: "Uvas y fresas bañadas en chocolate 70% derretido. Enfriar." },
          { type: 'recipe_card', title: "10. Sorbet de Mango", content: "Procesar mango congelado con jugo de limón y menta." }
        ]
      },
      {
        title: "Horneados y Otros",
        blocks: [
          { type: 'recipe_card', title: "11. Cookies de Avena", content: "1 banana + 1 taza avena + pasas. Mezclar, formar galletas, hornear 15 min." },
          { type: 'recipe_card', title: "12. Mugcake de Zanahoria", content: "1 huevo + 2 cdas harina avena + zanahoria rallada + canela. Microondas 90 seg." },
          { type: 'recipe_card', title: "13. Panqueques de Banana", content: "2 huevos + 1 banana pisada. Mezclar y cocinar en sartén." },
          { type: 'recipe_card', title: "14. 'Cheesecake' en Vaso", content: "Base de nueces molidas + Capa de yogurt con limón y estevia + Capa de mermelada s/azúcar." },
          { type: 'recipe_card', title: "15. Bolitas de Coco", content: "Clara de huevo + coco rallado + estevia. Hornear hasta dorar." }
        ]
      }
    ]
  },
  {
    id: 'b7',
    title: 'Plan Anticelulitis',
    category: 'Estética',
    image: planAnticelulitisImg,
    isLocked: false,
    description: 'Estrategia de drenaje natural, alimentos clave y técnicas anti-inflamación para reducir visiblemente la celulitis.',
    duration: '1 Semana',
    guideDetails: [
      {
        title: "Los 3 Pilares",
        blocks: [
          { type: 'text', content: "La celulitis es inflamación e retención. Para atacarla necesitamos: 1) Dieta Limpia, 2) Hidratación, 3) Estimulación Local." }
        ]
      },
      {
        title: "Alimentación Estratégica",
        blocks: [
          { type: 'warning', title: "Enemigos #1", content: "Sal, azúcar refinada, alcohol y harinas blancas. Empeoran visiblemente la piel de naranja." },
          { type: 'list', items: [
            "Consume Potasio: Plátano, aguacate, agua de coco (ayuda a eliminar sodio).",
            "Frutos Rojos: Antioxidantes que mejoran la circulación.",
            "Proteína de calidad: Necesaria para el colágeno y firmeza."
          ]}
        ]
      },
      {
        title: "Técnicas Externas",
        blocks: [
          { type: 'subtitle', title: "Cepillado en Seco" },
          { type: 'text', content: "Usa um cepillo de cerdas naturales antes de la ducha. Realiza movimentos ascendentes hacia el corazón por 3 minutos." },
          { type: 'subtitle', title: "Automasaje de Drenaje" },
          { type: 'text', content: "Después de la ducha, aplica aceite de abedul o almendras. Usa los nudillos en círculos suaves e presión moderada." }
        ]
      }
    ]
  }
];

export const LOCKED_CONTENT: Product[] = [
  {
    id: 'l1',
    title: 'Mentoria Vip',
    category: 'Acompanhamento',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    isLocked: true
  },
  {
    id: 'l2',
    title: 'Protocolo Avançado',
    category: 'Treinamento',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    isLocked: true
  }
];

export const MOTIVATIONAL_QUOTES = [
  "Pequeños pasos, grandes transformaciones.",
  "Tu cuerpo es tu templo, cuídalo con amor.",
  "La constancia es la clave del éxito.",
  "Hoy es un gran día para ser tu mejor versión.",
  "Cree en ti y en tu proceso.",
  "La disciplina te llevará donde la motivación no alcanza.",
  "Un hábito saludable a la vez."
];
