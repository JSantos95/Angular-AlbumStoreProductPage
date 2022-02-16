import { Track } from "./track";

export interface Album2 {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}

export interface Album {
    id: number,
    artist: string,
    album: Album2,
}
