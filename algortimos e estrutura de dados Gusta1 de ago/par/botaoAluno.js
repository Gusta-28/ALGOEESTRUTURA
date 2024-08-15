
        let alunos = [];

        function lerDadosAluno() {
            let nome = document.getElementById('nome').value;
            let faltas = parseInt(document.getElementById('faltas').value);
            let media = parseFloat(document.getElementById('media').value);

            let aluno = {
                nome: nome,
                faltas: faltas,
                media: media
            };

            alunos.push(aluno);

            document.getElementById('alunoform').reset();

            exibirAlunos();
        }

        function exibirAlunos(){
            let listagen = document.getElementById('listagemAlunos')
            listagen.innerHTML = "<h2>listagen dos alunos:</h2>";
            for (let aluno of alunos){
                listagen.innerHTML += `<p>None: ${aluno.nome}, Faltas: ${aluno.faltas}, Média: ${aluno.media}</p>`;
            }
        }
   