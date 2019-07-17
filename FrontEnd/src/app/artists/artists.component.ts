import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  artistsAssets : any = []

  getArtists() {
    return this.apiService.getArtists().subscribe((data : {}) => {
      this.artistsAssets = data
    })
  }

  ngOnInit() {
    this.getArtists()
  }

}
