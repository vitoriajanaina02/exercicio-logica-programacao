let nomeVendedor = prompt("Qual o nome do vendedor?");
let nivelVendedor = Number(prompt("Qual o nível do vendedor? Digite 1, 2 ou 3:"));
let vendaVendedor = Number(prompt("Digite o valor total de vendas: "));

function nivelVenda1() {
    if (vendaVendedor > 80000) {
        alert(`O vendedor ${nomeVendedor}, nível 1, foi promovido ao nível 2.`);
    } 
    else if (vendaVendedor > 50000) {
        let bonificacao = vendaVendedor * 0.35;
        alert(`O vendedor ${nomeVendedor}, nível 1, deverá receber uma bonificação de R$${bonificacao.toFixed(2)}.`);
    } 
    else if (vendaVendedor > 20000) {
        let bonificacao = vendaVendedor * 0.20;
        alert(`O vendedor ${nomeVendedor}, nível 1, deverá receber uma bonificação de R$${bonificacao.toFixed(2)}.`);
    } 
    else if (vendaVendedor < 5000) {
        alert(`O vendedor ${nomeVendedor}, nível 1, está em risco de demissão.`);
    }
}

function nivelVenda2() {
    if (vendaVendedor > 200000) {
        alert(`O vendedor ${nomeVendedor}, nível 2, foi promovido ao nível 3.`);
    } 
    else if (vendaVendedor > 120000) {
        let bonificacao = vendaVendedor * 0.40;
        alert(`O vendedor ${nomeVendedor}, nível 2, deverá receber uma bonificação de R$${bonificacao.toFixed(2)}.`);
    } 
    else if (vendaVendedor > 90000) {
        let bonificacao = vendaVendedor * 0.25;
        alert(`O vendedor ${nomeVendedor}, nível 2, deverá receber uma bonificação de R$${bonificacao.toFixed(2)}.`);
    } 
    else if (vendaVendedor < 50000) {
        alert(`O vendedor ${nomeVendedor}, nível 2, está em risco de virar nível 1.`);
    }
}

function nivelVenda3() {
    if (vendaVendedor > 500000) {
        alert(`O vendedor ${nomeVendedor}, nível 3, virou o dono da firma!`);
    } 
    else if (vendaVendedor > 250000) {
        let bonificacao = vendaVendedor * 0.45;
        alert(`O vendedor ${nomeVendedor}, nível 3, deverá receber uma bonificação de R$${bonificacao.toFixed(2)}.`);
    } 
    else if (vendaVendedor > 210000) {
        let bonificacao = vendaVendedor * 0.30;
        alert(`O vendedor ${nomeVendedor}, nível 3, deverá receber uma bonificação de R$${bonificacao.toFixed(2)}.`);
    } 
    else if (vendaVendedor < 100000) {
        alert(`O vendedor ${nomeVendedor}, nível 3, está em risco de virar nível 2.`);
    }
}

if (nivelVendedor === 1) {
    nivelVenda1();
} 
else if (nivelVendedor === 2) {
    nivelVenda2();
} 
else if (nivelVendedor === 3) {
    nivelVenda3();
} 
else {
    alert("Nível inválido! Digite 1, 2 ou 3.");
}