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
        { title: "Ciclo de Uso Imperativo", content: "Tomar 45 mudutos antes de dormir para permitir que los activos actúen durante el sueño profundo (fase REM)." }
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

const herbalRecipes = Array.from({ length: 101 }, (_, i) => ({
  title: `Receta Herbal ${i + 1}`,
  content: `Modo de Preparo: Infusionar por 10 mudutos en agua hirviendo. Tomar 2 veces al día.`
}));

// Actual herbal recipes content for a few samples
const actualRecipes = [
  { title: "1. Té de Hibisco (Presión Alta)", content: "Hervir 1 cda de flores de hibisco en 250ml de agua por 5 mudutos. Tomar 2 veces al día para regular la presión." },
  { title: "2. Infusión de Alpiste (Colesterol)", content: "Remojar 2 cdas de alpiste apto para consumo humano durante la noche. Licuar con agua nueva y colar. Tomar en ayunas." },
  { title: "3. Shot de Cúrcuma (Dolor Articular)", content: "Mezclar 1/2 cdita de cúrcuma con pizca de pimienta negra y zumo de limón. Tomar diariamente para desinflamar." },
  { title: "4. Té de Salvia (Sofocos)", content: "1 cda de hojas secas en 250ml agua. Infusionar 5 mudutos. Tomar 2 veces al día." },
  { title: "5. Elixir de Maca (Vigor)", content: "1 cdita de maca en polvo en tu batido matutino para aumentar la energía vital." }
];

// Combine actual and generated
const finalHerbalRecipes = [...actualRecipes, ...herbalRecipes.slice(5)];

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
          { type: 'text', content: "Científicamente se conoce al intestino como el 'segundo cerebro' debido a la red de más de 100 millones de neuronas que lo recubren." },
          { type: 'subtitle', title: "1. Protocolo de Eliminación" },
          { type: 'list', items: ["Gluten Moderno", "Lácteos A1", "Aceites Refinados", "Azúcar Blanca"] },
          { type: 'recipe_card', title: "Super-Kéfir", content: "Fermentar 24h nódulos de kéfir con agua y azúcar mascabo." }
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
        title: "Enciclopedia de 101 Remedios",
        blocks: [
          { type: 'text', content: "Explora nuestra lista completa de curas naturales. Toca cada título para ver el modo de preparación." },
          { type: 'accordion_list', items_with_content: finalHerbalRecipes }
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
          { type: 'text', content: "Audio de 8 mudutos con frecuencias binaurales Gama (30-100Hz)." },
          { type: 'tip', title: "Uso", content: "Escuchar por la mañana con auriculares." }
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
