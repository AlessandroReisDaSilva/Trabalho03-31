# Exercício Git

Utilizando o código de exemplo fornecido, montem equipes. No GitHub, criem um projeto, adicionem o código de exemplo e adicionem todos os integrantes da equipe como colaboradores.

## To-Do

1. Adicionar todos os integrantes da equipe com o perfil de **colaborador**.
2. Todos os membros devem clonar o projeto em suas máquinas.
3. Cada membro deve definir e executar uma tarefa simples, por exemplo:
   - criação/atualização do README
   - ajuste de menu
   - ajuste/criação de função ou método
4. Criar um arquivo `.gitignore` no repositório.
5. Assim que terminar, cada membro precisa enviar suas atualizações para o repositório remoto.

> Dica importante: antes de enviar atualizações, sempre baixe as possíveis atualizações do remoto (`git pull`).

## Parte 2: Ramificação do Desenvolvimento

Nesta etapa, o objetivo é praticar fluxo com branches.

1. Criar uma branch `dev` a partir da branch principal (`main` ou `master`).
2. Cada membro deve definir uma tarefa distinta e criar, a partir da `dev`, uma branch no padrão:

   `feature/nome-da-funcionalidade`

3. Desenvolver a funcionalidade na branch de feature.
4. Ao concluir, enviar a branch para o repositório remoto.
5. Abrir uma solicitação de mesclagem (Pull Request/Merge Request) da feature para a `dev`.
6. Realizar a mesclagem na `dev` no repositório remoto.
7. Garantir que todos os integrantes do grupo fizeram suas entregas e que todas foram mescladas na `dev`.
8. Chamar o professor para apresentação.

## Submissão

Cada membro do grupo deve enviar o **link do repositório público** para avaliação do professor nesta atividade.

## Fluxo Sugerido de Comandos Git

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Atualizar a branch principal
git checkout main
git pull origin main

# Criar branch de desenvolvimento
git checkout -b dev
git push -u origin dev

# Criar branch de feature a partir da dev
git checkout dev
git pull origin dev
git checkout -b feature/nome-da-funcionalidade

# Fazer alterações e versionar
git add .
git commit -m "feat: descrição da funcionalidade"

# Enviar feature para o remoto
git push -u origin feature/nome-da-funcionalidade
```

## Observações

- Mantenham commits pequenos e com mensagens claras.
- Sincronizem frequentemente com o remoto para evitar conflitos.
- Em caso de conflito, resolvam localmente e testem antes de enviar novamente.

## 🖼️ Prévia

![Prévia do projeto](instrucoes.jpg)

## Membros

<a href="https://github.com/AlessandroReisDaSilva"><img src="https://github.com/AlessandroReisDaSilva.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/Elinton-Souza"><img src="https://github.com/Elinton-Souza.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/Rafaelpereira07"><img src="https://github.com/Rafaelpereira07.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/GuilhermeMaglia"><img src="https://github.com/GuilhermeMaglia.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/gustavobarbosa-dev"><img src="https://github.com/gustavobarbosa-dev.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/Renycosta"><img src="https://github.com/Renycosta.png" width="45" height="45"></a> &nbsp;
