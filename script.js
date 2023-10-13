let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    document.write("A new movie is added<br>");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    document.write("Printing all movies...<br>");
    allMovies.forEach((movie, index) => {
    document.write(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}<br>`);
    });
    document.write();
    document.write(`You have ${allMovies.length} movies in total<br>`);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    document.write(`printing movie that has a rating higher than ${rating}:<br>`);
    const highRatedMovies = allMovies.filter(movie => movie.rating > rating);

    highRatedMovies.forEach((movie, index) => {
    document.write(`${movie.title} has a rating of ${movie.rating})<br>`);
    });

    document.write();

    document.write(`In total, there are ${highRatedMovies.length} matches<br>`);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    const movie = allMovies.find(movie => movie.title === title);
    movie.haveWatched = !movie.haveWatched;
    document.write("changing the status of the movie...<br>");
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace document.write with display on web page*/
document.write("----------------<br>");
document.write("running program......<br>");
document.write("----------------<br>");
printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace document.write with display on web page*/
document.write("----------------<br>");
addMovie(movie1);
document.write("----------------<br>");



changeWatched("Spiderman");
/*replace document.write with display on web page*/
document.write("----------------<br>");

printMovies();

/*replace document.write with display on web page*/
document.write("----------------<br>");

changeWatched("Spiderman");
/*replace document.write with display on web page*/
document.write("----------------<br>");

printMovies();
/*replace document.write with display on web page*/
document.write("----------------<br>");

highRatings(3.5);