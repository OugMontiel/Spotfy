buscadorDeID('locura', 'multi');// Llamada a la función con los elementos específicos
obtenerInfoDeLaCancionPorId('4WNcduiCmDNfmTEz7JvmLv');// Llamada a la función con una ID específica
obtenerInfoDeAlbumPorId('3IBcauSj5M2A6lTeffJzdv') // Llamada a la función con una ID específica
async function obtenerInfoDeAlbumPorId(id) {
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f9d494855dmsha170eb7128cdf74p14566djsn6e1bd5a29e00',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

async function obtenerInfoDeLaCancionPorId(id) {
    const url = `https://spotify23.p.rapidapi.com/tracks/?ids=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f9d494855dmsha170eb7128cdf74p14566djsn6e1bd5a29e00',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return (result);
    } catch (error) {
        console.error(error);
    }
}
async function buscadorDeID(q, type) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${q}&type=${type}&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f9d494855dmsha170eb7128cdf74p14566djsn6e1bd5a29e00',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let types = result.${ type }.items;
        let results = [];
        types.forEach(album => {
            const uri = album.data.uri;
            const lastPart = uri.substring(uri.lastIndexOf(':') + 1);
            results.push(lastPart);
        });
        return results
    } catch (error) {
        console.error(error);
    }
}




