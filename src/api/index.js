import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (type,sw,ne) =>{
    try{
        // console.log(sw.lat,ne.lat,sw.lng,ne.lng);
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            // get your own API key from Rapid API website and enter it here
            'x-rapidapi-key': process.env.REACT_APP_RAPID_TRAVEL_API_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          }
        });
        console.log('Resturtans are:',data)
        return data;

    }catch(error){
        console.log(error);
    }
}