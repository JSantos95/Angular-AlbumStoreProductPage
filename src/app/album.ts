import { Track } from "./track";

export interface CD {
    name: string,
    releaseDate: string,
    coverImage: string,
    tracks: Track[],
}

export interface Album {
    id: number,
    artist: string,
    album: CD,
}
