export function Terms() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0F1A33] sm:text-4xl mb-2">
          Términos y condiciones.
        </h1>
        <p className="text-xl text-[#2D6BFF] mb-8 font-medium">Lee atentamente las condiciones.</p>
        
        <div className="prose prose-slate max-w-none">
          
          <h2 className="text-2xl font-bold text-[#0F1A33] mt-12 mb-6 border-b border-slate-200 pb-2">Aplicación, registro y uso</h2>
          
          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">1. Aplicación de las condiciones generales</h3>
            <p className="text-slate-600 leading-relaxed">
              Estos términos regulan la relación entre Lexora y el usuario. Al registrarse, el usuario acepta las condiciones en su totalidad.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">2. Registro en la plataforma</h3>
            <p className="text-slate-600 leading-relaxed">
              Para crear una cuenta, los usuarios deben ser mayores de edad y proporcionar datos veraces. Es posible el uso de seudónimos. La contraseña debe mantenerse secreta. Lexora puede suspender cuentas sin previo aviso por uso indebido o sospechoso.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">3. Inicio de sesión con Google</h3>
            <p className="text-slate-600 leading-relaxed">
              Solo se solicitan los permisos estándar de Google OAuth (openid, email, profile) necesarios para la autenticación básica y no se utiliza ningún otro servicio de Google. Para acceder a las funcionalidades de Lexora, los usuarios pueden iniciar sesión mediante su cuenta de Google. Este proceso de autenticación se realiza a través del proveedor Supabase Auth. Solo se solicita la información mínima necesaria (correo electrónico, nombre y foto de perfil) para identificarte como usuario.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Lexora no accede a ningún otro servicio de Google (como Gmail, Drive o Calendar) y no recopila ni utiliza tu información con fines distintos a la autenticación.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">4. Uso de la plataforma</h3>
            <p className="text-slate-600 leading-relaxed">
              Lexora proporciona materiales y herramientas para fines personales y educativos. No se permite la venta ni redistribución de contenido, y los usuarios deben garantizar tener los derechos del contenido que suben.
            </p>
          </section>

          <h2 className="text-2xl font-bold text-[#0F1A33] mt-12 mb-6 border-b border-slate-200 pb-2">Contenido, pagos y pruebas</h2>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">5. Contenido generado por el usuario</h3>
            <p className="text-slate-600 leading-relaxed">
              Los usuarios conservan derechos de autor sobre su contenido. Lexora adquiere derechos de uso limitados para almacenamiento, visualización y funcionamiento. Puede editar o eliminar contenido que infrinja derechos o leyes.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Al utilizar Lexora, aceptas también nuestra Política de Privacidad, puedes leerla aquí <a href="/privacidad" className="text-[#2D6BFF] hover:underline font-medium">Política de Privacidad</a>, donde se detalla cómo recopilamos, usamos y protegemos tu información personal. En particular, para el acceso mediante Google, se aplican las condiciones descritas allí, incluyendo el uso de tokens de sesión y la gestión segura de datos.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">6. Funciones de pago</h3>
            <p className="text-slate-600 leading-relaxed">
              Lexora es gratuito en su mayor parte. Algunas funciones premium pueden adquirirse mediante pago único. Los pagos se gestionan en plataformas externas seguras y los precios estarán siempre disponibles.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">7. Periodos de prueba gratuitos</h3>
            <p className="text-slate-600 leading-relaxed">
              Algunas funciones de pago pueden ofrecerse gratuitamente durante un periodo limitado. Lexora puede limitar o revocar el acceso ante detección de abuso.
            </p>
          </section>

          <h2 className="text-2xl font-bold text-[#0F1A33] mt-12 mb-6 border-b border-slate-200 pb-2">Cancelación, obligaciones y responsabilidad</h2>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">8. Cancelación y eliminación de cuentas</h3>
            <p className="text-slate-600 leading-relaxed">
              El usuario puede eliminar su cuenta escribiendo a <a href="mailto:hola@lexoraflashcards.com" className="text-[#2D6BFF] hover:underline font-medium">hola@lexoraflashcards.com</a>. Lexora eliminará la cuenta lo antes posible. Esto no exime de pagos previamente comprometidos.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">9. Servicios de terceros</h3>
            <p className="text-slate-600 leading-relaxed">
              Lexora puede integrar servicios externos como Supabase o proveedores de autenticación como Google para mejorar la funcionalidad del producto. Aunque seleccionamos cuidadosamente nuestros proveedores, no asumimos responsabilidad por el contenido, políticas o disponibilidad de estos servicios externos. El uso de dichas plataformas estará sujeto a sus propias políticas y condiciones.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">10. Obligaciones del usuario</h3>
            <p className="text-slate-600 leading-relaxed">
              Los usuarios deben proteger sus datos de acceso, respetar la legalidad, no distribuir contenido ofensivo/ilegal, y no utilizar comercial o masivamente la plataforma sin permiso.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">11. Responsabilidad</h3>
            <p className="text-slate-600 leading-relaxed">
              Lexora no garantiza la disponibilidad ininterrumpida ni el éxito académico. Será responsable solo en caso de dolo o negligencia grave, limitada a daños previsibles y típicos.
            </p>
          </section>

          <h2 className="text-2xl font-bold text-[#0F1A33] mt-12 mb-6 border-b border-slate-200 pb-2">Legislación, cambios y contacto</h2>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">12. Legislación aplicable y jurisdicción</h3>
            <p className="text-slate-600 leading-relaxed">
              Este contrato se rige por la ley de España, y cualquier disputa se resolverá en los tribunales del domicilio del proveedor.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#0F1A33] mb-3">13. Cambios en los términos de uso</h3>
            <p className="text-slate-600 leading-relaxed">
              Lexora podrá modificar estas condiciones por motivos legales, técnicos o de servicio. Los usuarios serán notificados, y su silencio durante 14 días implicará aceptación. Para dudas o contacto: <a href="mailto:hola@lexoraflashcards.com" className="text-[#2D6BFF] hover:underline font-medium">hola@lexoraflashcards.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}