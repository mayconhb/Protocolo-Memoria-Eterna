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
    description: 'Protocolo maestro para restaurar tu microbiota y eliminar la inflamación sistémica.',
    duration: 'Guía Avanzada',
    guideDetails: [
      {
        title: "La Conexión Intestino-Cerebro",
        blocks: [
          { type: 'text', content: "Científicamente se conoce al intestino como el 'segundo cerebro' debido a la red de más de 100 millones de neuronas que lo recubren. Si tu intestino está inflamado, tu cerebro también lo estará, manifestándose como fatiga mental, falta de concentración y pérdida de memoria a corto plazo." },
          { type: 'subtitle', title: "1. El Protocolo de Eliminación (14 Días)" },
          { type: 'text', content: "Durante las próximas dos semanas, eliminaremos los 'Agresores Silenciosos' que perforan la pared intestinal:" },
          { type: 'list', items: [
            "Gluten Moderno: Proteína altamente inflamatoria en trigos procesados.",
            "Lácteos de A1: Sustituir por leche de coco, almendras o cabra.",
            "Aceites de Semillas Refinados: Girasol, canola y soja (altos en Omega-6).",
            "Azúcar Blanca: Alimento principal para las bacterias patógenas."
          ]},
          { type: 'subtitle', title: "2. La Alquimia Probiótica Casera" },
          { type: 'recipe_card', title: "Super-Kéfir de Agua", content: "Ingredientes: 1 litro de agua mineral, 3 cucharadas de nódulos de kéfir, 2 cucharadas de azúcar mascabo. Fermentar 24h a temperatura ambiente. Rico en más de 30 cepas de bacterias beneficiosas." },
          { type: 'recipe_card', title: "Chucrut Terapéutico", content: "Ingredientes: Repollo morado y sal marina. Masajear el repollo hasta que suelte su jugo, compactar en frasco y dejar 10 días. Repuebla la microbiota instantáneamente." },
          { type: 'subtitle', title: "3. Blindaje Cardiovascular" },
          { type: 'text', content: "Un intestino sano evita que las endotoxinas entren al torrente sanguíneo. Esto reduce la rigidez arterial y protege tu corazón, asegurando que el flujo de oxígeno al cerebro sea óptimo y constante." }
        ]
      }
    ]
  },
  {
    id: 'b2',
    title: '101 Curas Herbales',
    category: 'Farmacia Natural',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1936&auto=format&fit=crop',
    isLocked: false,
    description: 'La enciclopedia definitiva de remedios ancestrales para recuperar tu salud sin químicos.',
    duration: 'Enciclopedia Digital',
    guideDetails: [
      {
        title: "Sustitutos Naturales Poderosos",
        blocks: [
          { type: 'text', content: "Aprende a utilizar las plantas no solo como condimentos, sino como medicina activa. Estos remedios han sido utilizados por milenios con eficacia comprobada." },
          { type: 'subtitle', title: "Control de Presión y Colesterol" },
          { type: 'recipe_card', title: "Infusión 'Arteria Limpia'", content: "Hervir 1 rama de canela, 1 cda de hojas de olivo y un puñado de barbas de maíz en 1 litro de agua. Tomar 2 tazas al día. El olivo actúa como un vasodilatador natural potente." },
          { type: 'subtitle', title: "Protocolo para Artritis y Dolor Articular" },
          { type: 'text', content: "La inflamación en las juntas suele ser el resultado de un exceso de ácido úrico y falta de lubricación sinovial." },
          { type: 'recipe_card', title: "Shot de Oro Líquido", content: "Zumo de 1 limón, 1 cdita de jengibre fresco rallado, 1/2 cdita de cúrcuma y una pizca de pimienta negra. Tomar en ayunas para desinflamar las articulaciones." },
          { type: 'subtitle', title: "Vigor y Libido (Energía Vital)" },
          { type: 'recipe_card', title: "Elixir de Maca y Ginseng", content: "Mezclar 1 cdita de Maca Peruana negra con una pizca de Ginseng en polvo en tu café o batido matutino. Mejora el flujo sanguíneo y la resistencia física." }
        ]
      }
    ]
  },
  {
    id: 'b3',
    title: 'Memory Pulse',
    category: 'Biohacking Sonoro',
    image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1964&auto=format&fit=crop',
    isLocked: false,
    description: 'Entrenamiento cerebral mediante ondas gama para alcanzar niveles máximos de enfoque.',
    duration: 'Terapia Binaural',
    guideDetails: [
      {
        title: "Ingeniería de Ondas Cerebrales",
        blocks: [
          { type: 'text', content: "El estado de 'Foco Total' ocurre cuando el cerebro emite Ondas Gama (30-100Hz). Esta terapia sonora utiliza pulsos binaurales para 'arrastrar' tus neuronas a esta frecuencia de alto rendimiento." },
          { type: 'subtitle', title: "Cómo funciona el Audio de 8 Minutos" },
          { type: 'text', content: "El audio contiene frecuencias sutilmente diferentes en cada oído. Tu cerebro crea una tercera frecuencia interna (el pulso) que sincroniza ambos hemisferios cerebrales, eliminando la procrastinación." },
          { type: 'tip', title: "El Ritual de la Mañana", content: "Siéntate en un lugar tranquilo, usa auriculares de buena calidad y cierra los ojos. Escucha el audio completo antes de empezar tu trabajo o estudio. Sentirás una claridad mental inmediata, como si se 'limpiara' el ruido residual de la noche." },
          { type: 'recipe_card', title: "Frecuencia Maestra: 40Hz", content: "Estudios muestran que la frecuencia de 40Hz es clave para la consolidación de la memoria y la limpieza de placas beta-amiloides en el cerebro." }
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
