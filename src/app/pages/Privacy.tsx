export function Privacy() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0F1A33] sm:text-4xl mb-2">
          Privacidad Lexora.
        </h1>
        <p className="text-xl text-[#2D6BFF] mb-8 font-medium">Protegemos tus datos.</p>
        
        <div className="prose prose-slate max-w-none">
          
          <div className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 className="text-lg font-bold text-[#0F1A33] mb-1">POLÍTICA DE PRIVACIDAD DE LEXORA</h2>
            <p className="text-sm text-slate-500">Fecha de entrada en vigor: 2025</p>
            <p className="mt-4 text-slate-600">
              Esta Política de Privacidad describe cómo Lexora, operado por Lexoraflashcards, recopila, utiliza, protege y comparte tu información personal cuando utilizas nuestra aplicación o sitio web lexoraflashcards.com
            </p>
          </div>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">1. Información que recopilamos</h3>
            <p className="text-slate-600 mb-4">
              Cuando te registras en Lexora o utilizas nuestros servicios, podemos recopilar:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Datos de identificación:</strong> nombre, correo electrónico, seudónimo (opcional)</li>
              <li><strong>Datos de acceso:</strong> dirección IP, tipo de dispositivo, sistema operativo, navegador</li>
              <li><strong>Datos de uso:</strong> estadísticas de estudio, rachas (streaks), progreso, flashcards creadas</li>
              <li><strong>Contenido proporcionado por el usuario:</strong> texto de flashcards, archivos PDF, importaciones/exportaciones</li>
            </ul>
            <p className="text-slate-600 mt-4">No recopilamos datos sensibles sin tu consentimiento explícito.</p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">2. Uso de la información</h3>
            <p className="text-slate-600 mb-4">Utilizamos tus datos para:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Proveer y mejorar nuestros servicios</li>
              <li>Guardar tu progreso y personalizar la experiencia de usuario</li>
              <li>Gestionar cuentas, soporte técnico y notificaciones</li>
              <li>Desarrollar estadísticas anónimas para mejorar la app</li>
            </ul>
            <p className="text-slate-600 mt-4">Nunca venderemos tus datos a terceros.</p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">3. Autenticación con Google y OAuth</h3>
            <p className="text-slate-600 leading-relaxed">
              Lexora permite a los usuarios iniciar sesión utilizando su cuenta de Google a través de Supabase Auth. Solo solicitamos los permisos estándar de OAuth: openid, email y profile. Estos permisos se usan exclusivamente para autenticar de forma segura al usuario y personalizar su experiencia dentro de la aplicación.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              No accedemos ni solicitamos permisos sobre otros servicios de Google, como Gmail, Drive o Calendar.
            </p>
            <p className="text-slate-600 mt-4 mb-2">Los datos que podemos recibir mediante Google OAuth son:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Dirección de correo electrónico</li>
              <li>Nombre del usuario</li>
              <li>Imagen de perfil (avatar)</li>
              <li>Identificador único de usuario de Google</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Esta información es procesada mediante Supabase Auth, un proveedor seguro de autenticación que nos permite gestionar sesiones de usuario. Lexora no almacena de forma permanente los tokens de OAuth y no comparte esta información con terceros.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">4. Base legal del tratamiento</h3>
            <p className="text-slate-600 mb-2">Tratamos tus datos con base en:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Tu consentimiento al registrarte</li>
              <li>La ejecución del contrato (servicio educativo)</li>
              <li>Obligaciones legales</li>
              <li>Nuestro interés legítimo en mejorar la app</li>
            </ul>
          </section>
          
          <h2 className="text-xl font-bold text-[#0F1A33] mt-10 mb-6 border-b border-slate-200 pb-2">Almacenamiento, seguridad y compartición</h2>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">5. Almacenamiento y seguridad de los datos</h3>
            <p className="text-slate-600 leading-relaxed">
              Tus datos se almacenan de forma segura en servidores gestionados por [plataforma de alojamiento, como Supabase/Firebase]. Utilizamos cifrado y autenticación para proteger tu información.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">6. Compartición de datos</h3>
            <p className="text-slate-600 leading-relaxed">
              Podemos compartir información con proveedores de servicios (hosting, analítica) que estén bajo contrato y solo para cumplir funciones operativas. No compartimos datos con fines publicitarios.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">7. Cookies y tecnologías similares</h3>
            <p className="text-slate-600 mb-2">Lexora utiliza cookies para:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Recordar tu sesión</li>
              <li>Analizar el uso de la plataforma</li>
            </ul>
            <p className="text-slate-600 mt-4">Puedes controlar su uso desde la configuración de tu navegador.</p>
          </section>

          <h2 className="text-xl font-bold text-[#0F1A33] mt-10 mb-6 border-b border-slate-200 pb-2">Tus derechos y retención de datos</h2>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">8. Tus derechos</h3>
            <p className="text-slate-600 mb-2">Tienes derecho a:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Acceder a tus datos</li>
              <li>Rectificar o eliminar información</li>
              <li>Oponerte o limitar el tratamiento</li>
              <li>Portar tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Puedes ejercer estos derechos escribiendo a: <a href="mailto:hola@lexoraflashcards.com" className="text-[#2D6BFF] hover:underline font-medium">hola@lexoraflashcards.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">9. Retención de datos</h3>
            <p className="text-slate-600 leading-relaxed">
              Conservamos tus datos mientras tengas una cuenta activa. Puedes solicitar su eliminación en cualquier momento. Algunos datos pueden mantenerse de forma anonimizada con fines estadísticos.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">10. Cambios en esta política</h3>
            <p className="text-slate-600 leading-relaxed">
              Lexora puede actualizar esta Política. Notificaremos cambios importantes mediante correo o dentro de la app. Se considera aceptada si sigues utilizando el servicio tras 14 días.
            </p>
          </section>
          
          <h2 className="text-xl font-bold text-[#0F1A33] mt-10 mb-6 border-b border-slate-200 pb-2">Contacto</h2>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">11. Contacto</h3>
            <p className="text-slate-600 leading-relaxed">
              Si tienes preguntas sobre esta Política, contáctanos en: <a href="mailto:hola@lexoraflashcards.com" className="text-[#2D6BFF] hover:underline font-medium">hola@lexoraflashcards.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}