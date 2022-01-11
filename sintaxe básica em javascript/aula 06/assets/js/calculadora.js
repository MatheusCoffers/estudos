function calculadora() {
    const OPERACAO = prompt('Escolha uma opção (número):\n 1 - soma (+) \n 2 - subtração (-) \n 3 - multiplicação (*) \n 4 - divisao real (/) \n 5 - divisao inteira (%) \n 6 - potenciação (**) ');

    if (!OPERACAO || OPERACAO >= 7) {
        alert('Erro - operação inválida');
        calculadora();
    } else {
        let n1 = Number(prompt('insira o primeiro valor: '));
        let n2 = Number(prompt('insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos');
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n1 - sim\n2 - não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('até mais');
                } else {
                    alert('essa opção não é válida!')
                    novaOperacao();
                }
            }

            if (OPERACAO == 1) {
                soma();
            } else if (OPERACAO == 2) {
                subtracao();
            } else if (OPERACAO == 3) {
                multiplicacao();
            } else if (OPERACAO == 4) {
                divisaoReal();
            } else if (OPERACAO == 5) {
                divisaoInteira();
            } else if (OPERACAO == 6) {
                potenciacao();
            }
        }
    }
}

calculadora();



