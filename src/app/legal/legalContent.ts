/**
 * Fuente única de los textos legales de Lexora.
 * Se renderiza tanto en la web pública como en el dashboard.
 *
 * ⚠️ PENDIENTE ANTES DE CONSIDERARLO DEFINITIVO:
 *   Sustituir TITULAR.nombre, TITULAR.nif y TITULAR.domicilio por los datos reales.
 *   El art. 10 de la Ley 34/2002 (LSSI-CE) obliga a publicarlos de forma
 *   permanente, fácil, directa y gratuita.
 */

export const LEGAL_VERSION = '2026-08-03';

export const TITULAR = {
  nombre: '[PENDIENTE: nombre y apellidos o razón social del titular]',
  nif: '[PENDIENTE: NIF / CIF]',
  domicilio: '[PENDIENTE: domicilio a efectos de notificaciones]',
  email: 'hola@lexoraflashcards.com',
  emailPrivacidad: 'privacidad@lexoraflashcards.com',
  emailCentros: 'centros@lexoraflashcards.com',
  web: 'www.lexoraflashcards.com',
  app: 'dashboard.lexoraflashcards.com',
};

export const EDAD_MINIMA = 16;

export interface LegalSection {
  h: string;
  p: string[];
  ul?: string[];
}

export interface LegalDoc {
  id: string;
  slug: string;
  titulo: string;
  bajada: string;
  actualizado: string;
  secciones: LegalSection[];
}

/* ─────────────────────────── AVISO LEGAL ─────────────────────────── */

export const AVISO_LEGAL: LegalDoc = {
  id: 'aviso',
  slug: 'aviso-legal',
  titulo: 'Aviso legal',
  bajada: 'Quién está detrás de Lexora y bajo qué condiciones se usa este sitio.',
  actualizado: LEGAL_VERSION,
  secciones: [
    {
      h: '1. Datos identificativos del titular',
      p: [
        'En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los siguientes datos:',
      ],
      ul: [
        `Titular: ${TITULAR.nombre}`,
        `NIF: ${TITULAR.nif}`,
        `Domicilio a efectos de notificaciones: ${TITULAR.domicilio}`,
        `Correo electrónico: ${TITULAR.email}`,
        `Sitio web: ${TITULAR.web} · Aplicación: ${TITULAR.app}`,
      ],
    },
    {
      h: '2. Objeto',
      p: [
        'Lexora es una plataforma educativa que permite crear, estudiar y repasar tarjetas de memoria (flashcards) con ayuda de inteligencia artificial, dirigida a estudiantes, docentes y centros de estudio.',
        'El acceso al sitio es gratuito, salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por la persona usuaria.',
      ],
    },
    {
      h: '3. Condiciones de uso del sitio',
      p: [
        'La navegación por este sitio atribuye la condición de usuario e implica la aceptación de este aviso legal. La persona usuaria se compromete a utilizar el sitio conforme a la ley, a la buena fe y al orden público, absteniéndose de emplearlo con fines ilícitos o lesivos, o de forma que pueda dañar, sobrecargar o impedir el normal funcionamiento del servicio.',
      ],
    },
    {
      h: '4. Propiedad intelectual e industrial',
      p: [
        'El código, el diseño, la marca «Lexora», los logotipos, los textos y los elementos gráficos del sitio son titularidad del prestador o se utilizan con licencia, y están protegidos por la normativa de propiedad intelectual e industrial.',
        'Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa. Los contenidos que la persona usuaria crea o sube a la plataforma siguen siendo suyos, en los términos previstos en las condiciones de uso.',
      ],
    },
    {
      h: '5. Responsabilidad sobre enlaces',
      p: [
        'Este sitio puede incluir enlaces a páginas de terceros. El prestador no controla ni responde de sus contenidos, políticas o disponibilidad. La inclusión de un enlace no implica recomendación ni relación entre el prestador y el titular del sitio enlazado.',
      ],
    },
    {
      h: '6. Legislación aplicable',
      p: [
        'Este aviso legal se rige por la legislación española. Para la resolución de controversias con personas consumidoras serán competentes los juzgados y tribunales que en cada caso determine la normativa de consumo, sin que la persona consumidora pueda ser privada del fuero de su domicilio.',
      ],
    },
  ],
};

