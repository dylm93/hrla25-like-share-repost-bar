const sampleSongs = [
    {
        songName: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'
    },
    {
        
        songName: 'Blitzkrieg Bop',
        artist: 'Ramones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://consequenceofsound.files.wordpress.com/2014/06/ramones-1976.jpg?quality=80&w=640'
    },
    {
       
        songName: 'Gimme Shelter',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'
    },
    {
       
        songName: 'People are Strange',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://i.ytimg.com/vi/deB_u-to-IE/hqdefault.jpg'
    },
    {
        
        songName: 'Fortunate Son',
        artist: 'CCR',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://img.discogs.com/kErYBMumf2FbhOWvRTHFRqRE8u8=/fit-in/600x605/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-371917-1393573750-9393.jpeg.jpg'
    },
    {
        songName: 'Angie',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        
        songName: 'Wild Horses',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
       
        songName: 'Sympathy for the Devil',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
       
        songName: 'Start Me Up',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        
        songName: 'Jumpin Jack Flash',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        songName: 'Brown Sugar',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        
        songName: 'Miss You',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
       
        songName: `She's so Cold`,
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
       
        songName: 'Under My Thumb',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        
        songName: 'Honky Tonk Women',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        songName: 'Midnight Rambler',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        
        songName: 'Beast of Burden',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
       
        songName: 'Tumbling Dice',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
       
        songName: 'As Tears Go By',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg'

    },
    {
        
        songName: 'Hello, I Love You',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://cloud10.todocoleccion.online/musica-cds/tc/2016/11/02/15/64461083.jpg'

    },
    {
        songName: 'Roadhouse Blues',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://cloud10.todocoleccion.online/musica-cds/tc/2016/11/02/15/64461083.jpg'

    },
    {
        
        songName: 'Riders on the Storm',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://cloud10.todocoleccion.online/musica-cds/tc/2016/11/02/15/64461083.jpg'

    },
    {
       
        songName: 'Light My Fire',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://cloud10.todocoleccion.online/musica-cds/tc/2016/11/02/15/64461083.jpg'

    },
    {
       
        songName: 'Break On Through',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://cloud10.todocoleccion.online/musica-cds/tc/2016/11/02/15/64461083.jpg'

    },
    {
        
        songName: 'Touch Me',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://cloud10.todocoleccion.online/musica-cds/tc/2016/11/02/15/64461083.jpg'

    },
    {
        songName: 'Black Dog',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'
    },
    {
        
        songName: 'Kashmir',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
       
        songName: 'Immigrant Song',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,        
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
       
        songName: 'Whole Lotta Love',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
        
        songName: 'Rock and Roll',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
        songName: 'Dazed and Confused',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
        
        songName: 'Ramble On',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
       
        songName: 'Good Times Bad Times',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
       
        songName: 'Misty Mountain Hop',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
        
        songName: 'All My Love',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
        songName: 'Fool in the Rain',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
        
        songName: 'Moby Dick',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg'

    },
    {
       
        songName: `Baba O'Reily`,
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
       
        songName: 'Pinball Wizard',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
        
        songName: 'My Generation',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
        songName: 'Magic Bus',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
        
        songName: 'Boris the Spider',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
       
        songName: 'Squeeze Box',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
       
        songName: `I'm Free`,
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
        
        songName: 'Happy Jack',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
        songName: 'My Wife',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
        
        songName: 'Summertime Blues',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
       
        songName: 'Young Man',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
       
        songName: '5.15',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'

    },
    {
        
        songName: 'Substitute',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg'
    },
]

module.exports = { sampleSongs }