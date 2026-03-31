import prompt from "prompt-sync";
import { Veiculo } from "./Veiculo";

const teclado = prompt();

console.log("Criação de veículo");
const carro: Veiculo = criaVeiculo();

function criaVeiculo(): Veiculo {
  const veiculo: Veiculo = new Veiculo();
  veiculo.marca = teclado("Marca: ");
  veiculo.modelo = teclado("Modelo: ");
  veiculo.potencia = +teclado("Potência: ");
  veiculo.rodas = +teclado("Número de rodas: ");
  veiculo.numeroMarchas = +teclado("Número de marchas: ");
  veiculo.ano = +teclado("Ano: ");
  return veiculo;
}

while (true) {
  console.clear();
  console.log("########### MENU ###########");
  console.log("1 - Acelerar");
  console.log("2 - Frear");
  console.log("3 - Subir marcha");
  console.log("4 - Descer marcha");
  console.log("5 - Imprimir dados do veículo");
  console.log("6 - Abastecer");
  console.log("0 - Sair");

  const opcao = +teclado("Escolha uma opção: ");
  if (opcao === 0) break;

  switch (opcao) {
    case 1:
      acelerar(carro);
      break;
    case 2:
      frear(carro);
      break;
    case 3:
      subirMarcha(carro);
      break;
    case 4:
      descerMarcha(carro);
      break;
    case 5:
      imprimir(carro);
      break;
    case 6:
      abastecer(carro);
      break;

    default:
      break;
  }
  teclado("ENTER para continuar.");
}

console.table(carro);

function acelerar(veiculo: Veiculo): void {
  if (veiculo.combustivel <= 0) {
    console.log("Pane Seca! O veículo está sem combustível.");
    veiculo.combustivel = 0;
    return;
  }

  if (veiculo.marchaAtual != 0) {
    veiculo.velocidade += veiculo.potencia * 0.1;

    const gasto = veiculo.potencia * 0.05;
    veiculo.combustivel -= gasto;

    if (veiculo.combustivel < 0) veiculo.combustivel = 0;

    console.log(
      `Velocidade: ${veiculo.velocidade.toFixed(1)} km/h | Combustível: ${veiculo.combustivel.toFixed(1)}%`,
    );
  } else {
    console.log("O carro está em ponto morto! Engate uma marcha.");
  }
}

function frear(veiculo: Veiculo): void {
  if (veiculo.velocidade > 0) {
    veiculo.velocidade -= veiculo.potencia * 0.1;
    if (veiculo.velocidade < 0) veiculo.velocidade = 0;
    console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(1)}`);
  } else {
    console.log("O veículo já está parado.");
  }
}

function subirMarcha(veiculo: Veiculo): void {
  if (veiculo.marchaAtual < veiculo.numeroMarchas) {
    veiculo.marchaAtual++;
    console.log(`Marcha atual: ${veiculo.marchaAtual}`);
  } else {
    console.log("Já está na marcha máxima.");
  }
}

function descerMarcha({ marchaAtual, numeroMarchas }: Veiculo): void {
  if (marchaAtual < -1) {
    console.log("Marcha Inválida! Escolha entre -1 (ré) e " + numeroMarchas);
    return;
  }
  marchaAtual--;
  console.log(`Marcha atual: ${marchaAtual}`);
}

function mudarMarcha(veiculo: Veiculo, novaMarcha: number): void {
  if (novaMarcha < -1 || novaMarcha > veiculo.numeroMarchas) {
    console.log("Marcha Inválida! Escolha entre -1 (ré) e " + veiculo.numeroMarchas);
    return;
  }
  veiculo.marchaAtual = novaMarcha;
  if (novaMarcha === -1) {
    console.log("Marcha em Ré");
  } else if (novaMarcha === 0) {
    console.log("Ponto Morto");
  } else {
    console.log("Marcha " + novaMarcha);
  }
}

function imprimir(veiculo: Veiculo): void {
  console.table(veiculo);
}

function abastecer(veiculo: Veiculo): void {
  if (veiculo.velocidade > 0) {
    console.log("Segurança em primeiro lugar! Pare o carro para abastecer.");
    return;
  }

  veiculo.combustivel = 100;
  console.log("Depósito cheio! Pode seguir viagem.");
}