/* ───────────────────── POLÍTICA DE USO DE IA ───────────────────── */

export const POLITICA_IA: LegalDoc = {
  id: 'ia',
  slug: 'inteligencia-artificial',
  titulo: 'Política de inteligencia artificial',
  bajada: 'Qué hace la IA de Lexora, qué no hace y cómo puedes revisarla.',
  actualizado: LEGAL_VERSION,
  secciones: [
    {
      h: '1. Por qué te contamos esto',
      p: [
        'El Reglamento (UE) 2024/1689 de Inteligencia Artificial obliga, desde el 2 de agosto de 2026, a informar de forma clara cuando una persona interactúa con un sistema de IA y a identificar los contenidos generados artificialmente (artículo 50). Esta política cumple esa obligación y explica en lenguaje llano cómo funciona la IA dentro de Lexora.',
      ],
    },
    {
      h: '2. Estás interactuando con un sistema de IA',
      p: [
        'Las siguientes funciones de Lexora están operadas por modelos de inteligencia artificial y no por personas. No hay ningún docente ni corrector humano al otro lado:',
      ],
      ul: [
        'Generación de tarjetas a partir de un tema, un documento (PDF, DOCX, TXT), una imagen de apuntes o un vídeo de YouTube.',
        'Resúmenes automáticos de documentos y apuntes.',
        'Transcripción de audio y conversión de grabaciones de clase en tarjetas.',
        'Examen oral: transcripción de tu respuesta hablada y evaluación automática de su contenido.',
        'Pistas y explicaciones del tutor de estudio.',
        'Generación de imágenes ilustrativas para las tarjetas.',
        'Planificación del repaso espaciado (qué tarjeta te toca y cuándo).',
      ],
    },
    {
      h: '3. Los contenidos generados están identificados',
      p: [
        'Las tarjetas, resúmenes, imágenes y correcciones producidos por IA se muestran señalados como tales dentro de la aplicación. Si exportas o compartes ese material fuera de Lexora, te pedimos que mantengas esa indicación: la obligación de identificar contenido sintético acompaña al contenido, no a la plataforma.',
      ],
    },
    {
      h: '4. La IA se equivoca: revisa siempre',
      p: [
        'Los modelos de lenguaje pueden producir información incorrecta, incompleta o desactualizada, incluso cuando suena convincente. Lexora es una herramienta de apoyo al estudio, no una fuente de verdad ni un sustituto de tu temario oficial, de tu profesorado o de una tutoría.',
        'Antes de estudiar un mazo generado automáticamente, contrástalo con tus apuntes. En materias regladas (oposiciones, selectividad, contenidos jurídicos o sanitarios) esta comprobación es especialmente importante.',
        'La evaluación del examen oral es orientativa y en ningún caso constituye una calificación académica ni puede utilizarse como tal por un centro.',
      ],
    },
    {
      h: '5. Decisiones automatizadas',
      p: [
        'Lexora no adopta decisiones automatizadas con efectos jurídicos o que te afecten significativamente en el sentido del artículo 22 del RGPD. El algoritmo de repetición espaciada ordena tu repaso, pero no califica, no clasifica a personas ni condiciona el acceso a ningún derecho, servicio o titulación.',
      ],
    },
    {
      h: '6. Lo que no hacemos',
      p: ['Por decisión propia y por exigencia del Reglamento de IA, Lexora no realiza ninguna de estas prácticas:'],
      ul: [
        'Reconocimiento de emociones del alumnado a partir de voz, cara o comportamiento.',
        'Categorización biométrica ni identificación facial.',
        'Puntuación social ni elaboración de perfiles de personalidad.',
        'Uso de tu contenido para entrenar modelos propios o de terceros.',
        'Uso de técnicas dirigidas a explotar la vulnerabilidad de menores.',
      ],
    },
    {
      h: '7. Proveedores de IA',
      p: [
        'Lexora no entrena modelos propios: utiliza modelos de terceros mediante API. En la fecha de esta política, los proveedores empleados para las funciones descritas son Google (familia de modelos Gemini) y OpenAI para la generación de imágenes.',
        'El contenido que envías a estas funciones se transmite a dichos proveedores exclusivamente para producir el resultado que has pedido, bajo condiciones contractuales que excluyen su uso para entrenamiento. El detalle de las transferencias internacionales figura en la política de privacidad.',
      ],
    },
    {
      h: '8. Supervisión humana y reclamaciones',
      p: [
        `Si un resultado de la IA te parece incorrecto, ofensivo o inadecuado, puedes escribirnos a ${TITULAR.email} y lo revisaremos manualmente. En España, la autoridad de supervisión en materia de inteligencia artificial es la Agencia Española de Supervisión de la Inteligencia Artificial (AESIA), y la Agencia Española de Protección de Datos (AEPD) cuando estén implicados datos personales.`,
      ],
    },
  ],
};

