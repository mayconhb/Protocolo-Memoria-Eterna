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

// Actual herbal recipes content for 101 recipes
const actualRecipes = [
  { title: "1. Té de Hibisco (Presión Alta)", content: "Ingredientes: 1 cda de flores de hibisco, 250ml de agua.\nModo de Preparo: Hervir el agua, añadir las flores y dejar reposar 5 minutos. Colar y tomar 2 veces al día." },
  { title: "2. Infusión de Alpiste (Colesterol)", content: "Ingredientes: 2 cdas de alpiste (apto consumo humano), 1 vaso de agua.\nModo de Preparo: Remojar el alpiste toda la noche. Por la mañana, descartar el agua, licuar las semillas con un vaso de agua limpia y colar. Tomar en ayunas." },
  { title: "3. Shot de Cúrcuma (Dolor Articular)", content: "Ingredientes: 1/2 cdita de cúrcuma, 1 pizca de pimienta negra, zumo de 1/2 limón.\nModo de Preparo: Mezclar bien todos los ingredientes en un vaso pequeño de agua. Tomar diariamente por la mañana." },
  { title: "4. Té de Salvia (Sofocos)", content: "Ingredientes: 1 cda de hojas de salvia secas, 250ml de agua.\nModo de Preparo: Infusionar las hojas en agua recién hervida durante 5-10 minutos. Tomar 2 tazas al día." },
  { title: "5. Elixir de Maca (Vigor)", content: "Ingredientes: 1 cdita de maca en polvo, 200ml de leche vegetal o batido.\nModo de Preparo: Mezclar la maca enérgicamente en el batido o leche hasta disolver. Tomar por las mañanas." },
  { title: "6. Infusión de Jengibre (Digestión)", content: "Ingredientes: 2 cm de raíz de jengibre fresca, 500ml de agua.\nModo de Preparo: Hervir el jengibre en rodajas por 10 minutos. Dejar reposar y tomar después de las comidas." },
  { title: "7. Té de Manzanilla (Ansiedad)", content: "Ingredientes: 1 cda de flores de manzanilla, 250ml de agua.\nModo de Preparo: Verter agua hirviendo sobre las flores, tapar y dejar 5 minutos. Tomar antes de dormir." },
  { title: "8. Jarabe de Cebolla y Miel (Tos)", content: "Ingredientes: 1 cebolla picada, 3 cdas de miel.\nModo de Preparo: Mezclar la cebolla con la miel y dejar reposar 12 horas. Colar el almíbar resultante y tomar 1 cda cada 4 horas." },
  { title: "9. Té de Boldo (Hígado)", content: "Ingredientes: 2-3 hojas de boldo, 200ml de agua.\nModo de Preparo: Machacar un poco las hojas, añadir agua caliente (no hirviendo) y dejar reposar 10 minutos. Tomar después del almuerzo." },
  { title: "10. Agua de Avena (Diabetes)", content: "Ingredientes: 1 taza de avena integral, 2 litros de agua.\nModo de Preparo: Remojar la avena 8 horas. Licuar con el agua y colar. Tomar un vaso antes de cada comida principal." },
  { title: "11. Té de Ortiga (Anemia)", content: "Ingredientes: 1 cdita de ortiga seca, 250ml de agua.\nModo de Preparo: Infusionar la ortiga en agua hirviendo por 10 minutos. Tomar una taza al día por 2 semanas." },
  { title: "12. Infusión de Valeriana (Insomnio)", content: "Ingredientes: 1 cdita de raíz de valeriana picada, 250ml de agua.\nModo de Preparo: Verter agua caliente sobre la raíz y dejar reposar 15 minutos tapado. Tomar 30 minutos antes de acostarse." },
  { title: "13. Té de Cola de Caballo (Retención)", content: "Ingredientes: 1 cda de cola de caballo, 500ml de agua.\nModo de Preparo: Hervir por 5 minutos, dejar reposar 10 y colar. Tomar durante la mañana." },
  { title: "14. Gárgaras de Salvia y Sal (Garganta)", content: "Ingredientes: 1 taza de infusión de salvia concentrada, 1/2 cdita de sal.\nModo de Preparo: Mezclar y realizar gárgaras 3 veces al día. No ingerir." },
  { title: "15. Té de Diente de León (Detox)", content: "Ingredientes: 1 cda de raíz o hojas, 250ml de agua.\nModo de Preparo: Hervir la raíz por 5 min o infusionar las hojas por 10 min. Tomar en ayunas." },
  { title: "16. Infusión de Menta (Gases)", content: "Ingredientes: 10 hojas de menta fresca, 250ml de agua.\nModo de Preparo: Infusionar las hojas machacadas en agua hirviendo por 5 minutos. Tomar tibio." },
  { title: "17. Té de Canela (Metabolismo)", content: "Ingredientes: 1 rama de canela, 250ml de agua.\nModo de Preparo: Hervir la rama por 5 minutos. Retirar del fuego, dejar reposar 5 min y tomar por la mañana." },
  { title: "18. Agua de Alcachofa (Grasa Abdominal)", content: "Ingredientes: 2 alcachofas frescas, 1 litro de agua.\nModo de Preparo: Hervir las alcachofas hasta que estén blandas. Beber el agua resultante durante el día." },
  { title: "19. Té de Eucalipto (Congestión)", content: "Ingredientes: 5 hojas de eucalipto, 500ml de agua.\nModo de Preparo: Hervir 2 minutos y realizar inhalaciones con el vapor. Luego tomar una taza de la infusión." },
  { title: "20. Infusión de Pasiflora (Estrés)", content: "Ingredientes: 1 cdita de pasiflora seca, 250ml de agua.\nModo de Preparo: Infusionar en agua hirviendo por 10 minutos. Tomar una taza por la tarde." },
  { title: "21. Té de Romero (Memoria)", content: "Ingredientes: 1 ramita de romero fresco, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos en agua hirviendo. Tomar una taza por la mañana." },
  { title: "22. Agua de Semillas de Chía (Tránsito Intestinal)", content: "Ingredientes: 1 cda de semillas de chía, 250ml de agua.\nModo de Preparo: Dejar reposar las semillas en el agua 30 minutos hasta que suelten el mucílago. Beber antes del desayuno." },
  { title: "23. Té de Tila (Palpitaciones)", content: "Ingredientes: 1 cda de flores de tila, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Tomar cuando se sienta nerviosismo o taquicardia leve." },
  { title: "24. Infusión de Tomillo (Infecciones Respiratorias)", content: "Ingredientes: 1 cdita de tomillo seco, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Añadir miel y limón si se desea. Tomar 3 veces al día." },
  { title: "25. Té de Anís Estrellado (Cólicos)", content: "Ingredientes: 2 piezas de anís estrellado, 250ml de agua.\nModo de Preparo: Hervir por 5 minutos y dejar reposar otros 5. Tomar después de comer." },
  { title: "26. Agua de Coco y Limón (Rehidratación)", content: "Ingredientes: 250ml de agua de coco fresca, zumo de 1/2 limón.\nModo de Preparo: Mezclar y beber inmediatamente después de realizar ejercicio o en días calurosos." },
  { title: "27. Té de Regaliz (Gastritis)", content: "Ingredientes: 1/2 cdita de raíz de regaliz, 250ml de agua.\nModo de Preparo: Hervir 5 minutos, reposar 5 y colar. No usar si se tiene hipertensión." },
  { title: "28. Infusión de Caléndula (Piel Saludable)", content: "Ingredientes: 1 cda de flores de caléndula, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Se puede beber o aplicar con compresas sobre la piel irritada." },
  { title: "29. Té de Ginkgo Biloba (Circulación)", content: "Ingredientes: 1 cdita de hojas secas, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Tomar 2 tazas al día lejos de las comidas." },
  { title: "30. Agua de Cáscara de Piña (Inflamación)", content: "Ingredientes: Cáscara de 1 piña limpia, 1 rama canela, 2 litros agua.\nModo de Preparo: Hervir por 20 minutos, colar y beber como agua de tiempo durante el día." },
  { title: "31. Té de Sauco (Resfriado)", content: "Ingredientes: 1 cda de flores de sauco, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Tomar bien caliente al primer síntoma de resfriado." },
  { title: "32. Infusión de Hinojo (Lactancia)", content: "Ingredientes: 1 cdita de semillas de hinojo machacadas, 250ml de agua.\nModo de Preparo: Hervir 3 minutos y reposar 5. Ayuda a la producción de leche y reduce gases del bebé." },
  { title: "33. Té de Espino Blanco (Corazón)", content: "Ingredientes: 1 cdita de hojas y flores secas, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Tomar 1 taza al día bajo supervisión si se toman fármacos cardiacos." },
  { title: "34. Agua de Pepino y Menta (Detox Refresh)", content: "Ingredientes: 1/2 pepino en rodajas, 10 hojas menta, 1 litro agua.\nModo de Preparo: Dejar macerar en la nevera por 4 horas. Beber durante el día." },
  { title: "35. Té de Uña de Gato (Sistema Inmune)", content: "Ingredientes: 1 cda de corteza, 500ml de agua.\nModo de Preparo: Hervir por 15 minutos a fuego lento, dejar reposar 10 y colar. Tomar una taza al día." },
  { title: "36. Infusión de Milenrama (Varices)", content: "Ingredientes: 1 cdita de milenrama, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Tomar 2 veces al día para fortalecer los vasos sanguíneos." },
  { title: "37. Té de Melisa (Dormir Niños)", content: "Ingredientes: 1 cdita de hojas de melisa, 200ml de agua.\nModo de Preparo: Infusionar 5 minutos. Endulzar con un poco de miel. Dar media taza antes de dormir." },
  { title: "38. Agua de Lino (Estreñimiento Crónico)", content: "Ingredientes: 1 cda de semillas de lino, 250ml de agua.\nModo de Preparo: Remojar toda la noche. Por la mañana beber el agua con el gel formado y las semillas." },
  { title: "39. Té de Bardana (Acné)", content: "Ingredientes: 1 cdita de raíz de bardana, 250ml de agua.\nModo de Preparo: Hervir 10 minutos, reposar 5 y colar. Tomar una taza diaria por 21 días." },
  { title: "40. Infusión de Verbena (Cefalea)", content: "Ingredientes: 1 cda de verbena seca, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Tomar al sentir los primeros síntomas de dolor de cabeza." },
  { title: "41. Té de Zarzaparrilla (Purificante)", content: "Ingredientes: 1 cdita de raíz de zarzaparrilla, 250ml de agua.\nModo de Preparo: Hervir 5 minutos, reposar 10. Ayuda a eliminar toxinas por la orina." },
  { title: "42. Agua de Granada (Antioxidante)", content: "Ingredientes: Granos de 1 granada, 500ml de agua.\nModo de Preparo: Licuar los granos con el agua y colar bien. Tomar recién hecho." },
  { title: "43. Té de Malva (Irritación Mucosas)", content: "Ingredientes: 1 cda de flores y hojas de malva, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Suaviza la garganta y el tracto digestivo." },
  { title: "44. Infusión de Ajedrea (Libido)", content: "Ingredientes: 1 cdita de ajedrea, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Tomar una taza por la noche." },
  { title: "45. Té de Fresno (Ácido Úrico)", content: "Ingredientes: 1 cda de hojas de fresno, 500ml de agua.\nModo de Preparo: Hervir 5 minutos, reposar 10. Tomar repartido en dos tomas diarias." },
  { title: "46. Agua de Tamarindo (Laxante Suave)", content: "Ingredientes: 3 vainas de tamarindo, 500ml de agua.\nModo de Preparo: Hervir las vainas sin cáscara 10 min. Dejar enfriar, licuar y colar. Beber por la mañana." },
  { title: "47. Té de Sen (Estreñimiento Puntual)", content: "Ingredientes: 1/2 cdita de hojas de sen, 200ml de agua.\nModo de Preparo: Infusionar 5 minutos. No usar más de 7 días seguidos." },
  { title: "48. Infusión de Borraja (Fiebre)", content: "Ingredientes: 1 cda de flores de borraja, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Promueve la sudoración para bajar la temperatura." },
  { title: "49. Té de Artemisa (Regla Irregular)", content: "Ingredientes: 1 cdita de artemisa, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Tomar una taza diaria la semana previa al periodo." },
  { title: "50. Agua de Fenogreco (Masa Muscular)", content: "Ingredientes: 1 cdita de semillas de fenogreco, 250ml de agua.\nModo de Preparo: Remojar las semillas 12 horas. Beber el agua y consumir las semillas hidratadas." },
  { title: "51. Té de Rooibos (Alergias)", content: "Ingredientes: 1 cdita de rooibos, 250ml de agua.\nModo de Preparo: Infusionar 7 minutos. Libre de cafeína, rico en antihistamínicos naturales." },
  { title: "52. Infusión de Agrimonia (Voz)", content: "Ingredientes: 1 cda de agrimonia, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Ideal para gárgaras en locutores y cantantes." },
  { title: "53. Té de Genciana (Falta de Apetito)", content: "Ingredientes: 1/2 cdita de raíz de genciana, 200ml de agua.\nModo de Preparo: Hervir 5 minutos. Tomar una pequeña taza 30 minutos antes de comer." },
  { title: "54. Agua de Cebada (Riñones)", content: "Ingredientes: 1/2 taza de cebada perlada, 1 litro de agua.\nModo de Preparo: Hervir la cebada por 30 minutos. Colar y beber el agua fría con un toque de limón." },
  { title: "55. Té de Hamamelis (Hemorroides)", content: "Ingredientes: 1 cdita de hojas secas, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Usar externamente con un algodón sobre la zona afectada." },
  { title: "56. Infusión de Hipérico (Depresión Leve)", content: "Ingredientes: 1 cdita de flores de San Juan, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Consultar médico por interacciones con medicamentos." },
  { title: "57. Té de Fumaria (Eccemas)", content: "Ingredientes: 1 cdita de fumaria, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Tomar una taza al día para depurar la sangre." },
  { title: "58. Agua de Arándanos (Vías Urinarias)", content: "Ingredientes: 1 taza de arándanos frescos, 1 litro de agua.\nModo de Preparo: Licuar y beber sin azúcar para prevenir cistitis." },
  { title: "59. Té de Olivo (Hipertensión)", content: "Ingredientes: 1 cda de hojas de olivo, 250ml de agua.\nModo de Preparo: Hervir 5 minutos, reposar otros 5. Tomar 2 tazas al día." },
  { title: "60. Infusión de Lavanda (Insomnio Nervioso)", content: "Ingredientes: 1 cdita de flores de lavanda, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. El aroma también ayuda a relajar el sistema nervioso." },
  { title: "61. Té de Sauce (Dolor Muscular)", content: "Ingredientes: 1 cdita de corteza de sauce blanco, 250ml de agua.\nModo de Preparo: Hervir 10 minutos y colar. Contiene salicina, precursor de la aspirina." },
  { title: "62. Agua de Sandía y Apio (Diurético)", content: "Ingredientes: 2 tajadas de sandía, 1 tallo de apio, 500ml agua.\nModo de Preparo: Licuar todo junto. Beber por la mañana para eliminar líquidos." },
  { title: "63. Té de Nogal (Diarrea)", content: "Ingredientes: 1 cdita de hojas de nogal, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Las propiedades astringentes ayudan a cortar la diarrea." },
  { title: "64. Infusión de Pensamiento (Piel Grasa)", content: "Ingredientes: 1 cda de planta seca, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Tomar en ayunas." },
  { title: "65. Té de Centella Asiática (Celulitis)", content: "Ingredientes: 1 cdita de centella, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Ayuda a la formación de colágeno y circulación sanguínea." },
  { title: "66. Agua de Perejil (Piedras Riñón)", content: "Ingredientes: 1 manojo de perejil, 1 litro de agua.\nModo de Preparo: Hervir 10 minutos, dejar enfriar y colar. Beber un vaso al día." },
  { title: "67. Té de Condurango (Dolor Estomacal)", content: "Ingredientes: 1/2 cdita de corteza, 250ml de agua.\nModo de Preparo: Hervir 5 minutos, reposar 10. Tomar antes de las comidas." },
  { title: "68. Infusión de Eufrasia (Vista Cansada)", content: "Ingredientes: 1 cdita de eufrasia, 250ml de agua.\nModo de Preparo: Infusionar 10 min. Una vez frío, usar para lavar los ojos con gasas estériles." },
  { title: "69. Té de Marrubio (Apetito)", content: "Ingredientes: 1 cdita de marrubio, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Tomar 15 minutos antes de comer." },
  { title: "70. Agua de Cáscara de Sagrada (Estreñimiento)", content: "Ingredientes: 1/2 cdita de corteza, 250ml de agua.\nModo de Preparo: Hervir 5 min. Tomar por la noche. Efecto potente." },
  { title: "71. Té de Angélica (Digestión Lenta)", content: "Ingredientes: 1 cdita de raíz de angélica, 250ml de agua.\nModo de Preparo: Hervir 2 minutos y reposar 10. Tomar tras comidas pesadas." },
  { title: "72. Infusión de Hisopo (Asma Leve)", content: "Ingredientes: 1 cdita de hisopo, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Ayuda a expulsar la mucosidad bronquial." },
  { title: "73. Té de Llantén (Infección Bucal)", content: "Ingredientes: 1 cda de hojas de llantén, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Hacer enjuagues para curar llagas y encías." },
  { title: "74. Agua de Espirulina (Energía)", content: "Ingredientes: 1/2 cdita de espirulina en polvo, 1 vaso de agua, limón.\nModo de Preparo: Mezclar bien y tomar por la mañana para un aporte extra de hierro y proteínas." },
  { title: "75. Té de Harpagofito (Reuma)", content: "Ingredientes: 1 cdita de raíz, 500ml de agua.\nModo de Preparo: Hervir 5 minutos, dejar reposar toda la noche. Beber durante el día siguiente." },
  { title: "76. Infusión de Albahaca (Náuseas)", content: "Ingredientes: 5 hojas de albahaca fresca, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Tomar a pequeños sorbos." },
  { title: "77. Té de Guaraná (Concentración)", content: "Ingredientes: 1/2 cdita de semillas molidas, 250ml de agua.\nModo de Preparo: Mezclar en agua caliente sin hervir. Efecto estimulante prolongado." },
  { title: "78. Agua de Pepitas de Calabaza (Próstata)", content: "Ingredientes: 2 cdas de pepitas crudas, 1 vaso agua.\nModo de Preparo: Machacar las pepitas, infusionar en agua caliente 15 min y beber todo." },
  { title: "79. Té de Drosera (Tos Convulsiva)", content: "Ingredientes: 1 cdita de drosera, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Calma los espasmos bronquiales." },
  { title: "80. Infusión de Equiseto (Huesos)", content: "Ingredientes: 1 cda de equiseto, 250ml de agua.\nModo de Preparo: Hervir 5 minutos. Aporta silicio para la regeneración ósea." },
  { title: "81. Té de Grosellero Negro (Artrosis)", content: "Ingredientes: 1 cda de hojas secas, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Tomar 3 tazas al día por temporadas." },
  { title: "82. Agua de Berros (Depurativo Sangre)", content: "Ingredientes: 1 puñado de berros, 500ml de agua.\nModo de Preparo: Licuar los berros frescos con agua y tomar en ayunas." },
  { title: "83. Té de Meliloto (Piernas Cansadas)", content: "Ingredientes: 1 cdita de meliloto, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Mejora el retorno venoso." },
  { title: "84. Infusión de Orégano (Cistitis)", content: "Ingredientes: 1 cdita de orégano, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Potente antiséptico natural de las vías urinarias." },
  { title: "85. Té de Poleo Menta (Digestión)", content: "Ingredientes: 1 cda de hojas, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. El clásico remedio para después de comer." },
  { title: "86. Agua de Quinoa (Proteína Vegetal)", content: "Ingredientes: 1/2 taza quinoa, 1 litro agua.\nModo de Preparo: Hervir la quinoa 15 min. El agua resultante es nutritiva y fácil de digerir." },
  { title: "87. Té de Ruibarbo (Laxante)", content: "Ingredientes: 1/2 cdita de raíz de ruibarbo, 250ml de agua.\nModo de Preparo: Hervir 10 minutos. Tomar una taza antes de dormir." },
  { title: "88. Infusión de Saponaria (Expectorante)", content: "Ingredientes: 1 cdita de raíz, 250ml de agua.\nModo de Preparo: Hervir 5 minutos. Ayuda a fluidificar las flemas." },
  { title: "89. Té de Té Verde (Quema Grasa)", content: "Ingredientes: 1 cdita de té verde, 250ml de agua a 80°C.\nModo de Preparo: Infusionar 3 minutos. Tomar 20 min después de las comidas." },
  { title: "90. Agua de Uva Ursi (Infección Orina)", content: "Ingredientes: 1 cdita de hojas, 250ml de agua.\nModo de Preparo: Infusionar 15 minutos. Tomar junto a una pizca de bicarbonato para activar." },
  { title: "91. Té de Valeriana y Melisa (Sueño Profundo)", content: "Ingredientes: 1/2 cdita de cada una, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Sinergia para un descanso reparador." },
  { title: "92. Infusión de Vid Roja (Hemorroides)", content: "Ingredientes: 1 cda de hojas secas, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Protege los capilares y venas." },
  { title: "93. Té de Xilitol Natural (Salud Bucal)", content: "Ingredientes: Hojas de Abedul, 250ml de agua.\nModo de Preparo: Infusionar 10 minutos. Usar como enjuague tras el cepillado." },
  { title: "94. Agua de Yuca (Artritis)", content: "Ingredientes: Tallo de yuca limpio, 1 litro agua.\nModo de Preparo: Hervir el tallo 20 min. Tomar el agua resultante para reducir inflamación." },
  { title: "95. Té de Zedoaria (Gases y Digestión)", content: "Ingredientes: 1/2 cdita de raíz, 250ml de agua.\nModo de Preparo: Hervir 5 minutos. Pariente del jengibre, muy efectivo para el vientre hinchado." },
  { title: "96. Infusión de Flor de Azahar (Nervios Estómago)", content: "Ingredientes: 1 cdita de flores, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Calma el nudo en el estómago por ansiedad." },
  { title: "97. Té de Cardo Mariano (Hígado Graso)", content: "Ingredientes: 1 cdita de semillas machacadas, 250ml de agua.\nModo de Preparo: Hervir 5 minutos, reposar 10. Protege y regenera las células hepáticas." },
  { title: "98. Agua de Coco con Cúrcuma (Post-Entreno)", content: "Ingredientes: 250ml agua coco, 1/4 cdita cúrcuma, pizca sal.\nModo de Preparo: Mezclar bien para recuperar electrolitos y reducir inflamación muscular." },
  { title: "99. Té de Malvavisco (Reflujo)", content: "Ingredientes: 1 cda de raíz de malvavisco, 250ml agua fría.\nModo de Preparo: Macerar la raíz en agua fría 4 horas. Beber para proteger el esófago." },
  { title: "100. Infusión de Pétalos de Rosa (Piel)", content: "Ingredientes: 1 puñado de pétalos orgánicos, 250ml de agua.\nModo de Preparo: Infusionar 5 minutos. Rico en vitamina C y antioxidantes para el cutis." },
{ title: "101. Elixir de Ajo y Limón (Limpieza Arterial)", content: "Ingredientes: 1 diente de ajo machacado, zumo de 1 limón, 1 vaso agua.\nModo de Preparo: Mezclar y tomar en ayunas para reducir placa arterial y mejorar circulación." }
];
const finalHerbalRecipes = actualRecipes;
export const BONUSES: Product[] = [
  {
    id: 'b1',
    title: 'El Código del Superintestino',
    category: 'Salud Intestinal',
    image: 'attached_assets/stock_images/healthy_probiotic_fo_f2274de3.jpg',
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
    image: 'attached_assets/stock_images/herbal_tea_collectio_de2b3588.jpg',
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
    image: 'attached_assets/stock_images/relaxed_person_with__c6427e18.jpg',
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
