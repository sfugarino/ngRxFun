import { Song } from './song';

export class Album {
    name = '';
    releaseDate = '';
    imageUrl = '';
    tracks: Song[] | undefined;
}