/* ─────────────────────── POLÍTICA DE COOKIES ─────────────────────── */

export const POLITICA_COOKIES: LegalDoc = {
  id: 'cookies',
  slug: 'cookies',
  titulo: 'Política de cookies',
  bajada: 'Qué guardamos en tu navegador y cómo lo controlas.',
  actualizado: LEGAL_VERSION,
  secciones: [
    {
      h: '1. Qué son',
      p: [
        'Una cookie es un pequeño archivo que un sitio web guarda en tu navegador. Junto a las cookies utilizamos otras tecnologías equivalentes, como el almacenamiento local del navegador (localStorage), a las que se aplica esta misma política.',
      ],
    },
    {
      h: '2. Cookies técnicas (necesarias)',
      p: [
        'Son imprescindibles para que el servicio funcione y, conforme al artículo 22.2 de la LSSI, están exentas de consentimiento.',
      ],
      ul: [
        'Sesión de autenticación gestionada por Supabase Auth: te mantiene identificado mientras usas la app. Duración: hasta el cierre de sesión o la expiración del token.',
        'Preferencias de la interfaz: idioma, modo oscuro, pestaña activa y estado de las notificaciones leídas. Se guardan en localStorage y no salen de tu dispositivo.',
        'Seguridad: prevención de peticiones fraudulentas y control de sesiones simultáneas.',
      ],
    },
    {
      h: '3. Cookies de análisis',
      p: [
        'Utilizamos Google Analytics 4 para entender de forma agregada cómo se usa la plataforma y decidir qué mejorar. Estas cookies solo se instalan si las aceptas, y puedes rechazarlas sin que ello limite ninguna función.',
        'La analítica se configura con la anonimización de IP activada. Google actúa como encargado del tratamiento.',
      ],
    },
    {
      h: '4. Cookies de terceros',
      p: [
        'Al procesar un pago, Stripe instala cookies propias necesarias para la prevención del fraude. Si reproduces un vídeo incrustado de YouTube, ese servicio puede instalar sus propias cookies. Ambos son responsables independientes de esos tratamientos.',
      ],
    },
    {
      h: '5. Cómo gestionar tu elección',
      p: [
        'Puedes aceptar, rechazar o configurar las cookies no necesarias desde el aviso que aparece la primera vez que entras, y cambiar tu decisión en cualquier momento desde el enlace «Preferencias de cookies» del pie de página.',
        'También puedes eliminarlas o bloquearlas desde la configuración de tu navegador. Ten en cuenta que bloquear las cookies técnicas impedirá que puedas iniciar sesión.',
      ],
    },
  ],
};

/* ─────────────────── CONDICIONES DE USO (TÉRMINOS) ─────────────────── */

