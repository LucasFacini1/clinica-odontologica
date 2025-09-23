# 🦷 DentalCare - Landing Page Odontológica

Uma landing page moderna e responsiva para clínicas odontológicas, desenvolvida com React 18, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional voltada para o segmento odontológico
- **Totalmente Responsivo**: Mobile-first design que funciona perfeitamente em todos os dispositivos
- **Animações Fluidas**: Transições suaves com Framer Motion
- **SEO Otimizado**: Meta tags, Open Graph e estrutura semântica
- **Performance**: Lazy loading de imagens e otimizações de carregamento
- **Integração WhatsApp**: CTAs diretos para agendamento via WhatsApp

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal para a interface
- **TypeScript** - Tipagem estática para mais segurança
- **Tailwind CSS** - Framework de estilos para design responsivo
- **Framer Motion** - Animações fluidas e transições
- **Lucide React** - Ícones modernos e leves

## 📱 Seções Incluídas

1. **Header** - Logo fictícia e navegação responsiva
2. **Hero** - Título impactante com CTA para WhatsApp
3. **Destaques** - 6 diferenciais da clínica com ícones
4. **Serviços** - Portfólio com 6 serviços principais
5. **Contato** - Formulário de contato (layout pronto)
6. **Endereço** - Localização com mapa fictício
7. **Footer** - Redes sociais e informações de contato

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd clinica-odontologica
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Build para Produção

```bash
npm run build
```

### Deploy no GitHub Pages

```bash
npm run deploy
```

## 🎨 Customização

### Cores
As cores principais estão definidas no `tailwind.config.js`:
- **Primary**: Azul (#2563eb) - cor principal da marca
- **Secondary**: Cinza (#64748b) - cor secundária

### Conteúdo
- **Textos**: Edite diretamente nos componentes em `src/sections/`
- **Imagens**: Substitua as URLs do Unsplash pelas imagens reais
- **Contatos**: Atualize os números de telefone e emails nos componentes

### Formulário de Contato
O formulário está preparado para integração com Formspree:
1. Crie uma conta no [Formspree](https://formspree.io)
2. Substitua a action do formulário pela URL fornecida
3. Configure os campos conforme necessário

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé com informações
│   └── LazyImage.tsx   # Componente para lazy loading
├── sections/           # Seções da landing page
│   ├── Hero.tsx        # Seção principal
│   ├── Highlights.tsx  # Destaques da clínica
│   ├── Services.tsx    # Serviços oferecidos
│   ├── Contact.tsx     # Formulário de contato
│   └── Address.tsx     # Localização
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
└── assets/             # Recursos estáticos
```

## 🎯 Próximos Passos

Para personalizar para um cliente específico:

1. **Identidade Visual**:
   - Substituir logo e cores da marca
   - Atualizar textos e informações da clínica
   - Trocar imagens por fotos reais da clínica

2. **Funcionalidades**:
   - Integrar formulário com Formspree ou Netlify Forms
   - Adicionar Google Analytics
   - Implementar chat online

3. **SEO**:
   - Atualizar meta tags com informações reais
   - Adicionar Google My Business
   - Implementar Schema.org markup

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do GitHub Issues.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para clínicas odontológicas**