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
> 
- **Fluxograma**
    
    ```mermaid
    flowchart TD
        A["Início"] --> B["Digite o nome do vendedor (input)"]
        B --> C["Digite o nível do vendedor (I, II ou III) (input)"]
        C --> D["Digite o valor total de vendas (input)"]
        
        D --> E{"Nível == I?"}
        
        E -- Sim --> F{"Vendas > 80.000?"}
        F -- Sim --> G["Exibir: Promovido ao nível II (alert)"] --> Z
        F -- Não --> H{"Vendas > 50.000?"}
        H -- Sim --> I["Bonificação: 35%"]
        H -- Não --> J{"Vendas > 20.000?"}
        J -- Sim --> K["Bonificação: 20%"]
        J -- Não --> L{"Vendas < 5.000?"}
        L -- Sim --> M["Exibir: Risco de demissão (alert)"]
        
        E -- Não --> N{"Nível == II?"}
        N -- Sim --> O{"Vendas > 200.000?"}
        O -- Sim --> P["Exibir: Promovido ao nível III (alert)"] --> Z
        O -- Não --> Q{"Vendas > 120.000?"}
        Q -- Sim --> R["Bonificação: 40%"]
        Q -- Não --> S{"Vendas > 90.000?"}
        S -- Sim --> T["Bonificação: 25%"]
        S -- Não --> U{"Vendas < 50.000?"}
        U -- Sim --> V["Exibir: Risco de virar nível I (alert)"]
    
        N -- Não --> W{"Nível == III?"}
        W -- Sim --> X{"Vendas > 500.000?"}
        X -- Sim --> Y["Exibir: Virou o dono da firma! (alert)"] --> Z
        X -- Não --> AA{"Vendas > 250.000?"}
        AA -- Sim --> BB["Bonificação: 45%"]
        AA -- Não --> CC{"Vendas > 210.000?"}
        CC -- Sim --> DD["Bonificação: 30%"]
        CC -- Não --> EE{"Vendas < 100.000?"}
        EE -- Sim --> FF["Exibir: Risco de virar nível II (alert)"]
    
        BB --> Z
        DD --> Z
        R --> Z
        T --> Z
        I --> Z
        K --> Z
        M --> Z
        V --> Z
        FF --> Z
        Y --> Z
    
        Z["Fim"]
    
        A:::Sky
        B:::Sky
        C:::Sky
        D:::Sky
        E:::Sky
        F:::Sky
        G:::Sky
        H:::Sky
        I:::Sky
        J:::Sky
        K:::Sky
        L:::Sky
        M:::Sky
        N:::Sky
        O:::Sky
        P:::Sky
        Q:::Sky
        R:::Sky
        S:::Sky
        T:::Sky
        U:::Sky
        V:::Sky
        W:::Sky
        X:::Sky
        Y:::Sky
        AA:::Sky
        BB:::Sky
        CC:::Sky
        DD:::Sky
        EE:::Sky
        FF:::Sky
        Z:::Sky
    
        classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
        style E stroke:none
        style F stroke:none
        style H stroke:none
        style J stroke:none
        style L stroke:none
        style N stroke:none
        style O stroke:none
        style Q stroke:none
        style S stroke:none
        style U stroke:none
        style W stroke:none
        style X stroke:none
        style AA stroke:none
        style CC stroke:none
        style EE stroke:none
    
    ```
