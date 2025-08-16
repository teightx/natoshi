# 🚀 Guia de Deploy - natoshi.exe

## 📋 Passos para Publicar no GitHub Pages

### 1. Criar o Repositório no GitHub

1. **Acesse**: https://github.com/new
2. **Nome do repositório**: `natoshi-exe`
3. **Descrição**: `High-tech cyberpunk link-in-bio page`
4. **Visibilidade**: Public (recomendado)
5. **NÃO** marque "Add a README file" (já temos um)
6. **Clique**: "Create repository"

### 2. Fazer Push do Código

Execute estes comandos no terminal (já estamos no diretório correto):

```bash
# Verificar se estamos no diretório certo
pwd
# Deve mostrar: /Users/thiagosantos/Documents/natoshi-exe

# Fazer push (o repositório já foi criado)
git push -u origin main
```

### 3. Ativar GitHub Pages

1. **Vá para**: https://github.com/teightx/natoshi-exe
2. **Clique em**: Settings (aba)
3. **Role para baixo**: Pages (menu lateral esquerdo)
4. **Source**: Deploy from a branch
5. **Branch**: main
6. **Folder**: / (root)
7. **Clique**: Save

### 4. Seu Site Estará Disponível Em

```
https://teightx.github.io/natoshi-exe
```

---

## 🖼️ Onde Colocar as Imagens

### 📁 Estrutura de Arquivos

```
natoshi-exe/
├── assets/
│   ├── logo.png           ← SUA LOGO AQUI
│   ├── og-image.png       ← IMAGEM PARA REDES SOCIAIS
│   ├── gallery-1.jpg      ← SUA FOTO 1
│   ├── gallery-2.jpg      ← SUA FOTO 2
│   └── gallery-3.jpg      ← SUA FOTO 3
```

### 🎯 Instruções para Cada Imagem

#### **1. Logo (`/assets/logo.png`)**
- **Tamanho**: 64x64 pixels (recomendado)
- **Formato**: PNG com transparência
- **Onde aparece**: Canto superior esquerdo da página
- **Exibição**: 48px no desktop, 40px no mobile

#### **2. OG Image (`/assets/og-image.png`)**
- **Tamanho**: 1200x630 pixels (16:9)
- **Formato**: PNG ou JPG
- **Onde aparece**: Quando o link é compartilhado no Instagram, Twitter, etc.
- **Dica**: Inclua seu nome/handle e mantenha alto contraste

#### **3. Fotos da Galeria**
- **Tamanho**: 400x400 pixels (quadrado)
- **Formato**: JPG ou PNG
- **Onde aparecem**: Seção de galeria na página
- **Carregamento**: Lazy loading (carregam conforme você rola)

### 🔄 Como Substituir as Imagens

1. **Substitua os arquivos placeholder** pelos seus arquivos reais
2. **Mantenha os nomes exatos**:
   - `logo.png`
   - `og-image.png`
   - `gallery-1.jpg`
   - `gallery-2.jpg`
   - `gallery-3.jpg`

3. **Faça commit das mudanças**:
   ```bash
   git add assets/
   git commit -m "Add custom images"
   git push
   ```

---

## 🎨 Personalização

### Mudar Conteúdo
Edite `index.html` para alterar:
- Título: `natoshi.exe`
- Bio: As duas linhas de descrição
- Links sociais: URLs do Instagram, TikTok, YouTube

### Mudar Cores
Edite `styles/main.css` para alterar:
- **Temas**: Noir, Dusk, Vapor
- **Acentos**: Cyan, Magenta, Lima, Amber

### Exemplo de Mudança de Cor
```css
:root {
  --accent-cyan: #00ffe1;    /* Cor principal */
  --accent-magenta: #ff4bd8; /* Cor alternativa */
}
```

---

## ✅ Checklist de Deploy

- [ ] Criar repositório no GitHub
- [ ] Fazer push do código
- [ ] Ativar GitHub Pages
- [ ] Substituir logo
- [ ] Criar OG image
- [ ] Adicionar fotos da galeria
- [ ] Testar o site
- [ ] Compartilhar o link!

---

## 🆘 Suporte

Se algo não funcionar:
1. Verifique se o repositório foi criado corretamente
2. Confirme se o GitHub Pages está ativo
3. Aguarde alguns minutos para o deploy
4. Verifique se os nomes dos arquivos estão corretos

**Seu site estará online em**: `https://teightx.github.io/natoshi-exe` 🎉
