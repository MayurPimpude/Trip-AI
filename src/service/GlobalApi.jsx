import axios from "axios"

const BASE_URL = 'https://places.googleapis.com/v1/places:searchText'

const config = {
    headers:{
        'Content-Type' : 'applicationm/json',
        'X-Google-Api-key':import.meta.env.VITE_GOOGLE_PLACE_API,
        'X-Goog-FieldMask' :[
            'places.displayName',
            'places.id',
            'places.photos',
        ]
    }
}

export const GetPlaceDetails=(data)=>axios.post(BASE_URL,data,config)