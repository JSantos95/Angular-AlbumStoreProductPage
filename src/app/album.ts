export interface Track {
    trackNumber: number;
    trackName: string;
    trackLength: string;
    trackPrice: number;
}

export interface Album {
    name: string,
    releaseDate: string,
    coverImage: string,
    tracks: Track[],
}

export interface CD {
    id: number,
    artist: string,
    album: Album,
}
