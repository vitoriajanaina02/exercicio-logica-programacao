# Situação Problema

Você é o diretor de tecnologia de uma empresa que presta serviços de Recursos Humanos. E devido a época do ano é necessário avaliar o desempenho de cada vendedor para calcular suas bonificações.

Portanto, desenvolva um sistema que:

1. Pede o nome do vendedor.
2. Pergunta se ele é um vendedor nível I, II ou III.
3. Pergunta quanto o vendedor vendeu.

As regras de bonificação serão as seguintes:

1. Para os funcionários nível I:
    1. Se o vendedor vendeu mais de R$20.000,00 a bonificação será de 20%.
    2. Se o vendedor vendeu mais de R$50.000,00 a bonificação será de 35%.
    3. Se o vendedor vendeu mais de R$80.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível I foi promovido ao nível II”.
    4. Se o vendedor vendeu menos de R$5.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível I, está em risco de demissão.”
2. Para os funcionários nível II:
    1. Se o vendedor vendeu mais de R$90.000,00 a bonificação será de 25%.
    2. Se o vendedor vendeu mais de R$120.000,00 a bonificação será de 40%.
    3. Se o vendedor vendeu mais de R$200.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível II, foi promovido ao nível III”.
    4. Se o vendedor vendeu menos de R$50.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível II, está em risco de virar nível I.”
3. Para os funcionários nível III:
    1. Se o vendedor vendeu mais de R$210.000,00 a bonificação será de 30%.
    2. Se o vendedor vendeu mais de R$250.000,00 a bonificação será de 45%.
    3. Se o vendedor vendeu mais de R$500.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível III, virou o dono da firma!”.
    4. Se o vendedor vendeu menos de R$100.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível III, está em risco de virar nível II.”

## Observação

Quando o funcionário tiver uma bonificação, você deverá exibir na tela um alerta com a seguinte mensagem:

> “O vendedor ${NOME DO VENDEDOR}, nível ${NÍVEL DO VENDEDOR, deverá receber um bonificação de ${VALOR DO AUMENTO}.”

