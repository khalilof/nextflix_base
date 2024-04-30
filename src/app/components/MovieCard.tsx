import Image from 'next/image'
import Link from 'next/link';


export default function MovieCard({title, release_date, poster_path, overview, id}: {title: string, release_date: string, poster_path: string, overview: string, id: string}) {

    return (
        <div className="movie-card">
            <Image
                src={ `https://image.tmdb.org/t/p/original${ poster_path }` }
                alt={ title }
                width={ 320 }
                height={ 480 }
                layout="responsive"
                placeholder='blur'
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8b8RQDwAFGwGyY6GjKAAAAABJRU5ErkJggg=="
                className="object-cover"
            />
                <div className="absolute-overlay">
                <div className="details">
                    <h3>{ title }</h3>
                    <p>{ release_date }</p>
                    <p>{ overview }</p>
                    <div className="actions">
                        { /* TODO movie info link here */ }

                        { /* TODO add to watch list button here */ }
                    </div>
                </div>
            </div>
        </div>
    )
}