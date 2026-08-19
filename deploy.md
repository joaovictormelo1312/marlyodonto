# Deploy na Vercel

Este projeto faz deploy automaticamente na Vercel quando um commit é enviado para a branch `main` do GitHub.

## Configuração inicial

Essa etapa precisa ser feita apenas uma vez:

1. Acesse [vercel.com](https://vercel.com) e entre na conta da equipe ou do projeto.
2. Clique em **Add New...** e depois em **Project**.
3. Importe o repositório `joaovictormelo1312/smile-converter`.
4. Confirme as configurações:
   - **Framework Preset:** Vite ou detecção automática.
   - **Build Command:** `bun run build`.
   - **Install Command:** `bun install`.
   - **Output Directory:** deixe a detecção automática do TanStack Start/Nitro.
   - **Production Branch:** `main`.
5. Cadastre na Vercel todas as variáveis de ambiente usadas em produção, caso existam.
6. Clique em **Deploy**.

Depois dessa configuração, a Vercel acompanha o repositório e inicia um novo deploy a cada push na branch `main`.

## Alterando o projeto

1. Entre na pasta do projeto:

   ```bash
   cd /Users/melo/Desktop/mae/smile-converter
   ```

2. Faça as alterações nos arquivos necessários.
3. Verifique o que foi alterado:

   ```bash
   git status
   git diff
   ```

4. Rode as validações disponíveis:

   ```bash
   bun run lint
   bun run build
   ```

   O lint pode apontar problemas de formatação ou avisos já existentes em outros arquivos. O build precisa terminar sem erro antes do deploy.

5. Adicione os arquivos alterados:

   ```bash
   git add .
   ```

   Para adicionar apenas um arquivo, use, por exemplo:

   ```bash
   git add src/components/site/Header.tsx
   ```

6. Crie o commit com uma mensagem objetiva:

   ```bash
   git commit -m "descreva a alteração"
   ```

7. Envie o commit para a branch de produção:

   ```bash
   git push origin main
   ```

## Acompanhando o deploy

Após o `push`:

1. Abra o projeto na Vercel.
2. Acesse a aba **Deployments**.
3. Verifique o deployment criado a partir do commit mais recente.
4. Aguarde o status **Ready**.
5. Abra a URL de produção e confira a alteração no site.

A Vercel também cria deployments de preview para outras branches e pull requests. Esses previews não substituem a produção até que o código seja enviado ou mesclado na branch `main`.

## Se o deploy falhar

1. Abra o deployment com status de erro na Vercel.
2. Consulte os **Build Logs** e localize o primeiro erro real.
3. Corrija o problema localmente.
4. Rode novamente:

   ```bash
   bun run lint
   bun run build
   ```

5. Faça um novo commit e envie:

   ```bash
   git add .
   git commit -m "corrige falha no deploy"
   git push origin main
   ```

Não use `git push --force` na branch `main`, pois isso pode sobrescrever o histórico compartilhado do projeto.

## Fluxo resumido

```bash
cd /Users/melo/Desktop/mae/smile-converter
bun run lint
bun run build
git add .
git commit -m "descreva a alteração"
git push origin main
```

O último comando dispara automaticamente um novo deployment de produção na Vercel, desde que o repositório esteja conectado ao projeto correto e a branch de produção esteja configurada como `main`.
