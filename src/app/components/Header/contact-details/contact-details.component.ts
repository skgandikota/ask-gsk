import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  ngOnInit() {
  }


  
  // modalRef: BsModalRef;
  // constructor(private modalService: BsModalService) { }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
  // }

  

  companyDetails = {
    "companyName": "Ignite Research",
    "companyNameImage": "https://res.cloudinary.com/igniteresearch/image/upload/v1563809348/Ir_web_app/cropped-logo_fexlwk.png",
    "companyCaption": "Helping You Get Published",
    "companyLogo": "https://res.cloudinary.com/igniteresearch/image/upload/v1563780981/Ir_web_app/Logo.png",
    "companyEmail": "support@igniteresearch.in",
    "companyPhone": "+91-6301436533",
    "companyAddress": "OMR Road, Chennai, TN, India",
    "companyFacebookUri": "https://www.facebook.com/igniteresearch/",
    "companyTwitterUri": "https://twitter.com/igniteresearch_",
    "companyGoogleMapPin": "https://g.page/ignite-research?share"
  };
  


}