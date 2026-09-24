# Menquel.github.io
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menquel Digital Services</title>
  <!-- Ícones do FontAwesome para redes sociais e WhatsApp -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    /* Reset e Variáveis de Cores */
    :root {
      --cor-fundo: #092e14af;      
      --cor-card: #000000c7;        /* Fundo dos cartões */
      --cor-texto: #f0eeee;       /* Texto principal */
      --cor-suave: #fdfdfd;       /* Texto secundário */
      --cor-destaque: #eef1f1;    /* Cor de borda/botão */
      --cor-whatsapp: #25D366;
      --raio-borda: 8px;
      --transicao: all 0.3s ease;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body { 
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; 
      background-color: var(--cor-fundo); 
      color: var(--cor-texto); 
      line-height: 1.6; 
    }

    /* Cabeçalho e Navegação */
    header { 
      background-color: rgba(1, 2, 5, 0.95); 
      color: var(--cor-texto); 
      padding: 1.2rem 2rem; 
      position: sticky; 
      top: 0; 
      z-index: 100; 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }
    
    header h1 {
      font-size: 1.3rem;
      letter-spacing: 1px;
    }

    nav a { 
      color: var(--cor-suave); 
      text-decoration: none; 
      margin-left: 1.2rem; 
      font-weight: 500; 
      font-size: 0.95rem;
      transition: var(--transicao);
    }

    nav a:hover { 
      color: var(--cor-destaque); 
    }

    /* Seções Gerais */
    section { 
      padding: 3.5rem 2rem; 
      max-width: 1000px; 
      margin: 0 auto; 
    }

    h2 { 
      margin-bottom: 1.5rem; 
      color: var(--cor-texto); 
      border-bottom: 2px solid var(--cor-destaque); 
      display: inline-block; 
      padding-bottom: 0.3rem; 
      font-size: 1.8rem;
    }

    /* Cartão Interativo e Geral */
    .card-interativo, .card-servico { 
      background: var(--cor-card); 
      border-radius: var(--raio-borda); 
      padding: 2rem; 
      box-shadow: 0 4px 12px rgba(0,0,0,0.3); 
      margin-top: 1rem; 
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .card-interativo h3, .card-servico h3 {
      margin-bottom: 0.8rem;
      color: var(--cor-destaque);
    }

    .conteudo-oculto { 
      display: none; 
      margin-top: 1rem; 
      padding-top: 1rem; 
      border-top: 1px solid rgba(255, 255, 255, 0.1); 
      color: var(--cor-suave); 
    }

    .btn-toggle, .btn-enviar { 
      background-color: var(--cor-destaque); 
      color: #050505; 
      font-weight: 600;
      border: none; 
      padding: 0.7rem 1.4rem; 
      border-radius: 6px; 
      cursor: pointer; 
      font-size: 0.95rem; 
      margin-top: 1.2rem;
      transition: var(--transicao); 
    }

    .btn-toggle:hover, .btn-enviar:hover { 
      opacity: 0.9;
      transform: translateY(-2px);
    }

    /* Grid de Serviços */
    .grid-servicos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }

    .card-servico i {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--cor-destaque);
    }

    /* Galeria de Imagens (Zoom no Hover) */
    .galeria { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
      gap: 1.5rem; 
      margin-top: 1.5rem; 
    }

    .galeria-item {
      overflow: hidden;
      border-radius: var(--raio-borda);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      background: var(--cor-card);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    .galeria-item img { 
      width: 100%; 
      height: 200px; 
      object-fit: cover; 
      display: block;
      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s ease; 
    }

    .galeria-item:hover img { 
      transform: scale(1.15); 
      filter: brightness(1.08); 
    }

    /* Vídeo Responsivo */
    .video-container { 
      position: relative; 
      padding-bottom: 56.25%; 
      height: 0; 
      overflow: hidden; 
      border-radius: var(--raio-borda); 
      box-shadow: 0 4px 12px rgba(0,0,0,0.3); 
      margin-top: 1.5rem; 
      border: 1px solid rgba(255,255,255,0.1);
    }

    .video-container video { 
      position: absolute; 
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      border: 0; 
      object-fit: cover;
    }

    /* Seção FAQ (Perguntas Frequentes) */
    .faq-item {
      background: var(--cor-card);
      border-radius: var(--raio-borda);
      margin-bottom: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      overflow: hidden;
    }

    .faq-pergunta {
      width: 100%;
      text-align: left;
      padding: 1.2rem;
      background: none;
      border: none;
      color: var(--cor-texto);
      font-size: 1.05rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .faq-resposta {
      max-height: 0;
      overflow: hidden;
      padding: 0 1.2rem;
      transition: max-height 0.3s ease, padding 0.3s ease;
      color: var(--cor-suave);
      font-size: 0.95rem;
    }

    .faq-item.ativo .faq-resposta {
      max-height: 200px;
      padding: 0 1.2rem 1.2rem 1.2rem;
    }

    /* Formulário de Contato */
    .form-contato {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    .form-grupo {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .form-grupo label {
      font-size: 0.9rem;
      color: var(--cor-suave);
    }

    .form-grupo input, .form-grupo textarea {
      padding: 0.8rem;
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(255,255,255,0.05);
      color: var(--cor-texto);
      font-family: inherit;
    }

    .form-grupo input:focus, .form-grupo textarea:focus {
      outline: 1px solid var(--cor-destaque);
    }

    /* Botão Flutuante do WhatsApp */
    .whatsapp-float {
      position: fixed;
      width: 55px;
      height: 55px;
      bottom: 25px;
      right: 25px;
      background-color: var(--cor-whatsapp);
      color: #FFF;
      border-radius: 50px;
      text-align: center;
      font-size: 28px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.4);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: var(--transicao);
    }

    .whatsapp-float:hover {
      transform: scale(1.1);
    }

    /* Modal (Lightbox) */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 2000;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      backdrop-filter: blur(5px);
      animation: fadeIn 0.3s ease-in-out;
    }

    .modal-conteudo {
      max-width: 90%;
      max-height: 85vh;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      object-fit: contain;
    }

    .modal-fechar {
      position: absolute;
      top: 20px;
      right: 30px;
      color: #ffffff;
      font-size: 2.5rem;
      font-weight: bold;
      cursor: pointer;
      transition: var(--transicao);
    }

    .modal-fechar:hover {
      color: #ff4d4d;
    }

    /* Rodapé */
    footer { 
      text-align: center; 
      padding: 2rem; 
      background-color: rgba(0, 0, 0, 0.3); 
      color: var(--cor-suave); 
      margin-top: 3rem; 
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 0.9rem;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>

  <!-- Cabeçalho -->
  <header>
    <h1>MENQUEL DIGITAL SERVICES</h1>
    <nav>
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#galeria">Projetos</a>
      <a href="#faq">Dúvidas</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <!-- Botão Flutuante do WhatsApp (Insira seu número com DDD no link) -->
  <a href="https://wa.me/5541985063855?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" 
     class="whatsapp-float" target="_blank" title="Fale conosco no WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
  </a>

  <!-- Seção 1: Apresentação -->
  <section id="sobre">
    <h2>Apresentação</h2>
    <div class="card-interativo">
      <h3>Sobre Nossa Empresa</h3>
      <p>Visando a melhoria de apresentações para pessoas autônomas e empresas, nós da <b>Menquel Digital Services</b> oferecemos soluções personalizadas para estruturar modelos intuitivos e funcionais de acordo com suas necessidades.</p>
      
      <button class="btn-toggle" onclick="alternarTexto()">Expandir Detalhes</button>
      
      <div id="textoOculto" class="conteudo-oculto">
        <p>Igor Henrique e Jean Hasquel são os dois responsáveis por essa área de atuação, dedicando seu esforço com o objetivo de trazer a melhor experiência visual e operacional para o cliente final.</p>
      </div>
    </div>
  </section>

  <!-- Seção 2: Serviços Prestados -->
  <section id="servicos">
    <h2>Serviços Prestados</h2>
    <div class="grid-servicos">
      <div class="card-servico">
        <i class="fa-solid fa-chart-line"></i>
        <h3>Dashboards & Relatórios</h3>
        <p>Desenvolvimento de painéis interativos e visualização de dados para acompanhar métricas e otimizar a tomada de decisões.</p>
      </div>

      <div class="card-servico">
        <i class="fa-solid fa-globe"></i>
        <h3>Apresentações Web</h3>
        <p>Criação de páginas personalizadas, portfólios e páginas de captura modernas, responsivas e intuitivas.</p>
      </div>

      <div class="card-servico">
        <i class="fa-solid fa-sitemap"></i>
        <h3>Mapeamento de Processos</h3>
        <p>Estruturação de Procedimentos Operacionais Padrão (POP), fluxogramas e checklists visuais para equipes.</p>
      </div>

      <div class="card-servico">
        <i class="fa-solid fa-headphones"></i>
        <h3>Comunicação por Proximidade <b>NFC</b></h3>
        <p>Implementação de soluções de comunicação baseadas em tecnologia NFC para interação próxima e transferência de dados.</p>
      </div>
    </div>
  </section>

  <!-- Seção 3: Galeria de Projetos -->
  <section id="galeria">
    <h2>Galeria de Trabalhos</h2>
    <div class="galeria">
      <div class="galeria-item">
        <img src="https://i.imgur.com/gX9CkiE.png" alt="Exemplo 1" onclick="abrirModal(this)">
      </div>
      <div class="galeria-item">
        <img src="https://i.imgur.com/LqMUgT2.png" alt="Exemplo 2" onclick="abrirModal(this)">
      </div>
      <div class="galeria-item">
        <img src="https://i.imgur.com/608s1qm.png" alt="Exemplo 3" onclick="abrirModal(this)">
      </div>
      <div class="galeria-item">
        <img src="https://i.imgur.com/Sh51BU8.png" alt="Exemplo 4" onclick="abrirModal(this)">
      </div>
      <div class="galeria-item">
        <img src="https://i.imgur.com/x2Ado3J.png" alt="Exemplo 4" onclick="abrirModal(this)">
      </div>
      <div class="galeria-item">
        <img src="https://imgur.com/Lob2i9j.png" alt="Exemplo 4" onclick="abrirModal(this)">
      </div>
    </div>
  </section>

  <!-- Seção 4: Vídeo Demonstrativo -->
  <section id="video">
    <h2>Vídeo em Destaque</h2>
    <div class="video-container">
      <video src="https://imgur.com/r3GFIRw.mp4" controls class="id-video"></video>
    </div>
  </section>

  <!-- Seção 5: Perguntas Frequentes (FAQ) -->
  <section id="faq">
    <h2>Dúvidas Frequentes</h2>
    
    <div class="faq-item">
      <button class="faq-pergunta" onclick="toggleFaq(this)">
        <span>Como funciona o processo de contratação?</span>
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <div class="faq-resposta">
        <p>Iniciamos com uma conversa para entender suas necessidades, definimos o escopo do projeto, prazos e orçamento. Após a aprovação, iniciamos o desenvolvimento com alinhamentos periódicos.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-pergunta" onclick="toggleFaq(this)">
        <span>Qual o prazo médio de entrega?</span>
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <div class="faq-resposta">
        <p>O prazo varia conforme a complexidade do projeto. Trabalhos mais simples podem ser entregues em poucos dias, enquanto dashboards ou sites mais elaborados têm prazos alinhados previamente.</p>
      </div>
    </div>
  </section>

  <!-- Seção 6: Contato -->
  <section id="contato">
    <h2>Entre em Contato</h2>
    <div class="card-interativo">
      <h3>Solicite um Orçamento</h3>
      <form class="form-contato" onsubmit="enviarMensagem(event)">
        <div class="form-grupo">
          <label for="nome">Seu Nome:</label>
          <input type="text" id="nome" required placeholder="Digite seu nome">
        </div>
        <div class="form-grupo">
          <label for="email">Seu E-mail ou WhatsApp:</label>
          <input type="text" id="email" required placeholder="Digite seu e-mail ou número de contato">
        </div>
        <div class="form-grupo">
          <label for="mensagem">Como podemos ajudar?</label>
          <textarea id="mensagem" rows="4" required placeholder="Descreva brevemente o projeto ou serviço desejado"></textarea>
        </div>
        <button type="submit" class="btn-enviar">Enviar Mensagem</button>
      </form>
    </div>
  </section>

  <!-- Modal sobreposto -->
  <div id="meuModal" class="modal" onclick="fecharModalFora(event)">
    <span class="modal-fechar" onclick="fecharModal()">&times;</span>
    <img class="modal-conteudo" id="imagemExpandida" alt="Imagem ampliada">
  </div>

  <!-- Rodapé -->
  <footer>
    <p>&copy; 2026 - Jean Hasquel - Menquel Digital Services. Todos os direitos reservados.</p>
  </footer>

  <!-- JavaScript -->
  <script>
    // Expandir / Recolher texto de apresentação
    function alternarTexto() {
      const elemento = document.getElementById('textoOculto');
      const botao = document.querySelector('.btn-toggle');
      
      if (elemento.style.display === 'block') {
        elemento.style.display = 'none';
        botao.textContent = 'Expandir Detalhes';
      } else {
        elemento.style.display = 'block';
        botao.textContent = 'Recolher Detalhes';
      }
    }

    // Modal de Imagens
    const modal = document.getElementById('meuModal');
    const imagemExpandida = document.getElementById('imagemExpandida');

    function abrirModal(elementoImg) {
      modal.style.display = 'flex';
      imagemExpandida.src = elementoImg.src;
      imagemExpandida.alt = elementoImg.alt;
      document.body.style.overflow = 'hidden'; 
    }

    function fecharModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; 
    }

    function fecharModalFora(event) {
      if (event.target === modal) {
        fecharModal();
      }
    }

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'flex') {
        fecharModal();
      }
    });

    // Função Accordion para FAQ
    function toggleFaq(botao) {
      const item = botao.parentElement;
      item.classList.toggle('ativo');
    }

    // Função de envio simples do formulário (Alerta demonstrativo)
    function enviarMensagem(event) {
      event.preventDefault();
      alert('Obrigado pelo contato! Sua mensagem foi recebida e responderemos em breve.');
      event.target.reset();
    }
  </script>

</body>
</html>
git add index.html google-apps-script.gs README.md
git commit -m "Publica site e integra formulario"
git push origin main