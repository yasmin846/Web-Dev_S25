import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // this.albumsService.getAlbum(id).subscribe(album => {
    //   this.album = album;
    // });
    this.albumsService.getPhotos(id).subscribe((photos: any) => {
      this.photos = photos;
      console.log('Loaded:', this.photos);
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
