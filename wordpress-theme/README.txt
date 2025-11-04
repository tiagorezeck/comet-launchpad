=== Instituto COMET - Tema WordPress ===

Tema desenvolvido especialmente para o Instituto COMET
Versão: 1.0.0
Requer WordPress 5.0 ou superior
Testado até: WordPress 6.4
Licença: GPLv2 ou posterior

== INSTALAÇÃO ==

1. Faça o download de todos os arquivos da pasta wordpress-theme
2. Crie um arquivo ZIP com todos os arquivos (importante: os arquivos devem estar na raiz do ZIP, não dentro de uma pasta)
3. No WordPress, vá em Aparência > Temas
4. Clique em "Adicionar novo" > "Enviar tema"
5. Faça upload do arquivo ZIP
6. Clique em "Ativar"

== ESTRUTURA DE ARQUIVOS ==

wordpress-theme/
├── style.css          (Estilos principais e informações do tema)
├── functions.php      (Funções e configurações do tema)
├── header.php         (Cabeçalho do site)
├── footer.php         (Rodapé do site)
├── index.php          (Template principal/blog)
├── page.php           (Template de páginas)
├── single.php         (Template de posts individuais)
├── front-page.php     (Template da página inicial)
├── page-parceiros.php (Template da página Parceiros)
├── template-parts/
│   └── diagnostico-popup.php (Popup de diagnóstico gratuito)
├── js/
│   └── scripts.js     (JavaScript do tema)
└── README.txt         (Este arquivo)

== CONFIGURAÇÃO INICIAL ==

Após ativar o tema:

1. CONFIGURAR MENUS:
   - Vá em Aparência > Menus
   - Crie um menu chamado "Menu Principal"
   - Adicione as páginas: Home, Sobre Nós, Serviços, Portfólio, Vendas, Parceiros, Vlog, Contato
   - Marque a localização "Menu Principal"
   - Salve o menu

2. CONFIGURAR LOGO:
   - Vá em Aparência > Personalizar > Identidade do site
   - Faça upload do logo COMET (use o arquivo comet-logo.png)
   - Ajuste o tamanho conforme necessário

2.1 CONFIGURAR FAVICON (ÍCONE DO SITE):
   - Ainda em Aparência > Personalizar > Identidade do site
   - Role até "Ícone do Site"
   - Clique em "Selecionar ícone do site"
   - Faça upload da imagem logocometa.png
   - O WordPress criará automaticamente os tamanhos necessários (32x32, 192x192, 180x180)
   - Clique em "Publicar" para salvar

3. CONFIGURAR INFORMAÇÕES DE CONTATO:
   - Vá em Aparência > Personalizar
   - Procure a seção "Informações de Contato"
   - Preencha:
     * WhatsApp: 5524999382195
     * Email: contato@institutocomet.com.br
     * Telefone: (24) 99938-2195

4. CONFIGURAR REDES SOCIAIS:
   - Na mesma área de Personalizar
   - Procure "Redes Sociais"
   - Adicione:
     * Instagram: https://www.instagram.com/tiagorezeckcomet/
     * YouTube: https://www.youtube.com/@institutocomet
     * LinkedIn: https://www.linkedin.com/in/tiagorezeck/

5. CONFIGURAR PÁGINA INICIAL:
   - Vá em Configurações > Leitura
   - Selecione "Uma página estática"
   - Escolha sua página "Home" como página inicial
   - Escolha uma página para o blog (ou crie uma chamada "Blog")

== PLUGINS RECOMENDADOS ==

Para funcionalidade completa, instale:

1. Contact Form 7 (para formulários de contato)
   - Após instalar, crie um formulário
   - Use o shortcode [comet_contact_form] nas páginas

2. Yoast SEO (para otimização SEO)
   - Configure títulos e meta descriptions

3. WP Super Cache (para performance)
   - Ative o cache para melhorar velocidade

4. Advanced Custom Fields (ACF) - Opcional
   - Para adicionar campos personalizados

== CRIANDO PÁGINAS ==

Crie as seguintes páginas no WordPress:

1. Home (use como página inicial)
2. Sobre Nós
3. Serviços
4. Portfólio
5. Vendas
6. Parceiros (será automaticamente estilizada com o template page-parceiros.php)
7. Vlog
8. Contato (adicione o formulário de contato)

IMPORTANTE - Página Parceiros:
- Ao criar a página "Parceiros", o template especial será aplicado automaticamente
- Para adicionar os logos dos parceiros:
  * Acesse a pasta wordpress-theme/assets/partners/
  * Faça upload das imagens: automac.png, jess.png, farmer.png
  * Ou edite o arquivo page-parceiros.php para apontar para suas imagens

== CUSTOM POST TYPES ==

O tema inclui dois tipos de conteúdo personalizados:

1. SERVIÇOS
   - Aparecerá no menu lateral do admin
   - Use para criar cards de serviços
   - Adicione título, descrição e imagem destacada

2. DEPOIMENTOS
   - Para depoimentos de clientes
   - Adicione foto (imagem destacada) e texto do depoimento

== SHORTCODES DISPONÍVEIS ==

[whatsapp text="Texto do botão" message="Mensagem para enviar"]
   - Cria um botão de WhatsApp personalizado
   - Exemplo: [whatsapp text="Fale Conosco" message="Olá, vim pelo site"]

[comet_contact_form]
   - Exibe o formulário de contato (requer Contact Form 7)

== PERSONALIZAÇÕES CSS ==

Para adicionar CSS customizado:
1. Vá em Aparência > Personalizar
2. Procure por "CSS Adicional"
3. Adicione seu CSS personalizado

Ou crie um plugin child theme para personalizações maiores.

== CORES DO SISTEMA ==

O tema usa as seguintes cores principais (variáveis CSS):
- Primary (Laranja COMET): hsl(16, 100%, 60%)
- Background (Preto): hsl(200, 15%, 8%)
- Foreground (Branco): hsl(0, 0%, 98%)
- Card: hsl(200, 15%, 10%)
- Border: hsl(200, 10%, 20%)

== FUNCIONALIDADES ==

✓ Design responsivo (mobile-first)
✓ Menu de navegação com submenu
✓ Integração com WhatsApp
✓ Sistema de cores COMET
✓ Cards animados
✓ Lazy loading de imagens
✓ Botão "voltar ao topo"
✓ Smooth scroll
✓ SEO otimizado
✓ Performance otimizada
✓ Popup de diagnóstico gratuito (aparece após 5s na home)
✓ Template especial para página de Parceiros
✓ Hero responsivo com imagem posicionada corretamente em mobile
✓ Favicon com múltiplos tamanhos

== SUPORTE ==

Para suporte técnico sobre o tema, entre em contato com:
contato@institutocomet.com.br

== CHANGELOG ==

= 1.0.0 =
* Lançamento inicial do tema
* Design baseado no site Lovable
* Integração completa com funcionalidades COMET
* Templates para todas as páginas principais
* Custom post types para Serviços e Depoimentos
* Sistema de personalização via Customizer
* Popup de diagnóstico gratuito com formulário integrado ao WhatsApp
* Template especial para página Parceiros com botões de CTA
* Hero section responsivo com object-position otimizado
* Sistema de favicon com múltiplos tamanhos (32x32, 192x192, 180x180)
* Ajustes de scroll automático para topo ao trocar páginas (nativo do WordPress)

== CRÉDITOS ==

Desenvolvido para Instituto COMET
Design inspirado no projeto Lovable
Usando WordPress, HTML5, CSS3, JavaScript/jQuery