export const TERMINOS: LegalDoc = {
  id: 'terminos',
  slug: 'terminos',
  titulo: 'Condiciones de uso',
  bajada: 'El contrato entre Lexora y tú. Escrito para que se entienda.',
  actualizado: LEGAL_VERSION,
  secciones: [
    {
      h: '1. Quiénes somos y qué aceptas',
      p: [
        `Estas condiciones regulan el acceso y uso de Lexora, prestado por ${TITULAR.nombre} (NIF ${TITULAR.nif}), con domicilio en ${TITULAR.domicilio} y correo ${TITULAR.email}.`,
        'Al crear una cuenta aceptas estas condiciones y la política de privacidad. Si no estás de acuerdo con alguna parte, no puedes usar el servicio.',
      ],
    },
    {
      h: `2. Edad mínima: ${EDAD_MINIMA} años`,
      p: [
        `Para crear una cuenta individual en Lexora es necesario tener al menos ${EDAD_MINIMA} años cumplidos. Al registrarte confirmas que cumples este requisito.`,
        'Si eres menor de edad, aunque tengas la edad mínima, no puedes contratar por tu cuenta un plan de pago: cualquier suscripción debe contratarla y abonarla tu madre, padre o tutor legal, que asume la condición de parte contratante.',
        `El alumnado menor de ${EDAD_MINIMA} años solo puede acceder a través de un centro educativo o academia que haya contratado Lexora y que sea responsable de recabar el consentimiento de las familias. En ese caso, el centro determina qué funciones están disponibles.`,
        'Si detectamos una cuenta de una persona por debajo de la edad mínima sin la cobertura de un centro, la suspenderemos y eliminaremos sus datos. Si crees que esto ha ocurrido con una persona a tu cargo, escríbenos y actuaremos de inmediato.',
      ],
    },
    {
      h: '3. Tu cuenta',
      p: [
        'Debes facilitar datos veraces y mantener tu contraseña en secreto. Eres responsable de la actividad realizada desde tu cuenta. Puedes registrarte con correo y contraseña o mediante tu cuenta de Google, en cuyo caso solo solicitamos los permisos openid, email y profile.',
        'Podemos suspender o cancelar cuentas que incumplan estas condiciones, previo aviso salvo que la gravedad o una obligación legal exijan actuar de inmediato.',
      ],
    },
    {
      h: '4. Qué puedes y qué no puedes hacer',
      p: ['Lexora se ofrece para uso personal y educativo. No está permitido:'],
      ul: [
        'Revender, sublicenciar o redistribuir el servicio o los contenidos generados con fines comerciales sin autorización.',
        'Subir contenido del que no tengas derechos, o que sea ilícito, ofensivo o vulnere derechos de terceros.',
        'Grabar a docentes o compañeros sin su conocimiento y consentimiento: la función de grabación de clase es tu responsabilidad y debes contar con permiso.',
        'Usar la plataforma para cometer fraude académico donde esté prohibido por tu centro.',
        'Extraer datos de forma automatizada, someter el servicio a ingeniería inversa o eludir los límites de uso de tu plan.',
      ],
    },
    {
      h: '5. Tu contenido',
      p: [
        'Conservas todos los derechos sobre los apuntes, documentos, grabaciones y tarjetas que creas o subes. Nos concedes únicamente la licencia limitada necesaria para alojar, procesar y mostrarte ese contenido, y para enviarlo a los proveedores de IA cuando tú solicitas una función que lo requiere.',
        'No usamos tu contenido para entrenar modelos de inteligencia artificial, ni propios ni de terceros, ni lo cedemos con fines publicitarios.',
        'Podemos retirar contenido manifiestamente ilícito cuando tengamos conocimiento efectivo de ello, conforme al Reglamento (UE) 2022/2065 de Servicios Digitales.',
      ],
    },
    {
      h: '6. Funciones de inteligencia artificial',
      p: [
        'Buena parte de Lexora funciona con modelos de IA. Los resultados pueden contener errores y deben revisarse antes de estudiarlos. La política de inteligencia artificial detalla qué funciones son automáticas, qué proveedores intervienen y qué prácticas descartamos.',
        'La corrección del examen oral es orientativa y no constituye calificación académica.',
      ],
    },
    {
      h: '7. Planes, precios y facturación',
      p: [
        'Lexora ofrece un plan gratuito con límites de uso y planes de pago por suscripción, con renovación automática mensual o anual según la modalidad elegida. Los precios vigentes, sus límites y los impuestos aplicables se muestran antes de completar la contratación.',
        'El cobro lo gestiona Stripe. Podemos modificar los precios comunicándolo con al menos treinta días de antelación; el cambio se aplicará en la siguiente renovación y podrás cancelar antes de que surta efecto.',
        'Puedes cancelar la renovación en cualquier momento desde tu perfil. La cancelación surte efecto al final del periodo ya pagado, sin reembolso proporcional del periodo en curso salvo que la ley lo imponga.',
      ],
    },
    {
      h: '8. Derecho de desistimiento',
      p: [
        'Si eres consumidor, dispones de catorce días naturales desde la contratación para desistir sin necesidad de justificación, conforme al texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios.',
        'Al contratar te pediremos que solicites expresamente el inicio inmediato del servicio y reconozcas que, una vez ejecutado por completo, pierdes el derecho de desistimiento. Si desistes habiendo empezado a usar el servicio, podremos descontar la parte proporcional ya prestada.',
        `Para desistir basta con comunicárnoslo por cualquier medio inequívoco, por ejemplo un correo a ${TITULAR.email}.`,
      ],
    },
    {
      h: '9. Disponibilidad y responsabilidad',
      p: [
        'Trabajamos para mantener el servicio disponible, pero no garantizamos su funcionamiento ininterrumpido ni la ausencia de errores, ni ningún resultado académico concreto.',
        'Respondemos de los daños causados por dolo o negligencia, en los términos previstos por la legislación española. Nada en estas condiciones limita la responsabilidad que legalmente no puede excluirse frente a personas consumidoras.',
      ],
    },
    {
      h: '10. Cancelación de la cuenta',
      p: [
        `Puedes eliminar tu cuenta desde la configuración de la aplicación o escribiendo a ${TITULAR.email}. La eliminación borra tu contenido y tus datos personales, salvo aquellos que debamos conservar por obligación legal, como los datos de facturación.`,
      ],
    },
    {
      h: '11. Cambios en las condiciones',
      p: [
        'Podemos modificar estas condiciones por motivos legales, técnicos o de evolución del servicio. Te avisaremos por correo o dentro de la aplicación con al menos quince días de antelación cuando el cambio sea sustancial.',
        'Si no aceptas la nueva versión, puedes cancelar tu cuenta antes de que entre en vigor; en las suscripciones de pago te devolveremos la parte proporcional no consumida.',
      ],
    },
    {
      h: '12. Ley aplicable y reclamaciones',
      p: [
        'Estas condiciones se rigen por la legislación española.',
        'Si eres consumidor, podrás reclamar ante los juzgados de tu propio domicilio, y ninguna cláusula de este contrato puede privarte de ese derecho. Antes de acudir a la vía judicial puedes dirigir tu reclamación a nuestro correo de contacto; nos comprometemos a responder en un plazo máximo de un mes.',
      ],
    },
  ],
};

