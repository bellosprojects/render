function obtenerColorTexto(colorHex){


    if(colorHex === 'white') return 'black';
    if(colorHex === 'black') return 'white';

    // Convertir el color hexadecimal a RGB
    const hex = colorHex.replace('#', '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calcular el brillo percibido
    const brightness = (r * .299 + g * .587 + b * .114) / 255;

    return brightness > 0.5 ? 'black' : 'white';
}