// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


/* ANSWER */

function toPounds(penceString) {
    //  Quitar la letra "p" al final
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

    // AsegurarMe de que la cadena tenga al menos 3 dígitos
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

    // Extraer los dígitos de las libras
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

    // Extraer los dígitos de los pence
    const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2)
        .padEnd(2, "0");

    // Devolver el resultado como string formateado
    return `£${pounds}.${pence}`;
}
