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
    title: 'El Código del Superintestino',
    category: 'Salud Intestinal',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
    isLocked: false,
    description: 'Guía enfocada en la desinflamación del cuerpo a través del "segundo cerebro".',
    duration: 'Guía',
    guideDetails: [
      {
        title: "El Segundo Cerebro",
        blocks: [
          { type: 'text', content: "Tu intestino regula gran parte de tu sistema inmunológico y producción de neurotransmisores. Un intestino inflamado es la causa principal de la 'niebla mental'." },
          { type: 'subtitle', title: "Protocolo de Desinflamación" },
          { type: 'list', items: [
            "Ayuno intermitente ligero (12/12) para descanso digestivo.",
            "Eliminación de aceites vegetales procesados por 14 días.",
            "Consumo de caldos de huesos ricos en colágeno para sellar la pared intestinal."
          ]},
          { type: 'subtitle', title: "Probióticos Accesibles" },
          { type: 'recipe_card', title: "Kéfir y Chucrut Casero", content: "Alimentos fermentados que puedes preparar en casa con repollo, agua y sal. Repueblan tu microbiota de forma económica." },
          { type: 'warning', title: "Salud Cardiovascular", content: "Un intestino sano reduce la inflamación sistémica, protegiendo tus arterias y mejorando la circulación hacia el cerebro." }
        ]
      }
    ]
  },
  {
    id: 'b2',
    title: '101 Curas Herbales',
    category: 'Remedios Naturales',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1936&auto=format&fit=crop',
    isLocked: false,
    description: 'Enciclopedia de remedios naturales y sustitutos caseros para una vida sin químicos.',
    duration: 'Guía',
    guideDetails: [
      {
        title: "Botica de la Tierra",
        blocks: [
          { type: 'text', content: "Sustituye medicamentos comunes por soluciones que crecen en la tierra. Ingredientes fáciles de hallar en ferias y tiendas naturales." },
          { type: 'recipe_card', title: "Presión Alta y Colesterol", content: "Té de Hibisco con Alpiste: 1 cda de cada uno en 500ml de agua. Tomar durante el día." },
          { type: 'recipe_card', title: "Dores en Juntas (Artrite)", content: "Compresas de Jengibre y Romero: Infusión concentrada aplicada con paños tibios sobre la zona afectada." },
          { type: 'recipe_card', title: "Baja Libido (Vigor Natural)", content: "Mezcla de Maca Peruana con Cacao puro. Tomar una cucharada por la mañana en tu bebida favorita." }
        ]
      }
    ]
  },
  {
    id: 'b3',
    title: 'Memory Pulse',
    category: 'Terapia Sonora',
    image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1964&auto=format&fit=crop',
    isLocked: false,
    description: 'Terapia sonora digital con frecuencias de Ondas Gama para activar el foco.',
    duration: 'Audio (8 min)',
    guideDetails: [
      {
        title: "Activación Neuronal",
        blocks: [
          { type: 'text', content: "Este audio de 8 minutos utiliza frecuencias binaurales Gama (30Hz-100Hz) para sincronizar ambos hemisferios cerebrales." },
          { type: 'tip', title: "Instrucción de Uso", content: "Escuchar por la mañana con auriculares. Ayuda a 'limpiar' la mente de residuos del sueño y activa el foco máximo para el resto del día." },
          { type: 'recipe_card', title: "Pulso de la Memoria", content: "Archivo de audio digital: Sincronización de Ondas Gama para foco profundo." }
        ]
      }
    ]
  }
];

export const LOCKED_CONTENT: Product[] = [];

export const MOTIVATIONAL_QUOTES = [
  "Pequeños pasos, grandes transformaciones.",
  "Tu cuerpo es tu templo, cuídalo con amor.",
  "La constancia es la clave del éxito.",
  "Hoy es un gran día para ser tu mejor versión.",
  "Cree en ti y en tu proceso.",
  "La disciplina te llevará donde la motivación no alcanza.",
  "Un hábito saludable a la vez."
];
