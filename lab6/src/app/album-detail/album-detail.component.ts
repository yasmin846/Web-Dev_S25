import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule,FormsModule, RouterModule],
  standalone: true,
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album: any;
  newTitle: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = this.album.title;
    });
  }

  save(): void {
    if (!this.album.id) return;
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(updatedAlbum => {
      this.album.title = updatedAlbum.title;
      alert('Updated successfully!');
    })
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
