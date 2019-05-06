import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import '../../assets/bower_components/morris.js/morris.min.js';
declare var $;
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  activities: string[];
  authFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private router: Router) 
              { }

  ngOnInit() {
    this.initForm();
    this.activities = ['GOMA', 'COTRA', 'DISTY'];
    document.body.className = "hold-transition login-page";
    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }
  initForm(): void {
    this.authFormGroup = this.formBuilder.group({
      username: [''],
      password: [''],
      activite: ['']
    });
  }
  ngOnDestroy() {
    document.body.className = '';
  }

  login(formGrp: FormGroup) {
    console.log(formGrp.value);
    this.router.navigate(['/commande']);
  }

}
