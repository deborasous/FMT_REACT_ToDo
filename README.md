[M1S08] Ex 2 - Criar componente para receber texto da tarefa

INSTRUÇÕES:

Vamos criar um componente para criar uma tarefa. Ele deve ser chamado de CardAdicionar. Siga os passos do checklist abaixo para finalizar a tarefa.

1 - Crie um useState para guardar o texto da tarefa;

2 - Crie um input do tipo text que será usado para receber o texto da tarefa a ser criada;

3 - crie um botão para chamar a função de adicionar a tarefa;

4 - faça o botão chamar a função de adicionar tarefa

Este componente deve receber como prop a função para criar a tarefa e adicionar a lista de tarefas.

Por fim importe esse componente no App.jsx.

Exemplo de utilização de input tipo text:

<input
placeholder="adicionar tarefa"
type="text"
value={//value aqui}
onChange={//função aqui}
/>
