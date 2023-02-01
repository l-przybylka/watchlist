import React from 'react'
import DataTable from './DataTable'
import Avatar from '@mui/material/Avatar';

const topMovies = [
    {
        "rank": 1,
        "title": "The Shawshank Redemption",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
        "rating": "9.3",
        "id": "top1",
        "year": 1994,
        "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "trailer": "https://www.youtube.com/embed/NmzuHjWmXOc",
        "genre": [
            "Drama"
        ],
        "director": [
            "Frank Darabont"
        ],
        "writers": [
            "Stephen King (based on the short novel \"Rita Hayworth and the Shawshank Redemption\" by)",
            "Frank Darabont (screenplay by)"
        ],
        "imdbid": "tt0111161"
    },
    {
        "rank": 2,
        "title": "The Godfather",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
        "rating": "9.2",
        "id": "top2",
        "year": 1972,
        "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
        "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        "trailer": "https://www.youtube.com/embed/rqGJyUB1Q3s",
        "genre": [
            "Crime",
            "Drama"
        ],
        "director": [
            "Francis Ford Coppola"
        ],
        "writers": [
            "Mario Puzo (screenplay by)",
            "Francis Ford Coppola (screenplay by)"
        ],
        "imdbid": "tt0068646"
    },
    {
        "rank": 3,
        "title": "The Dark Knight",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
        "rating": "9.0",
        "id": "top3",
        "year": 2008,
        "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "genre": [
            "Action",
            "Crime",
            "Drama"
        ],
        "director": [
            "Christopher Nolan"
        ],
        "writers": [
            "Jonathan Nolan (screenplay)",
            "Christopher Nolan (screenplay)",
            "David S. Goyer (story)"
        ],
        "imdbid": "tt0468569"
    },
    {
        "rank": 4,
        "title": "The Godfather Part II",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
        "rating": "9.0",
        "id": "top4",
        "year": 1974,
        "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
        "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "trailer": "https://www.youtube.com/embed/9O1Iy9od7-A",
        "genre": [
            "Crime",
            "Drama"
        ],
        "director": [
            "Francis Ford Coppola"
        ],
        "writers": [
            "Francis Ford Coppola (screenplay by)",
            "Mario Puzo (screenplay by)"
        ],
        "imdbid": "tt0071562"
    }
]



const MovieTable = () => {

    const rows = [
        { id: 1, col1: topMovies[0].rank, col2: topMovies[0].title, col3: topMovies[0].thumbnail, col4: topMovies[0].rating, col5: topMovies[0].description },
        { id: 2, col1: topMovies[1].rank, col2: topMovies[1].title, col3: topMovies[1].thumbnail, col4: topMovies[1].rating, col5: topMovies[1].description },
        { id: 3, col1: topMovies[2].rank, col2: topMovies[2].title, col3: topMovies[2].thumbnail, col4: topMovies[2].rating, col5: topMovies[2].description },
    ];

    const columns = [
        { field: 'col1', headerName: 'Rank', width: 50 },
        { field: 'col3', headerName: '', renderCell: (params) => { return (<Avatar variant="square" src={params.value} alt={`Thumbnail for ${params.row.col2}`} />) }, width: 50 },
        { field: 'col2', headerName: 'Title', width: 250 },
        { field: 'col4', headerName: 'Rating', width: 75 },
        { field: 'col5', headerName: 'Description', width: 350 },
    ];

    return (
        <DataTable
            rows={rows}
            columns={columns}
        />
    )
}

export default MovieTable