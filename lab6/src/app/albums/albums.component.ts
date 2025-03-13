import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { AlbumsService} from '../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true, 
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }
  viewAlbum(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
  getAlbums(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }
}

