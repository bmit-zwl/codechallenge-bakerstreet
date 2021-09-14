import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactDialogSuccessComponent } from '../../components/contact-dialog-success/contact-dialog-success.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  private routeQueryParams$: Subscription | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.routeQueryParams$ = this.activatedRoute.queryParams.subscribe((params) => {
      // dialog params
      if (params.contactsent) {
        this.openDialog();
      }
    });

  }

  private openDialog(){
    const dialogRef = this.dialog.open(ContactDialogSuccessComponent, {
      // width: '400px',
      data: null,
      backdropClass: 'backdrop-blurr',
      panelClass: "custom-dialog",
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['.'], { relativeTo: this.activatedRoute});
    });

    // this.dialog.afterAllClosed().subscribe(result => {});
  };

}
