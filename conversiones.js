/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcularFahrenheit(tem)
{
    let resultado = (tem * 1.8) + 32;
    return resultado;
}

function calcularKelvin(tem)
{
    let resultado = tem + 273.15;
    return resultado;
}
function calcularFc(tem)
{
    let resultado = (tem - 32) * 0.55;
    return resultado;
}
function calcularFk(tem)
{
    let resultado = (tem + 32) * 0.55 + 273.15;
    return resultado;
}
function calcularKc(tem)
{
    let resultado = tem - 273.15;
    return resultado;
}
function calcularKf(tem)
{
    let resultado = (tem - 273.15) * 1.8 + 32;
    return resultado;
}

function calcularTemperatura(oper)
{
    let tem = parseFloat(document.getElementById("txtTemperatura").value);
    let resultado = 0;

    switch (oper)
    {
        case 1:
            resultado = calcularFahrenheit(tem);
            break;
        case 2:
            resultado = calcularKelvin(tem);
            break;
        case 3:
            resultado = calcularFc(tem);
            break;
        case 4:
            resultado = calcularFk(tem);
            break;
        case 5:
            resultado = calcularKc(tem);
            break;
        case 6:
            resultado = calcularKf(tem);
            break;
    }

    document.getElementById("txtResultado").value = resultado;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcularPulgadas(medidas)
{
    let resultado2 = medidas / 2.54;
    return resultado2;
}

function calcularPies(medidas)
{
    let resultado2 = medidas / 30.48;
    return resultado2;
}

function calcularYardas(medidas)
{
    let resultado2 = medidas / 91.44;
    return resultado2;
}

function calcularMillas(medidas)
{
    let resultado2 = medidas / 1609.4;
    return resultado2;
}

function calcularLongitudes(oper)
{
    let medidas = parseFloat(document.getElementById("txtMedidas").value);
    let resultado2 = 0;

    switch (oper)
    {
        case 1:
            resultado2 = calcularPulgadas(medidas);
            break;
        case 2:
            resultado2 = calcularPies(medidas);
            break;
        case 3:
            resultado2 = calcularYardas(medidas);
            break;
        case 4:
            resultado2 = calcularMillas(medidas);
            break;

    }

    document.getElementById("txtResultado2").value = resultado2;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convertirDe(valor)
{
    let resultado3 = valor / 24.04;
    return resultado3;
}

function convertirDc(valor)
{
    let resultado3 = valor / 14.24;
    return resultado3;
}

function convertirEr(valor)
{
    let resultado3 = valor / 26.2;
    return resultado3;
}

function convertirLe(valor)
{
    let resultado3 = valor / 30.05;
    return resultado3;
}

function convertirPc(valor)
{
    let resultado3 = valor / 0.028;
    return resultado3;
}

function convertirPu(valor)
{
    let resultado3 = valor / 0.56;
    return resultado3;
}

function convertirRp(valor)
{
    let resultado3 = valor / 0.32;
    return resultado3;
}

function convertirYn(valor)
{
    let resultado3 = valor / 0.22;
    return resultado3;
}

function convertirZt(valor)
{
    let resultado3 = valor / 5.78;
    return resultado3;
}

function calcularMonedas(oper)
{
    let valor = parseFloat(document.getElementById("txtCantidad").value);
    let resultado3 = 0;

    switch (oper)
    {
        case 1:
            resultado3 = convertirDe(valor);
            break;
        case 2:
            resultado3 = convertirDc(valor);
            break;
        case 3:
            resultado3 = convertirEr(valor);
            break;
        case 4:
            resultado3 = convertirLe(valor);
            break;
        case 5:
            resultado3 = convertirPc(valor);
            break;
        case 6:
            resultado3 = convertirPu(valor);
            break;
        case 7:
            resultado3 = convertirRp(valor);
            break;
        case 8:
            resultado3 = convertirYn(valor);
            break;
        case 9:
            resultado3 = convertirZt(valor);
            break;
    }

    document.getElementById("txtResultado3").value = resultado3;

}