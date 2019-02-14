import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { interval } from 'rxjs/internal/Observable/interval';
import { startWith , switchMap } from 'rxjs/operators';
import { ModalService } from 'src/app/common/service/modal.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  rowsData = [];
  selectedPost = '';
  
  constructor(private postservice:PostService,private modalService: ModalService,private changeDetectionRef:ChangeDetectorRef) { }

  ngOnInit() {

    //Polling at every 10 seconds
    interval(10000).pipe(startWith(0),switchMap(()=>
        this.postservice.getpost('https://hn.algolia.com/api/v1/search_by_date?tags=story')
    ))
    .subscribe(response => {
      if(this.rowsData.length!== response.length || this.rowsData[0].title != response[0].title){
          this.rowsData = response;
          this.changeDetectionRef.detectChanges();
      }
    })
  }
  postSelected(post_title){
    this.selectedPost = post_title;
    this.modalService.open('postModal');
      
  }
  closeModal(id: string) {
    this.modalService.close(id);
    this.selectedPost  = '';
  }

}
