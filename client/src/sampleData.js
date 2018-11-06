const sampleSongs = [
    {
        songName: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'
    },
    {
        
        songName: 'Blitzkrieg Bop',
        artist: 'Ramones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://consequenceofsound.files.wordpress.com/2014/06/ramones-1976.jpg?quality=80&w=640',
        releasedBy: 'Sire Records'
    },
    {
       
        songName: 'Gimme Shelter',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'
    },
    {
       
        songName: 'People are Strange',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: 'Elektra Records'

    },
    {
        
        songName: 'Fortunate Son',
        artist: 'CCR',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://img.discogs.com/kErYBMumf2FbhOWvRTHFRqRE8u8=/fit-in/600x605/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-371917-1393573750-9393.jpeg.jpg',
        releasedBy: 'Fantasy Records'
    },
    {
        songName: 'Angie',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        
        songName: 'Wild Horses',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
       
        songName: 'Sympathy for the Devil',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
       
        songName: 'Start Me Up',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        
        songName: 'Jumpin Jack Flash',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        songName: 'Brown Sugar',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        
        songName: 'Miss You',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
       
        songName: `She's so Cold`,
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
       
        songName: 'Under My Thumb',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        
        songName: 'Honky Tonk Women',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        songName: 'Midnight Rambler',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        
        songName: 'Beast of Burden',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
       
        songName: 'Tumbling Dice',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
       
        songName: 'As Tears Go By',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: 'Atlantic Records'

    },
    {
        
        songName: 'Hello, I Love You',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: 'Elektra Records'


    },
    {
        songName: 'Roadhouse Blues',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: 'Elektra Records'


    },
    {
        
        songName: 'Riders on the Storm',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: 'Elektra Records'


    },
    {
       
        songName: 'Light My Fire',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: 'Elektra Records'


    },
    {
       
        songName: 'Break On Through',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: 'Elektra Records'


    },
    {
        
        songName: 'Touch Me',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: 'Elektra Records'


    },
    {
        songName: 'Black Dog',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'
    },
    {
        
        songName: 'Kashmir',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
       
        songName: 'Immigrant Song',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,        
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'

    },
    {
       
        songName: 'Whole Lotta Love',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
        
        songName: 'Rock and Roll',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
        songName: 'Dazed and Confused',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
        
        songName: 'Ramble On',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
       
        songName: 'Good Times Bad Times',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
       
        songName: 'Misty Mountain Hop',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
        
        songName: 'All My Love',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
        songName: 'Fool in the Rain',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
        
        songName: 'Moby Dick',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: 'Rhino Atlantic'


    },
    {
       
        songName: `Baba O'Reily`,
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'

    },
    {
       
        songName: 'Pinball Wizard',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
        
        songName: 'My Generation',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
        songName: 'Magic Bus',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
        
        songName: 'Boris the Spider',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
       
        songName: 'Squeeze Box',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
       
        songName: `I'm Free`,
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
        
        songName: 'Happy Jack',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
        songName: 'My Wife',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
        
        songName: 'Summertime Blues',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
       
        songName: 'Young Man',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
       
        songName: '5.15',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'


    },
    {
        
        songName: 'Substitute',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: 'Brunswick Records'

    },
    {
        songName: 'Big Poppa',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'
    },
    {
        
        songName: 'Juicy',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'

    },
    {
       
        songName: 'Hypnotized',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'

    },
    {
       
        songName: 'Microphone Murderer',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'

    },
    {
        
        songName: 'Mo Money Mo Problems',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'

    },
    {
        songName: 'Angie',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'


    },
    {
        
        songName: 'One More Chance',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'


    },
    {
       
        songName: 'Runnin',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'


    },
    {
       
        songName: 'Notorious Thugs',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'

    },
    {
        
        songName: 'Gimme the Loot',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: 'Bad Boy Records'


    },
    {
        songName: 'Changes',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'
    },
    {
        
        songName: 'Dear Mama',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
       
        songName: `California Love`,
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
       
        songName: 'Hit Em Up',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        
        songName: 'Ghetto Gospel',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        songName: 'Hail Mary',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        
        songName: 'I Get Around',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
       
        songName: 'How Do U Want It',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
       
        songName: 'Life Goes On',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        
        songName: 'Breathin',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        songName: 'Thugz Mansion',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        
        songName: 'Riders on the Storm',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
       
        songName: 'To Live and Die in L.A.',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',        releasedBy: 'Death Row Records'


    },
    {
       
        songName: 'Letter 2 My Unborn',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        
        songName: 'Gangsta Party',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: 'Death Row Records'


    },
    {
        songName: 'Come as You Are',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'
    },
    {
        
        songName: 'Polly',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'
    },
    {
       
        songName: 'About a Girl',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,        
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
       
        songName: 'Lithium',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
        
        songName: 'All Apologies',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
        songName: 'In Bloom',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
        
        songName: 'Love Buzz',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
       
        songName: 'Something in the Way',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
       
        songName: 'Where Did You Sleep Last Night',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
        
        songName: 'Drain You',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
        songName: 'Lake of Fire',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
        
        songName: 'Dumb',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: 'Island Records'

    },
    {
       
        songName: `Smoke Two Joints`,
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'
    },
    {
       
        songName: 'Santeria',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
        
        songName: 'Doin Time',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
        songName: 'Pawn Shop',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
        
        songName: 'Jailhouse',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
       
        songName: 'Pool Shark',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
       
        songName: `Rivers of Babylon`,
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
        
        songName: 'Summertime',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
        songName: 'Ebin',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
        
        songName: 'STP',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
       
        songName: 'New Thrash',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
       
        songName: 'Garden Grove',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'


    },
    {
        
        songName: 'Scarlet Begonias',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: 'Skunk Records'

    }
]

module.exports = { sampleSongs }