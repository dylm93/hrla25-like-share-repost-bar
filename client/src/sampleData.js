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
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg'
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
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg'

    },
    {
        songName: 'Roadhouse Blues',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg'

    },
    {
        
        songName: 'Riders on the Storm',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg'

    },
    {
       
        songName: 'Light My Fire',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg'

    },
    {
       
        songName: 'Break On Through',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg'

    },
    {
        
        songName: 'Touch Me',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg'

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
    {
        songName: 'Big Poppa',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'
    },
    {
        
        songName: 'Juicy',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'
    },
    {
       
        songName: 'Hypnotized',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'
    },
    {
       
        songName: 'Microphone Murderer',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'
    },
    {
        
        songName: 'Mo Money Mo Problems',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'
    },
    {
        songName: 'Angie',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'

    },
    {
        
        songName: 'One More Chance',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'

    },
    {
       
        songName: 'Runnin',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'

    },
    {
       
        songName: 'Notorious Thugs',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'
    },
    {
        
        songName: 'Gimme the Loot',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594'

    },
    {
        songName: 'Changes',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'
    },
    {
        
        songName: 'Dear Mama',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
       
        songName: `California Love`,
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
       
        songName: 'Hit Em Up',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        
        songName: 'Ghetto Gospel',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        songName: 'Hail Mary',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        
        songName: 'I Get Around',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
       
        songName: 'How Do U Want It',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
       
        songName: 'Life Goes On',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        
        songName: 'Breathin',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        songName: 'Thugz Mansion',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        
        songName: 'Riders on the Storm',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
       
        songName: 'To Live and Die in L.A.',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
       
        songName: 'Letter 2 My Unborn',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        
        songName: 'Gangsta Party',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg'

    },
    {
        songName: 'Come as You Are',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'
    },
    {
        
        songName: 'Polly',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
       
        songName: 'About a Girl',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,        
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
       
        songName: 'Lithium',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
        
        songName: 'All Apologies',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
        songName: 'In Bloom',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
        
        songName: 'Love Buzz',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
       
        songName: 'Something in the Way',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
       
        songName: 'Where Did You Sleep Last Night',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
        
        songName: 'Drain You',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
        songName: 'Lake of Fire',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
        
        songName: 'Dumb',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70'

    },
    {
       
        songName: `Smoke Two Joints`,
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'
    },
    {
       
        songName: 'Santeria',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
        
        songName: 'Doin Time',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
        songName: 'Pawn Shop',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
        
        songName: 'Jailhouse',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
       
        songName: 'Pool Shark',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
       
        songName: `Rivers of Babylon`,
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
        
        songName: 'Summertime',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
        songName: 'Ebin',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
        
        songName: 'STP',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
       
        songName: 'New Thrash',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
       
        songName: 'Garden Grove',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'

    },
    {
        
        songName: 'Scarlet Begonias',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg'
    }
]

module.exports = { sampleSongs }