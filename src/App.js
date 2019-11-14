import React from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import "./Reset.css";

class App extends React.Component{
    state = {
        isLoading : true,
        movies: []
    };

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // 비동기 > 동기, axios로 부터 데이터를 완전히 수신할 떄까지 대기 async-await
        //                          ?sort_by=rating  옵션 정렬
        this.setState({
            movies,
            isLoading : false
        });
        console.log(movies);
    }
    componentDidMount(){
        this.getMovies();
        // mount 된 후 (axios로 부터 영화를 가져온 후 loading -> complete 변경)
        // constructor()에서 호출은 안되는 건가???
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {/* class=""   : class === class App{} */}
              {isLoading ?(
                <div className="loader">
                    <span className="loader__text">Loading..</span>
                </div>
                ): (
                    <div className="movies">
                        { movies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    // rendering component
                        ))}
                    </div>
                )}
            </section>
          );
    }
}

export default App;