/* ───────────────────── POLÍTICA DE PRIVACIDAD ───────────────────── */

export const PRIVACIDAD: LegalDoc = {
  id: 'privacidad',
  slug: 'privacidad',
  titulo: 'Política de privacidad',
  bajada: 'Qué datos tratamos, por qué, con quién y qué puedes exigirnos.',
  actualizado: LEGAL_VERSION,
  secciones: [
    {
      h: '1. Responsable del tratamiento',
      p: ['Conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD):'],
      ul: [
        `Responsable: ${TITULAR.nombre} — NIF ${TITULAR.nif}`,
        `Domicilio: ${TITULAR.domicilio}`,
        `Contacto en materia de protección de datos: ${TITULAR.emailPrivacidad}`,
        'No se ha designado delegado de protección de datos por no concurrir los supuestos del artículo 37 del RGPD.',
      ],
    },
    {
      h: '2. Qué datos tratamos',
      p: ['Según cómo uses Lexora, podemos tratar:'],
      ul: [
        'Identificación y cuenta: nombre, correo electrónico, contraseña cifrada, foto de perfil si accedes con Google, idioma y preferencias.',
        'Contenido de estudio: mazos, tarjetas, apuntes, documentos que subes, imágenes de apuntes y resúmenes generados.',
        'Grabaciones de voz: audio de la función de grabación de clase y del examen oral, junto con su transcripción.',
        'Actividad de estudio: sesiones, aciertos, rachas, tiempo dedicado y programación de repasos.',
        'Datos técnicos: dirección IP, tipo de dispositivo, navegador, sistema operativo y registros de acceso.',
        'Datos de facturación: en los planes de pago, los datos de la transacción. Los datos completos de la tarjeta los trata Stripe directamente; Lexora no los almacena ni tiene acceso a ellos.',
        'Datos de pertenencia a un centro: grupo, clase, rol (alumnado, profesorado o administración) y tareas asignadas, cuando accedes a través de una academia o centro educativo.',
      ],
    },
    {
      h: '3. Para qué y con qué base legal',
      p: ['Cada tratamiento se apoya en una base jurídica concreta:'],
      ul: [
        'Prestar el servicio, mantener tu cuenta y guardar tu progreso — ejecución del contrato (art. 6.1.b RGPD).',
        'Procesar tu contenido con funciones de IA cuando tú las solicitas — ejecución del contrato.',
        'Cobrar las suscripciones y emitir facturas — ejecución del contrato y obligación legal (art. 6.1.b y 6.1.c).',
        'Cumplir obligaciones fiscales, contables y de consumo — obligación legal (art. 6.1.c).',
        'Seguridad, prevención del fraude y del abuso del servicio — interés legítimo (art. 6.1.f).',
        'Analítica de uso mediante cookies y comunicaciones comerciales sobre Lexora — consentimiento (art. 6.1.a), revocable en cualquier momento.',
      ],
    },
    {
      h: `4. Menores de edad: mínimo ${EDAD_MINIMA} años`,
      p: [
        `Las cuentas individuales de Lexora requieren tener al menos ${EDAD_MINIMA} años. El artículo 7 de la LOPDGDD sitúa hoy en 14 años la edad para consentir el tratamiento de datos en servicios de la sociedad de la información, pero hemos elevado voluntariamente el umbral a ${EDAD_MINIMA} para anticiparnos a la reforma en tramitación y por prudencia con el público adolescente.`,
        `El alumnado menor de ${EDAD_MINIMA} años únicamente puede acceder a través de un centro educativo o academia. En ese supuesto el centro es el responsable del tratamiento, es quien recaba el consentimiento de las familias, y Lexora actúa como encargado del tratamiento en virtud del contrato previsto en el artículo 28 del RGPD.`,
        'No elaboramos perfiles publicitarios de menores, no les mostramos publicidad comportamental y no vendemos sus datos bajo ninguna circunstancia.',
        `Si detectas que una persona menor de ${EDAD_MINIMA} años se ha registrado sin la cobertura de un centro, escríbenos a ${TITULAR.emailPrivacidad} y suprimiremos la cuenta y sus datos sin demora.`,
      ],
    },
    {
      h: '5. Grabaciones de voz',
      p: [
        'Las funciones de grabación de clase y examen oral procesan tu voz. El audio se envía al proveedor de IA para transcribirlo y se elimina una vez obtenida la transcripción; no conservamos el archivo de audio original más allá de lo necesario para completar la operación.',
        'Si grabas una clase, eres tú quien debe contar con el permiso del profesorado y del resto de personas presentes. Lexora te proporciona la herramienta, pero la licitud de esa grabación depende de ti.',
        'No aplicamos reconocimiento de voz para identificar personas ni analizamos emociones a partir del audio.',
      ],
    },
    {
      h: '6. Con quién compartimos datos',
      p: [
        'No vendemos tus datos ni los cedemos con fines publicitarios. Recurrimos a los siguientes encargados del tratamiento, todos ellos vinculados por contrato conforme al artículo 28 del RGPD:',
      ],
      ul: [
        'Supabase — base de datos, autenticación y almacenamiento de archivos. Infraestructura alojada en la Unión Europea.',
        'Vercel — alojamiento del sitio web y de la aplicación.',
        'Google (Gemini API) — generación de tarjetas y resúmenes, transcripción de audio y evaluación del examen oral.',
        'OpenAI — generación de imágenes ilustrativas.',
        'Stripe — procesamiento de pagos y facturación.',
        'Google Analytics — analítica de uso, solo si aceptas las cookies de análisis.',
        'Proveedor de correo transaccional — envío de avisos de cuenta y recuperación de contraseña.',
      ],
    },
    {
      h: '7. Transferencias internacionales',
      p: [
        'Algunos de estos proveedores están establecidos en Estados Unidos, por lo que determinados tratamientos implican una transferencia internacional de datos.',
        'Dichas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU., cuando el proveedor está certificado, o en cláusulas contractuales tipo aprobadas por la Comisión Europea junto con medidas complementarias, conforme al capítulo V del RGPD.',
        `Puedes solicitar copia de las garantías aplicadas escribiendo a ${TITULAR.emailPrivacidad}.`,
      ],
    },
    {
      h: '8. Cuánto tiempo conservamos tus datos',
      p: ['Aplicamos estos plazos:'],
      ul: [
        'Datos de cuenta y contenido de estudio: mientras la cuenta esté activa. Si eliminas la cuenta, se suprimen en un plazo máximo de treinta días.',
        'Cuentas inactivas: si no accedes durante veinticuatro meses, te avisaremos por correo y, sin respuesta, procederemos a la supresión.',
        'Grabaciones de audio: se eliminan tras la transcripción.',
        'Datos de facturación: seis años, por exigencia del Código de Comercio y de la normativa tributaria.',
        'Registros de seguridad y acceso: doce meses.',
        'Registro de aceptación de condiciones: mientras dure la relación y durante los plazos de prescripción de acciones, para poder acreditar el consentimiento.',
      ],
    },
    {
      h: '9. Tus derechos',
      p: [
        'Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y a no ser objeto de decisiones automatizadas, así como retirar el consentimiento prestado sin que ello afecte a la licitud del tratamiento anterior.',
        `Para ejercerlos, escribe a ${TITULAR.emailPrivacidad} indicando el derecho que invocas. Responderemos en el plazo máximo de un mes.`,
        'Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es), autoridad de control competente en España.',
      ],
    },
    {
      h: '10. Seguridad',
      p: [
        'Aplicamos cifrado en tránsito y en reposo, autenticación gestionada por un proveedor especializado, control de acceso a nivel de fila en la base de datos para que cada persona solo alcance sus propios datos, y copias de seguridad periódicas.',
        'En caso de violación de seguridad que suponga un riesgo para tus derechos, lo notificaremos a la autoridad de control en un plazo de setenta y dos horas y a las personas afectadas cuando el riesgo sea alto.',
      ],
    },
    {
      h: '11. Cambios en esta política',
      p: [
        'Si modificamos esta política te lo comunicaremos por correo o dentro de la aplicación. Cuando el cambio afecte a tratamientos basados en tu consentimiento, te pediremos uno nuevo: la continuidad en el uso del servicio no sustituye al consentimiento.',
      ],
    },
  ],
};

export const DOCUMENTOS: LegalDoc[] = [TERMINOS, PRIVACIDAD, POLITICA_IA, POLITICA_COOKIES, AVISO_LEGAL];
